# AI 写作工作台 · AI Writing Studio

> **Speak your draft** — a transparent 3-stage agent pipeline turns spoken notes into publishable pieces.
> 从口述到成稿：说一段话，透明 Agent 流水线帮你判断意图、查资料、规划、成稿、润色。

AI Builders Hackathon 2026 参赛作品。大多数 AI 写作工具是"输入框 + 一次性黑盒输出"，我们做的是**透明、可控、可交互的 Agent 工作流**。

> 另有 Kaggle AI Builder Hackathon 2026 的参赛入口：访问 `/scene`，把自然语言直接编排成可交互的浏览器 3D 场景。详见 [KAGGLE_SUBMISSION.md](./KAGGLE_SUBMISSION.md)。

## ✨ 它有什么不一样

| 能力 | 说明 |
|---|---|
| 🎙 语音直达成稿 | Web Speech API 中文实时转写，"停止即生成"，说完就出稿 |
| ✨ 意图识别 | 扔进任意口述草稿，Agent 自动判断文体/语气/篇幅/语言，参数自动填入（仍可手动覆盖） |
| 🔍 检索增强（可选） | 识别到时效性/事实类内容时自动联网检索，成稿带编号引用（配置 Tavily 或博查即启用，未配置自动跳过） |
| 📋 透明流水线 | 意图识别 → 联网检索 → 规划大纲 → 撰写初稿 → 润色精修 → 智能建议，六阶段全程可视 |
| ✏️ 大纲可编辑 | 规划结果直接改，点一下"按新大纲重新成稿" |
| ✂️ 选中改写 | 成稿里选中任意文字：重写 / 扩写 / 缩短 / 换个语气，只改选区、流式回填 |
| 💡 智能建议卡 | 成稿后自动给 3 个候选标题、发布标签、具体改进点 |
| 📤 即用输出 | 复制 / 下载 .md / 打印 PDF / 一键译英文 |
| 🔀 多模型 | DeepSeek / OpenAI / Gemini / 任意 OpenAI 兼容代理，下拉即切，全部 SSE 流式 |

## 🚀 快速开始

```bash
npm install
cp .env.example .env.local   # 填入至少一个 LLM API Key（可选：TAVILY_API_KEY 或 BOCHA_API_KEY）
npm run dev                  # http://localhost:3000
```

Kaggle 场景模式：`http://localhost:3000/scene`

语音输入请使用 Chrome / Edge。没有麦克风也能玩：首屏有示例草稿，一键体验全流程。

## 🏗 架构

```
浏览器 (Next.js App Router + Tailwind 4)
  │  草稿/语音转写
  ▼
POST /api/analyze   ── 意图识别(LLM) + 联网检索(Tavily/博查) ──┐
POST /api/generate  ── SSE 流式：规划 → 成稿 → 润色 ◀──────────┤
POST /api/rewrite   ── 选中片段改写（流式回填）                │
POST /api/suggest   ── 标题/标签/改进点                        │
  │                                                            │
  └── lib/llm.ts 统一多 Provider 网关                            │
      · 连接 90s / 空闲 30s / 总时长 3min 三级超时治理           │
      · 空响应自动重试 · 用户可中断(AbortController)             │
      └── DeepSeek / OpenAI / Gemini / 自定义代理 ◀─────────────┘
```

- **韧性设计**：意图识别与建议为增强项，任何失败静默降级，绝不阻塞写作主流程
- **可编辑流水线**：大纲中间产物暴露给用户，人可以在任何环节介入
- **测试**：39 个 Vitest 用例覆盖 prompt 构建 / 意图解析 / 检索归一化 / SSE 增量提取 / API 路由

## 🧪 测试

```bash
npm test
```

## 📌 Roadmap

- [ ] 长文分段生成
- [ ] 写作风格学习（导入往期文章）
- [ ] 协作与版本对比

---

Made for AI Builders Hackathon 2026 · 提交截止 2026-09-15
