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

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-sm text-gray-500">Harga: Rp {product.price}</p>
      <div className="flex gap-4 mt-2">
        <Link href={`/admin/products/${product.id}/edit`} className="text-blue-600">Edit</Link>
        <button onClick={handleDelete} className="text-red-600 hover:underline">Hapus</button>
      </div>
    </div>
  )
}
