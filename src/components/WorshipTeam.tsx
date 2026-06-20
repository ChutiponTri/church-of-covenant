'use client';

import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Music, 
  Heart,
  ChevronRight,
  Camera
} from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';

// ==========================================
// MOCK DATA
// ==========================================
const CHURCH_INFO = {
  name: "คริสตจักรแห่งพันธสัญญาเฉลิมพระเกียรติ",
};

const WORSHIP_INFO = {
  title: "ทีมนมัสการและดนตรี",
  subtitle: "เข้าสู่การทรงสถิตด้วยสิ้นสุดหัวใจ",
  description: "เราเชื่อว่าการนมัสการไม่ใช่เพียงแค่บทเพลง แต่คือวิถีชีวิตและการตอบสนองต่อความรักของพระเจ้า ทีมนมัสการของเรามุ่งเน้นการนำพี่น้องเข้าสู่บรรยากาศแห่งพระสิริ ผ่านดนตรีที่ผสมผสานทั้งความร่วมสมัยและจิตวิญญาณที่ลึกซึ้ง",
};

const WORSHIP_GALLERY = [
  { id: 1, src: "/worship-1.jpg", alt: "บรรยากาศการนมัสการวันอาทิตย์" },
  { id: 2, src: "/worship-2.jpg", alt: "ทีมดนตรี" },
  { id: 3, src: "/worship-3.jpg", alt: "การตอบสนองของพี่น้อง" },
  { id: 4, src: "/worship-4.jpg", alt: "บรรยากาศการอธิษฐาน" },
];

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "เขต",
    fullname: "ชนะพนธ์ ตรีรัตนานุรักษ์",
    role: "Worship Leader",
    image: "/worship/khet-.jpg",
  },
  {
    id: 2,
    name: "โตโต้",
    fullname: "พัทธดนท์ แก้วเมือง",
    role: "Drummer / Keyboardist",
    image: "/worship/toto.jpeg",
  },
  {
    id: 3,
    name: "เนย",
    fullname: "กนกภรณ์ ช่วยไทย",
    role: "Pianist / Keyboardist",
    image: "/worship/noey.jpeg",
  },
  {
    id: 4,
    name: "ทีน",
    fullname: "ธนภัทร เพชรพันธ์",
    role: "Bassist / Guitarist",
    image: "/team-4.jpg",
  },
  {
    id: 5,
    name: "มุก",
    fullname: "เพชรนภา แดงบรรจง",
    role: "Junior Drummer",
    image: "/team-5.jpg",
  },
  {
    id: 6,
    name: "ต้น",
    fullname: "ชุติพนธ์ ตรีรัตนานุรักษ์",
    role: "Counselor / Keyboardist",
    image: "/worship/ton.jpg",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function WorshipPage() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = theme === "dark";

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
      
      {/* NAVBAR (ใช้โครงสร้างเดียวกับหน้า Home) */}
      <nav className="sticky top-0 z-50 w-full bg-linear-to-r from-blue-400 to-purple-400 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" width={40} height={40} alt="โลโก้คริสตจักร" />
              <span className="font-bold text-lg hidden sm:block text-white">{CHURCH_INFO.name}</span>
              <span className="font-bold text-lg sm:hidden text-white">คริสตจักรพันธสัญญาฯ</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer text-white"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link href="/" className="py-1.5 px-1 font-heading text-xl text-white rounded-md hover:bg-blue-900 hidden md:block">
              กลับหน้าแรก
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION FOR WORSHIP */}
        <section className="relative isolate px-4 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute inset-0 -z-20 h-full w-full">
            <Image
              src="/worship-hero.jpg" // 👈 เตรียมภาพบรรยากาศสวยๆ มาใส่
              alt="Worship Background"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-linear-to-b from-white/70 via-white/80 to-slate-50 dark:from-slate-900/80 dark:via-slate-950/90 dark:to-slate-950 opacity-100"></div>
          
          <Music className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-950 dark:text-white">
            {WORSHIP_INFO.title}
          </h1>
          <p className="text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-6">
            {WORSHIP_INFO.subtitle}
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
            {WORSHIP_INFO.description}
          </p>
        </section>

        {/* ATMOSPHERE GALLERY SECTION */}
        <section className="py-16 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex items-center gap-3 mb-10">
              <Camera className="w-6 h-6 text-indigo-500" />
              <h2 className="text-2xl md:text-3xl font-bold">บรรยากาศการนมัสการ</h2>
            </div>
            
            {/* Grid รูปภาพ 2 คอลัมน์บนมือถือ 4 คอลัมน์บน PC */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {WORSHIP_GALLERY.map((image) => (
                <div key={image.id} className="relative aspect-square rounded-2xl overflow-hidden group bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM SECTION (Horizontal Scroll) */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl mb-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">สมาชิกทีมนมัสการ</h2>
                <p className="text-slate-600 dark:text-slate-400">ผู้รับใช้ที่นำเราเข้าสู่การทรงสถิต</p>
              </div>
              {/* ปุ่มเลื่อน (Visual cue ให้รู้ว่าเลื่อนได้) */}
              <div className="hidden md:flex gap-2 text-slate-400">
                <span className="text-sm">เลื่อนดูเพิ่มเติม</span>
                <ChevronRight className="w-5 h-5 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Container สำหรับแนวนอน (Horizontal Scroll)
            ซ่อน Scrollbar ด้วย [scrollbar-width:none] และ [&::-webkit-scrollbar]:hidden 
          */}
          <div className="flex overflow-x-auto gap-6 px-4 md:px-8 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-none]">
            {/* Spacer ด้านซ้ายเพื่อให้การเลื่อนดูมีขอบ */}
            <div className="w-4 shrink-0 md:w-auto"></div>
            
            {TEAM_MEMBERS.map((member) => (
              <div 
                key={member.id} 
                className="snap-center shrink-0 w-65 flex flex-col bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all group"
              >
                {/* รูปโปรไฟล์ */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* ข้อมูล */}
                <div className="text-center mt-auto">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
                  <h3 className="text-xl font-semi-bold mb-1.5 text-slate-900 dark:text-white">{member.fullname}</h3>
                  <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium rounded-full">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Spacer ด้านขวา */}
            <div className="w-4 shrink-0 md:w-auto"></div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-8 text-center text-slate-400 border-t border-slate-800">
        <p>© {new Date().getFullYear()} {CHURCH_INFO.name}. All rights reserved.</p>
        <p className="text-sm mt-2 flex items-center justify-center gap-1">
          รับใช้ด้วย <Heart className="w-4 h-4 text-rose-500" /> จากทีมพันธสัญญา
        </p>
      </footer>

    </div>
  );
}