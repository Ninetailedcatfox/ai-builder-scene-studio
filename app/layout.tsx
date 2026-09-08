import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 创作工作台",
  description: "从口述到成稿，也能把自然语言变成可交互的 3D 场景",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
