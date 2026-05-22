import { motion, AnimatePresence } from "framer-motion";
import { Github, Instagram, Mail, Phone, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Types ---
interface ChapterIntro {
  chapter: string;
  title: string;
  subtitle: string;
  content: string;
  beforeImageIndex?: number;
}

interface AppShowcase {
  type: 'app';
  images: string[];
  title?: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  detail?: string;
  gallery?: string[];
  chapters?: ChapterIntro[];
  appShowcase?: AppShowcase;
}

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  // 1: 智能软硬件结合
  {
    id: 1,
    title: "呼吸半透明加湿器",
    category: "智能软硬件结合",
    description: "探索半透明材质与环境光律动的智能加湿系统，呼吸感交互体验。",
    image: "/humidifier2.png",
    tags: ["硬件集成", "工业设计", "交互"],
    gallery: [
      "/humidifier-1.png",
      "/humidifier-2.png",
      "/humidifier-3.png",
      "/humidifier-4.png",
      "/humidifier-5.png",
      "/humidifier-6.png",
      "/humidifier-7.png",
      "/humidifier-8.png",
    ],
    chapters: [
      {
        chapter: "CHAPTER 01",
        title: "设计理念｜DESIGN CONCEPT",
        subtitle: "让科技拥有生命，\n让加湿器学会呼吸。",
        content: "Aura · 息 试图打破传统家电冷冰冰的机器感，\n探讨数字精密与生物共生的未来相处模式。\n\n它不仅是一款极简高级的加湿器，\n更是一个融合视觉、触觉与呼吸节律的空间情绪调节器。\n\n通过模拟生物呼吸的4-7-8节律，\nAura 在运作时如同一个安静的生命体，\n而不是一个发出噪音的喷水机器。",
        beforeImageIndex: 0,
      },
    ],
    detail: "【设计宣言 / Design Manifesto】\n在技术过载与都市焦虑并存的时代，Aura · 息 试图打破传统家电冷冰冰的机器感，探讨数字精密与生物共生的未来相处模式。它不仅是一款极简高级的加湿器，更是一个融合了视觉、触觉与呼吸节律的空间情绪调节器。\n\n【核心设计特征 / Core Pillars】\n\n1. 柔焦美学与非对称有机形态 (Sensory Minimalism)\n产品外观摒弃了传统家电规则的几何束缚，采用非对称的动态曲面设计，形态如同深呼吸时轻微膨胀的肺部，具备极强的视觉张力。外壳精选半透明、丝绒触感的生物基磨砂聚合物，包裹着内部基于参数化算法生成的精密几何导光格栅。这种外在有机，内在精密的冲突美学，在光影穿透时产生独特的柔焦与深度感，完美契合当代高级家居语境。\n\n2. 4-7-8身心呼引交互 (Respiratory Ritual)\nAura · 息 的核心创新在于将空气加湿转化为一场冥想仪式。产品内置的环状呼吸光效与超声波雾化系统深度协同。在呼引模式下，内部格栅灯光与雾气将模拟临床验证的4-7-8呼吸法进行律动（4秒吸气升温、7秒憋气微调、8秒呼气消散），通过环境的光雾变化，无形中引导用户放慢呼吸节奏，实现数字技术对人类精神层面的非侵入式人文关怀。\n\n3. 生态共生与生命触点 (Bio-Symbiosis)\n产品顶部顺应建筑学微地形，设计了一个向内坍缩的火山口出雾口，并创造性地嵌入了可拆卸的磁吸式纳米陶瓷种植盘。利用加湿时溢出的微环境湿度，滋养盘中的微型苔藓或空气凤梨。将活体自然作为产品材质的一部分，赋予产品真正进化的生命周期，让用户在每一次加水、感知植物生长的过程中，重建与自然的微观连接。\n\n【CMF方案 / Material & Finish】\n主体罩：半透明PC/ABS，细颗粒喷砂+渐变蚀纹，丝绒手感，透光而不透视\n底座：回收压铸铝，阳极氧化（香槟钛），沉稳重心，高级金属色泽\n出雾口：纳米涂层陶瓷，哑光釉面，耐高温，不积水垢\n灯光：全光谱LED导光柱+柔光罩，色温3000K-4000K，无频闪\n\n【商业落地与循环经济 / Commercial Liability & ESG】\n易维护性：外壳与水箱采用分体式结构，外壳通过磁吸扣合，轻轻一提即可加水或清洗，解决了传统加湿器清洗困难的痛点。\n可持续性：模具设计遵循无胶水化，全机可实现85%以上的材料回收利用。\n市场定位：瞄准高净值人群的卧室、瑜伽室、私人办公室，这不仅是一个家电，更是一个情绪调节器。\n\n【评审总结 / Award Jury Perspective】\nAura · 息 的成功在于平衡。它用极致的减法做出了外观的视觉记忆点，用克制的加法引入了呼引与生态功能。它不仅是对空气湿度的改良，更是对数字时代空间叙事与人类心理健康趋势的精准回应。",
  }
];