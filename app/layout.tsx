import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Lawrence | Personal Portfolio",
  description:
    "Lawrence is primarily a FrontEnd React Developer with more than 12 years of experience."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 `}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem]"></div>
        <div></div>
        {children}
      </body>
    </html>
  )
}
