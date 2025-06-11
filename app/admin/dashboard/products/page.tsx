import { prisma } from '@/lib/prisma'

export default async function ProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Daftar Produk</h1>

      {products.length === 0 ? (
        <p className="text-gray-500">Belum ada produk.</p>
      ) : (
        <ul className="space-y-4">
          {products.map((p) => (
            <li
              key={p.id}
              className="border p-4 rounded hover:shadow cursor-pointer flex justify-between items-center"
            >
              <div>
                <strong>{p.name}</strong>
                <p className="text-sm text-gray-600">Rp {p.price.toLocaleString('id-ID')}</p>
              </div>
              <a
                href={`/admin/products/${p.id}`}
                className="text-blue-500 hover:underline text-sm"
              >
                Lihat Detail
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
