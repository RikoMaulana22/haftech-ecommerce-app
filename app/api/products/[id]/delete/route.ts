// app/api/products/[id]/delete/route.ts

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const productId = parseInt(params.id)

  if (isNaN(productId)) {
    return NextResponse.json({ message: 'ID tidak valid' }, { status: 400 })
  }

  try {
    await prisma.product.delete({
      where: { id: productId },
    })

    return NextResponse.json({ message: 'Produk berhasil dihapus' }, { status: 200 })
  } catch (error) {
    console.error('Gagal hapus produk:', error)
    return NextResponse.json({ message: 'Gagal menghapus produk' }, { status: 500 })
  }
}
