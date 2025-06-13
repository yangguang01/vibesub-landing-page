import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 其他配置保持不变 …
  eslint: {
    /** 遇到 ESLint “error” 时继续往下构建，而不是直接 fail */
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;