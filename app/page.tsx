import { prisma } from '@/lib/prisma';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/hero-section';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import ProductGridWithSlide from '@/components/common/ProdukGrid';
import ProductGridWithSlidel from '@/components/common/ProdukBaner';



export default async function HomePage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <>
      <Header />

    

      <main className="p-4  bg-[linear-gradient(to_right,#0098B2,#016C90,#004366)] min-h-screen">
        <HeroSection />

        {/* Product Grid */}
        <ProductGridWithSlide/>

        <ProductGridWithSlidel/>

        {/* Store Information Section */}
        <section className="mt-10">
          <div className=" rounded-lg p-1">
            <h2 className="text-lg font-bold text-white mb-4">Informasi Toko haf-tech</h2>
            <div className="text-base text-black leading-relaxed">
              <p className="font-bold mb-2">Deskripsi Toko haf-tech</p>
              {/* ... (Teks lainnya tidak berubah) */}
              <p>Est 2021. Offline Store : Jln. Pelita I No. 29 Labuhan Ratu B. Lampung Google Maps : haf tech computer Wa : 085269635353</p>
             
            </div>
            <div className="text-base text-black leading-relaxed">  
              <p className="font-bold text-white mb-2 mt-2">Beli Aneka Produk Online dari Toko haf tech di Tokopedia</p>            
              <p>Beli aneka produk di Toko haf tech secara online sekarang. Kamu bisa beli produk dari Toko haf tech dengan aman & mudah dari Kota Bandar Lampung. Ingin belanja lebih hemat & terjangkau di Toko haf tech? Kamu bisa gunakan fitur Cicilan 0% dari berbagai bank dan fitur Bebas Ongkir di Toko haf tech sehingga kamu bisa belanja online dengan nyaman di Tokopedia. Beli aneka produk terbaru di Toko haf tech dengan mudah dari genggaman tangan kamu menggunakan Aplikasi Tokopedia. Cek terus juga Toko haf tech untuk update Produk, Kode Voucher hingga Promo Terbaru dari Toko haf tech Terbaru secara online di Tokopedia!</p>
            </div>
          </div>
        </section>

        {/* App Promotion Section */}
        <section className="mt-10">
          <div className=" rounded-lg p-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Keamanan & Privasi</h3>
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-black mb-4">Nikmatin keuntungan spesial di aplikasi:</h4>
                  <ul className="text-base text-black space-y-2">
                    <li>Diskon 70%* hanya di aplikasi</li>
                    <li>Promo khusus aplikasi</li>
                    <li>Gratis Ongkir tiap hari</li>
                  </ul>
                </div>
                <h4 className="text-lg font-bold text-black mb-4">Ikuti Kami</h4>
                <div className="flex space-x-4 mt-2">
                 <a href="https://instagram.com/haftech" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500 text-2xl">
                  <FaInstagram />
                 </a>
                <a href="https://facebook.com/haftech" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 text-2xl">
                  <FaFacebookF />
                 </a>
                <a href="https://www.tiktok.com/@haftech" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-2xl">
                 <FaTiktok />
                </a>
                </div>

              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Buka aplikasi dengan scan QR atau klik tombol:</h4>
                <div className="bg-gray-200 w-32 h-32 flex items-center justify-center">
                  <span className="text-gray-500">QR Code</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
