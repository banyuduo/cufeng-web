# -*- coding: utf-8 -*-
"""FTP 递归上传 out/ 到阿里云虚拟主机 /htdocs/（二进制模式，含隐藏 .htaccess）。
用法:
  python scripts/ftp-upload.py          完整上传
  python scripts/ftp-upload.py --check  仅测试连接并列出远程目录，不做上传
凭据: 项目根 .deploy-secrets.json（已 gitignore）
"""
import json, os, sys, time
from ftplib import FTP, error_perm

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECRETS = os.path.join(ROOT, ".deploy-secrets.json")
LOCAL = os.path.join(ROOT, "out")
REMOTE = "/htdocs"

def load_secrets():
    with open(SECRETS, encoding="utf-8") as f:
        s = json.load(f)
    for k in ("ftpHost", "ftpPort", "ftpUser", "ftpPass"):
        if k not in s:
            sys.exit(f"[错误] .deploy-secrets.json 缺少字段: {k}")
    return s

def connect(s):
    ftp = FTP()
    ftp.encoding = "gbk"  # 万网虚拟主机目录列表为 GBK
    ftp.connect(s["ftpHost"], int(s.get("ftpPort", 21)), timeout=60)
    ftp.login(s["ftpUser"], s["ftpPass"])
    return ftp

def sort_key(rel):
    if rel.startswith("_next/"):
        return (0, rel)          # 1. 先传 _next（新哈希 JS/CSS）
    if "/" not in rel:
        return (2, rel)          # 3. 根目录 HTML 最后
    return (1, rel)              # 2. 其余目录（zh/en/styles/...）

def upload_all(ftp):
    files = []
    for root, _dirs, fnames in os.walk(LOCAL):
        for f in fnames:
            full = os.path.join(root, f)
            rel = os.path.relpath(full, LOCAL).replace(os.sep, "/")
            files.append((rel, os.path.getsize(full)))
    files.sort(key=lambda x: sort_key(x[0]))
    total_size = sum(sz for _, sz in files)
    print(f"本地文件数: {len(files)}, 总大小: {total_size/1024/1024:.1f}MB")

    created = {""}
    def ensure_dir(rdir):
        if rdir in created:
            return
        cur = ""
        for p in [x for x in rdir.split("/") if x]:
            cur = f"{cur}/{p}" if cur else f"/{p}"
            if cur not in created:
                try:
                    ftp.mkd(cur)
                except error_perm:
                    pass
                created.add(cur)

    ok = fail = 0
    t0 = time.time()
    for rel, size in files:
        ensure_dir(os.path.dirname(rel))
        rpath = f"{REMOTE}/{rel}"
        try:
            with open(os.path.join(LOCAL, rel.replace("/", os.sep)), "rb") as fh:
                ftp.storbinary(f"STOR {rpath}", fh)
            ok += 1
        except Exception as e:
            fail += 1
            print(f"FAIL {rel}: {type(e).__name__}: {e}")
        if ok % 300 == 0:
            print(f"  进度 {ok}/{len(files)}, {time.time()-t0:.0f}s")
    print(f"完成: 成功 {ok}, 失败 {fail}, 耗时 {time.time()-t0:.0f}s")

def main():
    s = load_secrets()
    ftp = connect(s)
    print("FTP 登录成功")
    try:
        ftp.cwd(REMOTE)
        print(f"远程目录: {ftp.pwd()}")
    except Exception as e:
        print(f"[警告] 进入 {REMOTE} 失败: {e}")
    if "--check" in sys.argv:
        lines = []
        ftp.retrlines("LIST", lines.append)
        for ln in lines[:40]:
            print(" ", ln)
        ftp.quit()
        return
    upload_all(ftp)
    ftp.quit()

if __name__ == "__main__":
    main()
