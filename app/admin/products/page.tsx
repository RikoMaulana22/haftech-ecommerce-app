import ProductCard from '@/components/ProductCard' // gunakan alias @ jika sudah di-setup
import { prisma } from '@/lib/prisma'
import Link from 'next/link'


export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    include: { user: true },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Produk Haftech</h1>
      <Link href="/admin/products/new" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
        + Tambah Produk
      </Link>
      <Link href="admin/chat/[id]" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
        + chat customer
      </Link>
      <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
