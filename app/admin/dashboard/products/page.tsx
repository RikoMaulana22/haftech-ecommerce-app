// admin/app/dashboard/products/page.tsx
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export default async function ProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Daftar Produk</h1>
      <ul className="space-y-4">
        {products.map((p) => (
          <li key={p.id} className="border p-4 rounded hover:shadow cursor-pointer">
            <strong>{p.name}</strong> — Rp {p.price.toLocaleString()}
          </li>
        ))}
      </ul>
      
    </div>
  );
}
