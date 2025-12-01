import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../utils/api'

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      const products = await getProducts()
      const featured = products.filter(p => p.featured).slice(0, 3)
      setFeaturedProducts(featured.length > 0 ? featured : products.slice(0, 3))
      setLoading(false)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Head>
        <title>متجر الملابس التقليدية المغربية</title>
        <meta name="description" content="متجر إلكتروني للملابس التقليدية المغربية الأصلية" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="moroccan-pattern">
        <Header />
        
        <section className="hero" style={{
          background: `linear-gradient(135deg, rgba(194, 39, 45, 0.9), rgba(0, 102, 204, 0.9)), url('https://api.abouoways.ma/uploads/Home_page_302f2c30a9.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>
              مرحباً بكم في متجر الملابس التقليدية المغربية
            </h1>
            <p style={{ fontSize: '1.3rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              اكتشف جمال التراث المغربي الأصيل مع مجموعتنا الفاخرة من القندورة والنعال الجلدي
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/products">
                <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  تسوق الآن
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="features" style={{ padding: '80px 0', backgroundColor: 'white' }}>
          <div className="container">
            <h2 className="text-center" style={{ color: '#c1272d', marginBottom: '3rem' }}>
              لماذا تختار متجرنا؟
            </h2>
            <div className="grid grid-3">
              <div className="text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#d4af37',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2rem'
                }}>
                  🧵
                </div>
                <h3 style={{ color: '#0066cc', marginBottom: '1rem' }}>خياطة يدوية</h3>
                <p>كل قطعة مصنوعة يدوياً بحرفية عالية</p>
              </div>
              <div className="text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#d4af37',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2rem'
                }}>
                  🎨
                </div>
                <h3 style={{ color: '#0066cc', marginBottom: '1rem' }}>تراث أصيل</h3>
                <p>تصاميم تقليدية تعكس ثقافة المغرب</p>
              </div>
              <div className="text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#d4af37',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2rem'
                }}>
                  🚚
                </div>
                <h3 style={{ color: '#0066cc', marginBottom: '1rem' }}>توصيل سريع</h3>
                <p>توصيل آمن وسريع لجميع أنحاء المملكة</p>
              </div>
            </div>
          </div>
        </section>

        <section className="showcase" style={{ padding: '80px 0' }}>
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
              <div>
                <img 
                  src="https://api.abouoways.ma/uploads/Home_page_302f2c30a9.png"
                  alt="الملابس التقليدية المغربية"
                  style={{
                    width: '100%',
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                  }}
                />
              </div>
              <div>
                <h2 style={{ color: '#c1272d', marginBottom: '1.5rem', fontSize: '2rem' }}>
                  تراث مغربي أصيل
                </h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  نقدم لكم أجود أنواع الملابس التقليدية المغربية المصنوعة يدوياً بحرفية عالية. كل قطعة تحمل جزءاً من روح المغرب الأصيلة.
                </p>
                <Link href="/products">
                  <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                    اكتشف المزيد
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-products" style={{ padding: '80px 0', backgroundColor: 'white' }}>
          <div className="container">
            <h2 className="text-center" style={{ color: '#c1272d', marginBottom: '3rem' }}>
              منتجاتنا المميزة
            </h2>
            {loading ? (
              <div style={{ textAlign: 'center' }}>
                <p>جاري التحميل...</p>
              </div>
            ) : (
              <div className="grid grid-3">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            <div className="text-center mt-4">
              <Link href="/products">
                <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  عرض جميع المنتجات
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="cta" style={{
          background: `linear-gradient(135deg, #c1272d, #0066cc)`,
          color: 'white',
          padding: '80px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
              اكتشف جمال التراث المغربي
            </h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
              انضم إلى آلاف العملاء الراضين
            </p>
            <Link href="/products">
              <button className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
                تسوق الآن
              </button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
