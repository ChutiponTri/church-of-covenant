'use client';

import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Church, 
  BookOpen, 
  Music, 
  Users, 
  MapPin, 
  Heart,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';

// ==========================================
// MOCK DATA (ดึงข้อมูลจากตรงนี้ไปแสดงผล)
// ==========================================
const CHURCH_INFO = {
  name: "คริสตจักรแห่งพันธสัญญาเฉลิมพระเกียรติ",
  slogan: "สร้างสาวก เติบโตในความรัก และรับใช้สังคมด้วยหัวใจของพระคริสต์",
  history: "คริสตจักรของเราก่อตั้งขึ้นจากนิมิตที่ต้องการเห็นชุมชนแห่งความรักและการเกื้อกูลกันในย่านเฉลิมพระเกียรติ เราเริ่มต้นจากการเป็นกลุ่มเซลล์เล็กๆ ที่รวมตัวกันอธิษฐานและศึกษาพระวจนะ จนพระเจ้าได้ทรงนำและขยายงานอย่างต่อเนื่อง ปัจจุบันเราเป็นครอบครัวฝ่ายจิตวิญญาณที่มุ่งมั่นในการสร้างสาวกและเป็นเกลือและแสงสว่างให้กับสังคม",
  address: "29 ตำบลเชียรเขา อำเภอเฉลิมพระเกียรติ จังหวัดนครศรีธรรมราช",
  serviceTimes: "นมัสการวันอาทิตย์ เวลา 10:00 - 12:00 น."
};

