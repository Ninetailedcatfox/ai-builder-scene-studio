# AI Builder Hackathon 2026 · Kaggle 提交准备

本仓库保留原来的 AI 写作工作台，同时新增 `/scene` 参赛入口，把自然语言转成结构化场景计划，并在浏览器中用 Three.js 实时预览。

## 官方时间线

- 报名截止：2026-09-08（主办方页面注明 16:00 CEST，即北京时间 22:00）
- 构建期：2026-09-11 – 2026-11-11
- 最终提交：2026-11-11
- 官方 Kaggle 页面：[AI Builder Hackathon 2026](https://www.kaggle.com/competitions/ai-builder-hackathon-2026)

今天是报名截止，不是最终作品提交截止。报名仍需按主办方页面完成报名表和 Participant Confirmation Form；Kaggle 页面上的 Join Hackathon 也需要单独确认。

## 本地演示

```bash
npm install
npm run dev
```

打开 `http://localhost:3000/scene`：

1. 输入自然语言描述；
2. 配置任一现有 LLM Key 时走 AI 场景编排；
3. 未配置 Key 时自动走本地可复现规划，不阻塞演示；
4. 拖拽 3D 画布旋转视角，点击物体查看标签；
5. 导出 `ai-builder-scene.json` 作为可复现的场景图样例。

## 提交前仍需完成

- [ ] 完成 Kaggle Join Hackathon 和主办方报名/确认表
- [ ] 把仓库发布为公开 GitHub 仓库
- [ ] 部署公开浏览器 Demo，并在无 API Key 时仍能展示 fallback 场景
- [ ] 录制不超过 3 分钟的演示视频：描述 → 编排 → 3D 交互 → 导出
- [ ] 在 Kaggle Writeup 中补充架构图、技术说明、公开仓库和 Demo URL
- [ ] 在 2026-11-11 前完成最终提交

## 评审叙事

> Scene Mode 是写作工作台的空间化分支：用户不再只让 Agent 生成一段文字，而是用自然语言描述一个可探索的世界，Agent 输出场景图、物体布局与交互意图，浏览器立即把它变成可操作的 3D 预览。

当前实现已经覆盖“自然语言 → 场景图 → 浏览器 3D 预览”的核心闭环；公开仓库、部署、视频和 Kaggle Writeup 属于外部提交材料，尚未由本地代码自动完成。
