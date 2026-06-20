import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
// 1. Title: หัวข้อที่จะโชว์ตัวใหญ่ๆ บน Google (ไม่ควรเกิน 60 ตัวอักษร)
  title: 'คริสตจักรแห่งพันธสัญญาเฉลิมพระเกียรติ | จ.นครศรีธรรมราช',
  
  // 2. Description: คำอธิบายย่อยใต้ Title (ไม่ควรเกิน 160 ตัวอักษร)
  description: 'ยินดีต้อนรับสู่คริสตจักรแห่งพันธสัญญาเฉลิมพระเกียรติ นครศรีธรรมราช มาร่วมนมัสการพระเจ้า ศึกษาพระวจนะ และเติบโตในความรักไปด้วยกัน นมัสการทุกวันอาทิตย์ 10:00 น.',
  
  // 3. Keywords: คำค้นหาที่เกี่ยวข้อง (ปัจจุบัน Google ไม่ค่อยให้น้ำหนักแล้ว แต่ใส่ไว้ได้)
  keywords: ['คริสตจักร', 'โบสถ์คริสต์', 'นครศรีธรรมราช', 'เฉลิมพระเกียรติ', 'พันธสัญญา', 'คริสเตียน', 'นมัสการพระเจ้า'],
  
  // 4. Open Graph: สำหรับเวลาแชร์ลิงก์ลง Facebook หรือ LINE ให้มีรูปและข้อความสวยๆ เด้งขึ้นมา
  openGraph: {
    title: 'คริสตจักรแห่งพันธสัญญาเฉลิมพระเกียรติ | จ.นครศรีธรรมราช',
    description: 'มาร่วมนมัสการพระเจ้าและเติบโตในความรักไปด้วยกัน นมัสการทุกวันอาทิตย์ 10:00 น.',
    url: 'https://www.coc-chaloem.com/', // เปลี่ยนเป็น URL จริงของคุณ
    siteName: 'คริสตจักรแห่งพันธสัญญาเฉลิมพระเกียรติ',
    images: [
      {
        url: '/church.jpg', // รูปภาพที่จะโชว์เวลาแชร์ (ควรอยู่ในโฟลเดอร์ public)
        width: 1200,
        height: 630,
        alt: 'ภาพบรรยากาศคริสตจักร',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
