'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (res?.error) {
      setError('Email atau password salah.')
    } else {
      router.push('/admin/products')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative">
      
      {/* Background image di tengah */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-80">
        <Image
          src="/bg-login.png"
          alt="Login Illustration"
          width={900}
          height={900}
          className="rounded"
        />
      </div>

      {/* Login Card di tengah menumpuk */}
      <div className="relative z-10 bg-white shadow-lg rounded-2xl p-10 w-full max-w-sm">
       
        <h2 className="text-center text-2xl font-bold mb-4">Masuk Admin</h2>

        {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 rounded font-semibold"
          >
            Masuk
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-center w-full text-sm z-10">
        <p>
          <span className="font-semibold">Est 2021. Offline Store</span>{' '}
          <Link href="/bantuan" className="text-teal-600 hover:underline ml-2">
            Bantuan
          </Link>
        </p>
      </div>
    </div>
  )
}
