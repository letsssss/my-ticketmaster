"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function Signup() {
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // 여기에 회원가입 로직을 추가합니다. 실제로는 백엔드 API를 호출해야 합니다.
    console.log("회원가입 시도")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <Image src="/placeholder.svg" alt="TICKETBAY" width={120} height={40} className="h-12 object-contain" />
          </Link>
        </div>

        {/* Back Button */}
        <div>
          <Link href="/login" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4 mr-2" />
            로그인으로 돌아가기
          </Link>
        </div>

        {/* Signup Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              이메일
            </label>
            <Input id="email" type="email" placeholder="example@email.com" required className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              비밀번호
            </label>
            <Input id="password" type="password" placeholder="8자 이상 입력해주세요" required className="w-full" />
            <p className="text-xs text-gray-500">영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              비밀번호 확인
            </label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="nickname" className="block text-sm font-medium text-gray-700">
              닉네임
            </label>
            <Input id="nickname" type="text" placeholder="2-10자 사이로 입력해주세요" required className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              휴대폰 번호
            </label>
            <div className="flex gap-2">
              <Input id="phone" type="tel" placeholder="'-' 없이 입력해주세요" required className="w-full" />
              <Button type="button" variant="outline">
                인증번호 받기
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">
              인증번호
            </label>
            <div className="flex gap-2">
              <Input
                id="verificationCode"
                type="text"
                placeholder="인증번호 6자리를 입력해주세요"
                required
                className="w-full"
              />
              <Button type="button" variant="outline">
                확인
              </Button>
            </div>
          </div>

          <div className="flex items-center">
            <Checkbox
              id="agree"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
              className="border-gray-300"
            />
            <label htmlFor="agree" className="ml-2 text-sm text-gray-600">
              <span className="font-medium text-gray-900">이용약관</span>과{" "}
              <span className="font-medium text-gray-900">개인정보 처리방침</span>에 동의합니다.
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white transition-colors"
            disabled={!agreed}
          >
            회원가입
          </Button>
        </form>

        {/* Terms */}
        <div className="text-center text-sm text-gray-500">
          회원가입 시{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            이용약관
          </Link>
          과{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            개인정보 처리방침
          </Link>
          에 동의하게 됩니다.
        </div>
      </div>
    </div>
  )
}