const MINISTRIES = [
  {
    id: 1,
    title: "ทีมนมัสการและดนตรี",
    description: "นำพี่น้องเข้าสู่การทรงสถิตของพระเจ้าผ่านบทเพลงสรรเสริญและนมัสการที่เต็มเปี่ยมด้วยพลังวิญญาณ ทั้งรูปแบบร่วมสมัยและเพลงชีวิตคริสเตียน",
    icon: <Music className="w-8 h-8 text-indigo-500" />,
    href: "/worship"
  },
  {
    id: 2,
    title: "กลุ่มเซลล์ตามบ้าน",
    description: "กลุ่มย่อยเพื่อการหนุนใจ ศึกษาพระวจนะอย่างใกล้ชิด และดูแลชีวิตของพี่น้องสมาชิกในแต่ละพื้นที่ตลอดสัปดาห์",
    icon: <Users className="w-8 h-8 text-emerald-500" />,
    href: "/cell"
  },
  {
    id: 3,
    title: "พันธกิจเด็กและรวีวารศึกษา",
    description: "ปลูกฝังความเชื่อและรากฐานทางจริยธรรมให้กับเด็กๆ ผ่านกิจกรรม เกม และการเล่าเรื่องราวจากพระคัมภีร์ที่สนุกสนาน",
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    href: "/nextgen"
  },
  {
    id: 4,
    title: "พันธกิจการศึกษาและฝึกอบรม",
    description: "จัดชั้นเรียนพระคัมภีร์และหลักสูตรสร้างสาวก เพื่อเตรียมความพร้อมให้สมาชิกเติบโตและออกไปรับใช้ได้อย่างเกิดผล",
    icon: <BookOpen className="w-8 h-8 text-amber-500" />,
    href: "/bible"
  }
];

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function ChurchWebsite() {
  const [mounted, setMounted] = useState(false);
   const { theme, setTheme } = useTheme();

  // ป้องกัน Hydration mismatch
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
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full bg-linear-to-r from-blue-400 to-purple-400 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              {/* <Church className="w-6 h-6 text-indigo-600 dark:text-indigo-400" /> */}
              <Image src="/logo.png" width={40} height={40} alt="/vercel.svg" />
              <span className="font-bold text-lg hidden sm:block text-white">{CHURCH_INFO.name}</span>
              <span className="font-bold text-lg sm:hidden text-white">คริสตจักรพันธสัญญาฯ</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-blue-900 transition-colors cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}
            </button>
            <a href="#contact" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
              ติดต่อเรา
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ✅ HERO SECTION WITH BACKGROUND IMAGE ✅ */}
        {/* ปรับ py ให้สูงขึ้นเพื่อโชว์รูปภาพ */}
        <section className="relative isolate px-4 py-32 md:py-48 flex flex-col items-center text-center overflow-hidden">
          
          {/* 1. Background Image Container */}
          <div className="absolute inset-0 -z-20 h-full w-full">
            <Image
              src="/church.jpg" 
              alt="บรรยากาศคริสตจักร"
              fill // ให้ภาพขยายเต็ม container
              sizes="100vw"
              className="object-cover object-center" // จัดการสัดส่วนภาพ
              priority // โหลดภาพนี้ทันทีเพราะอยู่ส่วนบนสุด
            />
          </div>

          {/* 2. Overlay Layer (ชั้นสีทับหน้าจอเพื่อให้ตัวอักษรอ่านง่าย) */}
          {/* โหมดสว่าง: ใช้สีขาวโปร่งแสง จางไปหาขาวทึบด้านล่าง */}
          {/* โหมดมืด: ใช้สีดำโปร่งแสง จางไปหาดำทึบด้านล่าง */}
          <div className="absolute inset-0 -z-10 bg-linear-to-b from-white/60 via-white/60 to-slate-50 dark:from-slate-700/70 dark:via-slate-700/90 dark:to-slate-700 opacity-100"></div>
          
          {/* 3. Content */}
          <span className="px-3 py-1 mb-6 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full dark:bg-indigo-900/50 dark:text-indigo-300 ring-1 ring-indigo-200 dark:ring-indigo-800">
            ยินดีต้อนรับสู่ครอบครัวของเรา
          </span>
          {/* ปรับสีตัวอักษรให้เข้มขึ้นเล็กน้อยเพื่อให้ตัดกับพื้นหลังที่เป็นรูปภาพ */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl text-slate-950 dark:text-white">
            {CHURCH_INFO.name}
          </h1>
          <p className="text-lg md:text-xl text-slate-800 dark:text-slate-200 mb-10 max-w-2xl font-medium">
            {CHURCH_INFO.slogan}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#about" className="px-6 py-3 font-medium text-slate-900 bg-white border border-slate-200 rounded-lg shadow-lg hover:bg-slate-50 transition-colors dark:bg-slate-900 dark:border-slate-700 dark:text-slate-50 dark:hover:bg-slate-800 flex items-center justify-center gap-2">
              รู้จักเรามากขึ้น <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ABOUT / HISTORY SECTION */}
        <section id="about" className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">ที่มาของคริสตจักร</h2>
                <div className="w-20 h-1.5 bg-indigo-600 dark:bg-indigo-500 mb-6 rounded-full"></div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {CHURCH_INFO.history}
                </p>
              </div>
              
              {/* เปลี่ยนเป็นกล่องใส่รูปภาพ */}
              {/* เพิ่มคลาส 'group' เพื่อให้เราทำ Hover effect กับรูปภาพข้างในได้ */}
              <div className="relative aspect-video md:aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-inner group">
                
                {/* 1. ใส่คอมโพเนนต์ Image แทนไอคอนโบสถ์ */}
                <Image
                  src="/christmas.jpg" // 👈 อย่าลืมเปลี่ยนชื่อไฟล์เป็นรูปที่คุณมีในโฟลเดอร์ public
                  alt="ภาพบรรยากาศคริสตจักร"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" // ทำให้ภาพซูมเข้าช้าๆ เวลาเอาเมาส์ชี้
                />

                {/* (ออปชันเสริม) ใส่เงาดำจางๆ ด้านล่าง เพื่อให้กล่องเวลาอ่านง่ายขึ้นในกรณีที่พื้นหลังตรงนั้นเป็นสีขาวสว่าง */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

                {/* 2. กล่องแสดงเวลา (ลอยอยู่ด้านบนสุด) */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-sm p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  <p className="font-semibold text-slate-900 dark:text-slate-100 text-center md:text-left">
                    {CHURCH_INFO.serviceTimes}
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* MINISTRIES SECTION */}
        <section id="ministries" className="py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">งานพันธกิจของเรา</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                เรามีส่วนร่วมในการรับใช้และสร้างสาวกผ่านงานพันธกิจที่หลากหลาย เพื่อตอบสนองต่อการทรงเรียกและของประทานที่พระเจ้ามอบให้กับทุกคน
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
              {MINISTRIES.map((ministry) => (
                <Link href={ministry.href} key={ministry.href} className="flex">
                  <div 
                    key={ministry.id} 
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-transform duration-700 hover:scale-105"
                  >
                    <div className="mb-4 p-3 bg-slate-50 dark:bg-slate-800 inline-block rounded-xl">
                      {ministry.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{ministry.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {ministry.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 bg-indigo-600 dark:bg-indigo-950 text-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">มาร่วมนมัสการกับเรา</h2>
            <Link href={"https://share.google/F1ZYbg2tgsze3h1iX"}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-indigo-700/50 dark:bg-indigo-900/50 p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-indigo-300" />
                <span className="text-left text-indigo-50">{CHURCH_INFO.address}</span>
              </div>
            </div>
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-8 text-center text-slate-400 border-t border-slate-800">
        <p>© {new Date().getFullYear()} {CHURCH_INFO.name}. All rights reserved.</p>
        <p className="text-sm mt-2">ออกแบบด้วยความรักและการอธิษฐาน</p>
      </footer>

    </div>
  );
}