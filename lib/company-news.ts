import type { Locale } from "./i18n"

export type CompanyNewsItem = {
  date: string
  title: string
  category: string
  content: string[]
}

const companyNewsContent: Record<Locale, Record<string, CompanyNewsItem>> = {
  zh: {
    "2025-patents": {
      date: "2025年",
      title: "完成核心专利布局",
      category: "技术突破",
      content: [
        "2025年，簇锋科技将过去数年在界面力学、原子级键合及内生应力调控方面的技术方案进行系统整理与转化。",
        "通过研发攻关，完成 9 项核心发明专利布局。专利群覆盖高性能散热基板制备工艺，并延伸到 sp²–sp³ 全碳复合材料的底层结构。",
        "专利覆盖从金刚石活性熔固工具到全碳功能材料，服务于半导体热管理、新能源汽车及相关技术授权。",
      ],
    },
    "2025-diamond-copper": {
      date: "2025年",
      title: "金刚石铜复合材料开发成功",
      category: "产品开发",
      content: [
        "经过多次配方优化与界面浸润实验，簇锋科技开发出金刚石铜复合材料。",
        "实测室温热导率稳定达到 680 W/m·K 以上，高于传统纯铜（380 W/m·K）及常规铝碳化硅材料。",
        "该技术用于解决金刚石与铜热胀系数不匹配导致的结合问题，面向高功率密度电子器件（如 AI 芯片、大功率激光器）的散热需求。",
      ],
    },
    "2024-nonstick": {
      date: "2024年",
      title: "金刚石涂层不粘锅开发成功",
      category: "产品开发",
      content: [
        "2024–2025年，簇锋科技将工业级金刚石颗粒固着技术引入消费品领域，开发出金刚石涂层不粘锅。",
        "通过活性金属与 sp³ 的界面键合，将金刚石微粉锚定在锅具表面，提高表面硬度和耐磨性（可使用金属铲），并利用金刚石导热实现快热匀热。",
        "这一跨界尝试表明，工业界面固着技术可以进入消费品，并形成可验证的产品形态。",
      ],
    },
    "2023-brazing-tools": {
      date: "2024年",
      title: "活性熔固超硬工具系列开发成功",
      category: "产品开发",
      content: [
        "2023年起，公司继续开发超硬工具。2024年，针对高精度医疗器械及工业精密加工需求，开发出高强度牙科磨头与活性熔固 CBN 砂轮系列。",
        "通过优化活性熔料配方和真空活性熔固工艺，实现磨粒与基体的化学结合。对比测试显示，高速加工中磨粒掉落率较低，使用寿命达到传统电镀工具的 3 倍以上。",
        "该系列用于高强度材料的精密加工。",
      ],
    },
    "2023-relocation": {
      date: "2023年",
      title: "公司迁址南京",
      category: "公司动态",
      content: [
        "2023年，簇锋科技由镇江迁至南京市江北新区。",
        "在江北新区研发平台支持下，优化研发资源，继续拓展超硬工具应用，并利用当地产学研条件，攻克超硬材料在复杂工况下的稳定性问题。",
        "迁址后，研发流程与实验资源进一步集中，并针对超硬工具的耐磨性、抗冲击性及材料配方持续迭代。",
      ],
    },
    "2022-team": {
      date: "2022年",
      title: "核心团队组建完成",
      category: "团队建设",
      content: [
        "2022年，簇锋科技确立了以技术研发、工程实施、业务拓展为核心的三人架构。",
        "三位核心成员分别负责超硬材料开发、制备与自动化装备工程，以及新能源领域市场开发。",
        "自此，公司在金刚石工具应用与金刚石功能材料领域的系统布局正式启动。",
      ],
    },
    "2018-research-center": {
      date: "2018年6月12日",
      title: "簇锋科技研发中心成立",
      category: "公司动态",
      content: [
        "2018年6月，簇锋科技研发中心在镇江句容产业园成立。",
        "初期配置感应焊接炉、自动化焊接工装、切割测试平台及显微观测仪等设备，用于超硬磨料工具的机理研究与应用开发。",
        "研发中心为后续技术产出提供了固定的组织与实验条件。",
      ],
    },
    "2018-website": {
      date: "2018年6月6日",
      title: "官方网站正式上线",
      category: "公司动态",
      content: [
        "簇锋科技官方网站（www.tospike.com）于2018年6月6日上线。",
        "网站用于展示产品与技术，并作为与客户、行业伙伴的沟通渠道。",
        "ToSpike 取“突破巅峰”之意。",
      ],
    },
    "2018-founding": {
      date: "2018年3月12日",
      title: "南京簇锋机电科技有限公司成立",
      category: "公司动态",
      content: [
        "2018年3月12日，南京簇锋机电科技有限公司在江苏省注册成立。",
        "成立之初，定位为超硬磨料工具行业解决方案提供商，专注铸件加工、硬脆材料加工及高精密工具的研发与定制。",
        "从工程工具制造商，到构建基于 sp²–sp³ 键合原理的全碳材料平台，簇锋科技以技术解决实际问题，目标是成为客户的方案提供方。",
      ],
    },
  },
  en: {
    "2025-patents": {
      date: "2025",
      title: "Core Patent Layout Completed",
      category: "Technology Breakthrough",
      content: [
        "In 2025, CuFeng Technology systematically organized and converted technical work in interface mechanics, atomic-level bonding, and endogenous stress regulation into patents.",
        "Nine core invention patents were filed. The portfolio covers preparation of high-performance thermal spreaders and extends to the underlying structure of sp²–sp³ all-carbon composites.",
        "The patents span diamond active fusion-bonded tools through all-carbon functional materials, and support work in semiconductor thermal management, new energy vehicles, and related technology licensing.",
      ],
    },
    "2025-diamond-copper": {
      date: "2025",
      title: "Diamond-Copper Composite Successfully Developed",
      category: "Product Development",
      content: [
        "After multiple formulation and interface-wetting experiments, CuFeng Technology developed a diamond-copper composite.",
        "Measured room-temperature thermal conductivity is stably above 680 W/m·K, higher than conventional pure copper (380 W/m·K) and typical AlSiC materials.",
        "The process addresses bonding issues caused by the CTE mismatch between diamond and copper, and is intended for thermal management of high-power-density electronics such as AI chips and high-power lasers.",
      ],
    },
    "2024-nonstick": {
      date: "2024",
      title: "Diamond Coating Nonstick Cookware Successfully Developed",
      category: "Product Development",
      content: [
        "In 2024–2025, CuFeng Technology applied industrial diamond-particle bonding to consumer goods and developed diamond-coated nonstick cookware.",
        "Active-metal bonding with sp³ carbon anchors diamond powder on the cookware surface, raising hardness and wear resistance (including metal-spatula use) and using diamond thermal conductivity for faster, more even heating.",
        "This cross-sector attempt shows that industrial interface bonding can enter consumer products and yield a verifiable product form.",
      ],
    },
    "2023-brazing-tools": {
      date: "2024",
      title: "Active Fusion-Bonded Superabrasive Tool Series Successfully Developed",
      category: "Product Development",
      content: [
        "From 2023 the company continued superabrasive-tool development. In 2024 it produced high-strength dental burs and an active fusion-bonded CBN wheel series for precision medical devices and industrial machining.",
        "Optimized active-brazing formulations and vacuum fusion bonding form a chemical bond between grain and matrix. Comparative tests show a lower grain-drop rate in high-speed machining, with service life more than 3× that of conventional electroplated tools.",
        "The series is used for precision machining of high-strength materials.",
      ],
    },
    "2023-relocation": {
      date: "2023",
      title: "Company Relocates to Nanjing",
      category: "Company News",
      content: [
        "In 2023, CuFeng Technology moved from Zhenjiang to Nanjing Jiangbei New Area.",
        "With the Jiangbei R&D platform, it concentrated research resources, continued to expand superabrasive-tool applications, and used local industry–academia conditions to work on material stability under complex loads.",
        "After the move, R&D process and lab resources were further consolidated, and wear resistance, impact resistance, and formulations of superabrasive tools continued to be iterated.",
      ],
    },
    "2022-team": {
      date: "2022",
      title: "Core Team Formation Completed",
      category: "Team Building",
      content: [
        "In 2022, CuFeng Technology set a three-person structure around technical R&D, engineering, and business development.",
        "The three core members cover superabrasive materials, preparation and automation equipment, and new-energy market development.",
        "Systematic work in diamond-tool applications and diamond functional materials began from that point.",
      ],
    },
    "2018-research-center": {
      date: "June 12, 2018",
      title: "CuFeng Technology R&D Center Established",
      category: "Company News",
      content: [
        "In June 2018, the CuFeng Technology R&D Center was established in Jurong Industrial Park, Zhenjiang.",
        "Initial equipment included induction welding furnaces, automated welding fixtures, cutting test platforms, and microscopes, used for mechanism studies and application development of superabrasive tools.",
        "The center provided a fixed organization and lab setup for later technical work.",
      ],
    },
    "2018-website": {
      date: "June 6, 2018",
      title: "Official Website Launched",
      category: "Company News",
      content: [
        "The official website (www.tospike.com) went online on June 6, 2018.",
        "It presents products and technology and serves as a channel with customers and industry partners.",
        "ToSpike is intended to mean a breakthrough to the peak.",
      ],
    },
    "2018-founding": {
      date: "March 12, 2018",
      title: "Nanjing CuFeng Mechanical & Electrical Technology Co., Ltd. Founded",
      category: "Company News",
      content: [
        "On March 12, 2018, Nanjing CuFeng Mechanical & Electrical Technology Co., Ltd. was registered in Jiangsu Province.",
        "At inception it was positioned as a superabrasive-tool solution provider, focused on R&D and custom work for castings, hard-brittle materials, and high-precision tools.",
        "From an engineering tool manufacturer to building an all-carbon material platform based on sp²–sp³ bonding principles, CuFeng Technology solves practical problems with technology, aiming to be a solution provider for customers.",
      ],
    },
  },
}

export const COMPANY_NEWS_IDS = [
  "2025-patents",
  "2025-diamond-copper",
  "2024-nonstick",
  "2023-brazing-tools",
  "2023-relocation",
  "2022-team",
  "2018-research-center",
  "2018-website",
  "2018-founding",
] as const

export function getCompanyNews(id: string, locale: Locale): CompanyNewsItem | undefined {
  const localeData = companyNewsContent[locale]
  return localeData?.[id]
}

export function getCompanyNewsIds(): string[] {
  return [...COMPANY_NEWS_IDS]
}
