const OWNER = "Ryder-MHumble";

const PROJECTS = [
  {
    repo: "Meldwork",
    emoji: "🧩",
    name: "Meldwork",
    en: "Local-first desktop workspace for persistent multi-agent work, native CLI sessions, and controlled collaboration.",
    zh: "本地优先的桌面工作区，用于持久化多 Agent 任务、原生 CLI 会话和受控协作。",
    badges: {
      en: [
        "![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111)",
        "![Desktop](https://img.shields.io/badge/-DesktopWorkspace-0E75B6?style=flat-square)",
      ],
      zh: [
        "![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111)",
        "![Desktop](https://img.shields.io/badge/-%E6%A1%8C%E9%9D%A2%E5%B7%A5%E4%BD%9C%E5%8C%BA-0E75B6?style=flat-square)",
      ],
    },
  },
  {
    repo: "Realm",
    emoji: "🌐",
    name: "Realm",
    en: "Real-time 3D visualization of AI agent activity — multi-agent orchestration visualizer with REST API integration.",
    zh: "AI Agent 活动的实时 3D 可视化，多 Agent 编排可视化器，并支持外部系统 REST API 接入。",
    badges: {
      en: [
        "![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)",
        "![3D](https://img.shields.io/badge/-Visualization-8B5CF6?style=flat-square)",
      ],
      zh: [
        "![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)",
        "![3D](https://img.shields.io/badge/-3D%E5%8F%AF%E8%A7%86%E5%8C%96-8B5CF6?style=flat-square)",
      ],
    },
  },
  {
    repo: "EvoLabeler-AIAgent-MLOps",
    emoji: "🔬",
    name: "EvoLabeler",
    en: "Self-evolving MLOps engine for remote sensing — Multi-Agent system (IDEATE framework) for automated detection.",
    zh: "面向遥感目标检测的自进化 MLOps 引擎，基于 IDEATE 框架的 Multi-Agent 系统。",
    badges: {
      en: [
        "![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)",
        "![MLOps](https://img.shields.io/badge/-MLOps-EE4C23?style=flat-square)",
      ],
      zh: [
        "![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)",
        "![MLOps](https://img.shields.io/badge/-MLOps-EE4C23?style=flat-square)",
      ],
    },
  },
  {
    repo: "Scholars-System",
    emoji: "🎓",
    name: "Scholars-System",
    en: "Academic intelligence platform — knowledge graph-powered scholar profiling and talent discovery.",
    zh: "学术情报平台，基于知识图谱构建学者画像与人才发现能力。",
    badges: {
      en: [
        "![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)",
        "![KG](https://img.shields.io/badge/-KnowledgeGraph-8B5CF6?style=flat-square)",
      ],
      zh: [
        "![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)",
        "![KG](https://img.shields.io/badge/-%E7%9F%A5%E8%AF%86%E5%9B%BE%E8%B0%B1-8B5CF6?style=flat-square)",
      ],
    },
  },
  {
    repo: "Guameow",
    emoji: "🐱",
    name: "Guameow",
    en: "AI fortune app for Gen Z — daily fortune, AI chat, tarot, and playful interaction loops.",
    zh: "面向 Z 世代的 AI 玄学 App，包含每日运势、AI 聊天、塔罗和轻量互动循环。",
    badges: {
      en: [
        "![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat-square&logo=dart&logoColor=white)",
        "![Flutter](https://img.shields.io/badge/-Flutter-02569B?style=flat-square)",
      ],
      zh: [
        "![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat-square&logo=dart&logoColor=white)",
        "![Flutter](https://img.shields.io/badge/-Flutter-02569B?style=flat-square)",
      ],
    },
  },
  {
    repo: "TDA-YOLO",
    emoji: "🛰️",
    name: "TDA-YOLO",
    en: "Adaptive YOLO framework for UAV remote sensing object detection with enhanced sampling and detection heads.",
    zh: "面向无人机遥感目标检测的自适应 YOLO 框架，强化采样机制与检测头设计。",
    badges: {
      en: [
        "![Research](https://img.shields.io/badge/-Research-1A3A5C?style=flat-square)",
        "![YOLO](https://img.shields.io/badge/-RemoteSensing-10B981?style=flat-square)",
      ],
      zh: [
        "![Research](https://img.shields.io/badge/-%E7%A0%94%E7%A9%B6-1A3A5C?style=flat-square)",
        "![YOLO](https://img.shields.io/badge/-%E9%81%A5%E6%84%9F%E6%A3%80%E6%B5%8B-10B981?style=flat-square)",
      ],
    },
  },
];

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

if (token) {
  headers.Authorization = `Bearer ${token}`;
}

async function getStars(repo) {
  const response = await fetch(`https://api.github.com/repos/${OWNER}/${repo}`, { headers });

  if (!response.ok) {
    throw new Error(`GitHub API failed for ${repo}: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  return data.stargazers_count;
}

function renderCell(project, language) {
  return `<td width="50%">

#### ${project.emoji} [${project.name}](https://github.com/${OWNER}/${project.repo}) \`⭐ ${project.stars}\`
> ${project[language]}

${project.badges[language].join("\n")}

</td>`;
}

function renderTable(projects, language) {
  const rows = [];

  for (let index = 0; index < projects.length; index += 2) {
    const left = renderCell(projects[index], language);
    const right = projects[index + 1] ? renderCell(projects[index + 1], language) : '<td width="50%"></td>';
    rows.push(`<tr>\n${left}\n${right}\n</tr>`);
  }

  return `<!-- featured-projects:start -->
<table>
${rows.join("\n")}
</table>
<!-- featured-projects:end -->`;
}

async function updateFile(path, heading, nextHeading, table) {
  const { readFile, writeFile } = await import("node:fs/promises");
  const content = await readFile(path, "utf8");
  const headingStart = content.indexOf(`${heading}\n`);

  if (headingStart === -1) {
    throw new Error(`Heading not found in ${path}: ${heading}`);
  }

  const contentStart = headingStart + heading.length + 1;
  const nextStart = content.indexOf(`\n${nextHeading}`, contentStart);

  if (nextStart === -1) {
    throw new Error(`Next heading not found in ${path}: ${nextHeading}`);
  }

  const updated = `${content.slice(0, contentStart)}\n${table}\n${content.slice(nextStart)}`;
  await writeFile(path, updated);
}

const projectsWithStars = await Promise.all(
  PROJECTS.map(async (project, index) => ({
    ...project,
    index,
    stars: await getStars(project.repo),
  })),
);

projectsWithStars.sort((a, b) => b.stars - a.stars || a.index - b.index);

await updateFile("README.md", "## Featured Projects", "## Build Signals", renderTable(projectsWithStars, "en"));
await updateFile("README.zh.md", "## 代表项目", "## 构建信号", renderTable(projectsWithStars, "zh"));

console.log(projectsWithStars.map((project) => `${project.name}: ${project.stars}`).join("\n"));
