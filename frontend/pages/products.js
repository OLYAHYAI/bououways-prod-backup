import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../utils/api'

export default function Products() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('الكل')
  const [selectedPriceRange, setSelectedPriceRange] = useState('الكل')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  const categories = ['الكل', 'قندورة', 'نعال']
  const priceRanges = [
    { label: 'الكل', min: 0, max: Infinity },
    { label: 'أقل من 500 درهم', min: 0, max: 500 },
    { label: '500-1000 درهم', min: 500, max: 1000 },
    { label: '1000-2000 درهم', min: 1000, max: 2000 },
    { label: 'أكثر من 2000 درهم', min: 2000, max: Infinity }
  ]

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      const data = await getProducts()
      setProducts(data)
      setFilteredProducts(data)
      setLoading(false)
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    let filtered = products

    if (selectedCategory !== 'الكل') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    const priceRange = priceRanges.find(range => range.label === selectedPriceRange)
    if (priceRange) {
      filtered = filtered.filter(product =>
        product.price >= priceRange.min && product.price <= priceRange.max
      )
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, selectedPriceRange, searchTerm, products])

  return (
    <>
      <Head>
        <title>المنتجات - متجر الملابس التقليدية المغربية</title>
        <meta name="description" content="تصفح مجموعتنا الكاملة من القندورة والنعال المغربي الأصيل" />
      </Head>
      <div className="moroccan-pattern">
        <Header />
        
        <section className="page-header" style={{
          background: `linear-gradient(135deg, rgba(194, 39, 45, 0.9), rgba(0, 102, 204, 0.9)), url('https://api.abouoways.ma/uploads/Produit_page_acc856ff6a.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '80px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
              منتجاتنا
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '0' }}>
              اكتشف مجموعتنا الفاخرة من الملابس التقليدية المغربية الأصلية
            </p>
          </div>
        </section>

        <section className="filters" style={{ padding: '40px 0', backgroundColor: 'white' }}>
          <div className="container">
            <div className="filter-controls" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ flex: '1', minWidth: '250px' }}>
                <input
                  type="text"
                  placeholder="ابحث عن منتج..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '2px solid #dee2e6',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontFamily: 'Tajawal, sans-serif'
                  }}
                />
              </div>

              <div style={{ minWidth: '200px' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  الفئة:
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="form-select"
                  style={{ borderRadius: '25px' }}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ minWidth: '200px' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  نطاق السعر:
                </label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="form-select"
                  style={{ borderRadius: '25px' }}
                >
                  {priceRanges.map(range => (
                    <option key={range.label} value={range.label}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <p style={{ fontSize: '1.1rem', color: '#6c757d' }}>
                {loading ? 'جاري التحميل...' : `تم العثور على ${filteredProducts.length} منتج`}
              </p>
            </div>
          </div>
        </section>

        <section className="products-grid" style={{ padding: '60px 0' }}>
          <div className="container">
            {loading ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <h3>جاري التحميل...</h3>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <h3 style={{ color: '#c1272d', marginBottom: '1rem' }}>
                  لم يتم العثور على منتجات
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#6c757d' }}>
                  جرب تغيير معايير البحث أو الفلترة
                </p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
