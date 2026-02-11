/** @type {import('next').NextConfig} */
const nextConfig = {
  // 导出为纯静态站点，便于部署到阿里云虚拟主机
  output: "export",

  // 生成带斜杠的路径，方便静态主机解析目录下的 index.html
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  // 关闭 Next 内置图片优化，以便在静态导出环境正常加载图片
  images: {
    unoptimized: true,
  },
}

export default nextConfig
