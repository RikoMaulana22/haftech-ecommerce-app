// app/api/products/create/route.ts

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, description, price, image } = body

    if (!name || !description || !price || !image ) {
      return NextResponse.json({ message: 'Semua field wajib diisi' }, { status: 400 })
    }

      const product = await prisma.product.create({
      data: {
      name,
      description,
      price,
      image,
      user: {
      connect: { id: '1' } // ganti sesuai id admin
      }
    }
  })

    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error('Error create product:', error)
    return NextResponse.json({ message: 'Terjadi kesalahan' }, { status: 500 })
  }
}
