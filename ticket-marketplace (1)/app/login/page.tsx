"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <div className="w-full max-w-md space-y-10">
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/placeholder.svg"
              alt="TICKETBAY"
              width={120}
              height={40}
              className="h-12 object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Login Form */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 block">아이디(이메일)</label>
            <Input type="text" placeholder="wlstjd1590" className="w-full border-gray-300" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 block">비밀번호</label>
            <Input type="password" placeholder="••••••••" className="w-full border-gray-300" />
          </div>

          <div className="flex items-center">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              className="border-gray-300"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              아이디 저장
            </label>
          </div>

          <Button className="w-full bg-black hover:bg-gray-800 text-white py-2 transition-colors">로그인</Button>

          <Button className="w-full bg-[#FEE500] hover:bg-[#FEE500]/90 text-black font-medium py-2 transition-colors">
            카카오로 1초 로그인/회원가입
          </Button>

          <Link href="/signup" className="block">
            <Button variant="outline" className="w-full border-gray-300 text-gray-700 py-2 transition-colors">
              이메일로 회원가입
            </Button>
          </Link>
        </div>

        {/* Social Login */}
        <div className="pt-8">
          <div className="flex justify-center space-x-12">
            <button className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center bg-[#03C75A] rounded-full mb-2 group-hover:opacity-90 transition-opacity">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">네이버</span>
            </button>

            <button className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center border border-gray-300 rounded-full mb-2 group-hover:border-gray-400 transition-colors">
                <Image src="/placeholder.svg" alt="Google" width={28} height={28} />
              </div>
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Google</span>
            </button>

            <button className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center bg-black rounded-full mb-2 group-hover:bg-gray-900 transition-colors">
                <Image src="/placeholder.svg" alt="Apple" width={28} height={28} className="invert" />
              </div>
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

