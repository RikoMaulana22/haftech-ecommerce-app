import ProductCard from '@/components/ProductCard' // gunakan alias @ jika sudah di-setup
import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Produk Haftech</h1>

      <div className="flex gap-4 mb-6">
        <Link href="/admin/products/new" className="bg-blue-500 text-white px-4 py-2 rounded">
          + Tambah Produk
        </Link>
        <Link href="/admin/chat/123" className="bg-green-500 text-white px-4 py-2 rounded">
          Chat Customer
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
      <ProductCard key={product.id} product={product} />
     ))}
      </div>
    </main>
  )
}
