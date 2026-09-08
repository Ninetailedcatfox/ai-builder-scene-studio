# Prompt-to-World Scene Studio

## One-line summary

Prompt-to-World Scene Studio turns a natural-language description into a structured, explorable 3D scene directly in the browser.

## What we built

Most creative tools make people learn a scene editor before they can create anything. This project reverses that flow: the user describes a world in plain language, an AI scene-planning agent converts the description into a scene graph, and the browser immediately renders the result as an interactive Three.js scene.

The current demo supports:

- natural-language scene descriptions;
- AI scene planning through an OpenAI-compatible provider;
- deterministic local fallback when no API key is configured;
- primitive scene objects such as houses, trees, buildings, planets, crystals and rings;
- drag-to-rotate camera interaction;
- click-to-inspect object labels;
- export of the generated scene graph as JSON.

## Why this matters

The interesting part is not only generating 3D assets. It is making the AI output inspectable and editable. The scene plan exposes the environment, palette, objects, coordinates, scale, rotation and intended interactions, so a creator can understand what the agent decided and iterate with another prompt.

## How it works

1. The user enters a natural-language prompt.
2. The scene agent asks an LLM for a constrained JSON scene graph.
3. The server validates and normalizes the response.
4. If the provider is unavailable or returns malformed JSON, the same prompt goes through a deterministic local planner so the demo remains reproducible.
5. Three.js maps the scene graph to browser-native meshes, lighting, a ground plane and interaction handlers.

The app is built with Next.js App Router, TypeScript, React and Three.js. API keys stay server-side in the Next.js route handler; the browser only receives the normalized scene graph.

## Demo walkthrough

1. Open the Demo URL and start with the default coastal cabin prompt.
2. Click “生成 / 重新生成场景”.
3. Drag the scene to rotate the view and click the glowing sign or cabin.
4. Replace the prompt with a forest, city or space example and regenerate.
5. Export the scene JSON to show that the result is a structured, reusable scene rather than a screenshot.

## Links

- Demo: https://ai-builder-scene-studio.vercel.app/scene
- Public source: `REPLACE_WITH_PUBLIC_GITHUB_URL`
- Competition: https://www.kaggle.com/competitions/ai-builder-hackathon-2026

## What we would build next

- replace primitive meshes with generated or imported assets;
- add a visual scene graph editor for manual corrections;
- support multi-step behaviors such as NPC routines and trigger zones;
- persist scene versions and allow creators to fork a world;
- add WebGPU and glTF export paths for richer scenes.
