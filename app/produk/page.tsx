import { prisma } from '@/lib/prisma'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer';



export default async function ProdukPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  })

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price)

  return (
    <>
      <Header />

       

      <main className="p-2 bg-[linear-gradient(to_right,#0098B2,#016C90,#004366)] min-h-screen">
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-150 border text-xs flex flex-col"
            >
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2 flex flex-col justify-between flex-1">
                <h2 className="font-semibold text-gray-800 text-sm truncate">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-[10px] line-clamp-2">
                  {product.description}
                </p>
                <p className="text-green-600 font-semibold text-xs mt-1">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
