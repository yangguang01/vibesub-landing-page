import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/magicui/aurora-text";
import { DotPattern } from "@/components/magicui/dot-pattern";
import Image from "next/image";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { MessageSquare, BookOpen, PlayCircle, Database, SquareChartGantt } from "lucide-react";
import { RainbowButton } from "@/components/magicui/rainbow-button";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 导航栏 */}
      <header className="w-full py-4 px-6 md:px-12">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-[#182848]">VibeSub</h1>
          <div className="hidden md:flex space-x-6">
            {/* 导航链接待添加 */}
          </div>
        </div>
      </header>

      {/* 英雄区域 */}
      <section className="relative w-full py-16 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden">
        <DotPattern 
          className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
          width={20}
          height={20}
        />
        <h1 className="z-10 text-3xl md:text-5xl font-bold mb-4">
          AI驱动的<AuroraText>YouTube字幕翻译</AuroraText>工具
        </h1>
        <p className="z-10 text-2xl mb-8 text-gray-600 font-medium">语言不再是障碍，用母语感受全球优质内容</p>
        <RainbowButton>免费添加至Chrome</RainbowButton>
        
      </section>

      <section className="w-full py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          
          
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc="https://9h3xfzbmznowmc7x.public.blob.vercel-storage.com/vibesub-1-hymJdQVyPUClwVkphV0FfKBhGfyB4h.mp4"
            thumbnailSrc="/wechat_2025-06-12_224459_046.png"
            thumbnailAlt="VibeSub视频演示"
          />
        </div>
      </section>
      
      {/* 产品主图展示 */}
      {/* <section className="w-full py-12 px-6 md:px-12 flex justify-center">
        <div className="relative max-w-5xl w-full">
          <Image 
            src="/Your paragraph text (2).png" 
            alt="VibeSub字幕翻译示例 - 采访场景" 
            width={1200}
            height={675}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section> */}

      {/* 产品演示区 */}
      <section className="w-full py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              VibeSub采用生成式AI模型进行内容翻译
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              为您提供母语般的视频观看体验
            </h3>
            
            <div className="grid md:grid-cols-3 gap-10 mt-12">
              <div className="flex flex-col">
                <SquareChartGantt className="h-15 w-15 text-gray-700 dark:text-gray-300 mb-4" />
                <p className="text-gray-600 dark:text-gray-300">结合上下文优化翻译策略，表达准确自然</p>
              </div>
              
              <div className="flex flex-col">
                <Database className="h-15 w-15 text-gray-700 dark:text-gray-300 mb-4" />
                <p className="text-gray-600 dark:text-gray-300">根据视频内容建立术语库，专业内容好掌握</p>
              </div>
              
              <div className="flex flex-col">
                <PlayCircle className="h-15 w-15 text-gray-700 dark:text-gray-300 mb-4" />
                <p className="text-gray-600 dark:text-gray-300">优化字幕节奏和长度，观看轻松又过瘾</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 效果对比 */}
      {/* <section className="w-full py-16 px-6 md:px-12 bg-white dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            相比现有产品
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            真正做到了媲美人工的翻译效果
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-200 p-4 rounded-lg h-40 flex items-center justify-center">
              <span className="text-gray-500">管道工具翻译的字幕</span>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg h-40 flex items-center justify-center">
              <span className="text-gray-500">VibeSub翻译的字幕</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* AI资讯 */}
      <section className="w-full py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">AI资讯</h2>
              <p className="text-gray-600 mb-4">告别二手资讯，看懂最前沿AI资讯</p>
              
            </div>
            <div className="md:col-span-1">
              <HeroVideoDialog
                animationStyle="from-right"
                videoSrc="https://9h3xfzbmznowmc7x.public.blob.vercel-storage.com/ai-b8EUpX4mcLp4jVtViJlDM5xbMzY42I.mp4"
                thumbnailSrc="/ai.png"
                thumbnailAlt="AI资讯视频演示"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 名校课程 */}
      <section className="w-full py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:col-span-1">
              <HeroVideoDialog
                animationStyle="from-left"
                videoSrc="https://9h3xfzbmznowmc7x.public.blob.vercel-storage.com/kecheng-pFDpxYR9tCxoU3TWvxpckvM2uUZBne.mp4"
                thumbnailSrc="/kecheng.png"
                thumbnailAlt="名校课程视频演示"
              />
            </div>
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">名校课程</h2>
              <p className="text-gray-600 mb-4">学习各种课程，用母语学精英知识</p>
              
            </div>
          </div>
        </div>
      </section>

      {/* 娱乐资讯 */}
      <section className="w-full py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">娱乐资讯</h2>
              <p className="text-gray-600 mb-4">原汁原味了解全球娱乐资讯，听懂每一句名场面</p>
              
            </div>
            <div className="md:col-span-1">
              <HeroVideoDialog
                animationStyle="from-right"
                videoSrc="https://9h3xfzbmznowmc7x.public.blob.vercel-storage.com/yule-Qzmc1B6bjxAjavSIkVJyD5KUXBTdMa.mp4"
                thumbnailSrc="/yule.png"
                thumbnailAlt="AI资讯视频演示"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
