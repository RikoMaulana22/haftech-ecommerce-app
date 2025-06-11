'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  userId: string
  user?: {
    name: string
  }
  
}

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter()

  const handleDelete = async () => {
    const confirmDelete = confirm(`Yakin ingin menghapus produk "${product.name}"?`)
    if (!confirmDelete) return

    try {
      const res = await fetch(`/api/products/${product.id}/delete`, {
        method: 'DELETE',
      })

      if (res.ok) {
        alert('Produk berhasil dihapus')
        router.refresh()
      } else {
        const data = await res.json()
        alert('Gagal menghapus produk: ' + data.message)
      }
    } catch (err) {
      console.error('Delete error:', err)
      alert('Terjadi kesalahan saat menghapus produk')
    }
  }

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="text-sm text-gray-500 mt-1">Harga: {formatPrice(product.price)}</p>
      
      {/* 👇 Tambahkan info user jika ada */}
      <p className="text-sm text-gray-400 mt-1 italic">
        Dibuat oleh: {product.user?.name || 'Tidak diketahui'}
      </p>

      <div className="flex gap-4 mt-2">
        <Link href={`/admin/products/${product.id}/edit`} className="text-blue-600 hover:underline">Edit</Link>
        <button onClick={handleDelete} className="text-red-600 hover:underline">Hapus</button>
      </div>
    </div>
  )
}
