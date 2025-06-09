'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

export default function EditProductPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/products/${id}`).then(res => res.json()).then(data => {
      setProduct(data)
      setLoading(false)
    })
  }, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/products/update', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' },
    })
    router.push('/admin/products')
  }

  if (loading) return <p className="p-6">Loading...</p>
  if (!product) return <p>Produk tidak ditemukan.</p>

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Edit Produk</h1>
      <input
        type="text"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        className="border w-full p-2"
      />
      <textarea
        value={product.description}
        onChange={(e) => setProduct({ ...product, description: e.target.value })}
        className="border w-full p-2"
      />
      <input
        type="number"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })}
        className="border w-full p-2"
      />
      <input
        type="text"
        value={product.image}
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
        className="border w-full p-2"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Update</button>
    </form>
  )
}
