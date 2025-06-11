'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

type Category = {
  id: string
  name: string
}

export default function NewProductPage() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const router = useRouter()

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('/api/categories')
      const data = await res.json()
      setCategories(data)
    }
    fetchCategories()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/products/create', {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,
        price: parseFloat(price),
        image,
        categoryId: selectedCategory,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    router.push('/admin/products')
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Tambah Produk</h1>

      <input
        type="text"
        placeholder="Nama Produk"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border w-full p-2"
      />

      <textarea
        placeholder="Deskripsi"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border w-full p-2"
      />

      <input
        type="number"
        placeholder="Harga"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border w-full p-2"
      />

      <input
        type="text"
        placeholder="URL Gambar"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="border w-full p-2"
      />

      {/* <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border w-full p-2"
        required
      >
        <option value="">Pilih Kategori</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select> */}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Simpan
      </button>
    </form>
  )
}
  