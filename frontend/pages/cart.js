import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCart } from '../utils/CartContext'
import { simulateOrderProcessing } from '../utils/n8nIntegration'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    email: ''
  })

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity)
    }
  }

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckout = async (e) => {
    e.preventDefault()
    setIsCheckingOut(true)

    try {
      const orderData = {
        id: Date.now(),
        customer: customerInfo,
        items: cart,
        total: getTotalPrice(),
        date: new Date().toISOString()
      }

      await simulateOrderProcessing(orderData)
      
      setOrderPlaced(true)
      clearCart()
    } catch (error) {
      console.error('Error processing order:', error)
      alert('حدث خطأ أثناء معالجة الطلب. يرجى المحاولة مرة أخرى.')
    } finally {
      setIsCheckingOut(false)
    }
  }

  if (orderPlaced) {
    return (
      <>
        <Head>
          <title>تم تأكيد الطلب - متجر الملابس التقليدية المغربية</title>
        </Head>
        <div className="moroccan-pattern">
          <Header />
          <section style={{ padding: '100px 0', textAlign: 'center' }}>
            <div className="container">
              <div style={{
                backgroundColor: 'white',
                padding: '3rem',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#07632a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  fontSize: '2rem',
                  color: 'white'
                }}>
                  ✓
                </div>
                <h1 style={{ color: '#07632a', marginBottom: '1rem' }}>
                  شكراً لطلبك!
                </h1>
                <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                  تم استلام طلبك بنجاح وسنقوم بمعالجته في أقرب وقت ممكن. ستصلك رسالة تأكيد على بريدك الإلكتروني قريباً.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/products">
                    <button className="btn btn-primary">
                      متابعة التسوق
                    </button>
                  </Link>
                  <Link href="/">
                    <button className="btn btn-secondary">
                      العودة للرئيسية
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>سلة التسوق - متجر الملابس التقليدية المغربية</title>
        <meta name="description" content="عرض وإدارة سلة التسوق الخاصة بك" />
      </Head>

      <div className="moroccan-pattern">
        <Header />
        
        <section className="page-header" style={{
          background: `linear-gradient(135deg, rgba(194, 39, 45, 0.9), rgba(0, 102, 204, 0.9)), url('https://api.abouoways.ma/uploads/cart_db9a055e75.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '80px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
              سلة التسوق
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '0' }}>
              {cart.length === 0 ? 'سلة التسوق فارغة' : `${cart.length} منتجات في سلتك`}
            </p>
          </div>
        </section>

        <section style={{ padding: '60px 0' }}>
          <div className="container">
            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  fontSize: '3rem'
                }}>
                  🛒
                </div>
                <h2 style={{ color: '#c1272d', marginBottom: '1rem' }}>
                  سلة التسوق فارغة
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#6c757d', marginBottom: '2rem' }}>
                  لم تقم بإضافة أي منتجات إلى سلة التسوق بعد
                </p>
                <Link href="/products">
                  <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                    تسوق الآن
                  </button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-3">
                <div style={{ gridColumn: 'span 2' }}>
                  <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '2rem', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                    <h2 style={{ color: '#c1272d', marginBottom: '2rem' }}>المنتجات في سلتك</h2>
                    {cart.map((item) => (
                      <div key={item.id} style={{
                        display: 'flex',
                        gap: '1.5rem',
                        padding: '1.5rem 0',
                        borderBottom: '1px solid #dee2e6'
                      }}>
                        <img 
                          src={item.image} 
                          alt={item.name}
                          style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: '10px'
                          }}
                        />
                        <div style={{ flex: '1' }}>
                          <h3 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>
                            {item.name}
                          </h3>
                          <p style={{ color: '#6c757d', marginBottom: '0.5rem' }}>
                            {item.category}
                          </p>
                          <p style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '1.2rem' }}>
                            {item.price} درهم
                          </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: '2px solid #c1272d',
                                backgroundColor: 'white',
                                color: '#c1272d',
                                cursor: 'pointer',
                                fontSize: '1.2rem'
                              }}
                            >
                              -
                            </button>
                            <span style={{ minWidth: '30px', textAlign: 'center', fontWeight: 'bold' }}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: '2px solid #c1272d',
                                backgroundColor: 'white',
                                color: '#c1272d',
                                cursor: 'pointer',
                                fontSize: '1.2rem'
                              }}
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            style={{
                              padding: '0.5rem 1rem',
                              backgroundColor: '#dc3545',
                              color: 'white',
                              border: 'none',
                              borderRadius: '20px',
                              cursor: 'pointer',
                              fontSize: '0.9rem'
                            }}
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '2rem', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                    <h2 style={{ color: '#c1272d', marginBottom: '1.5rem' }}>ملخص الطلب</h2>
                    
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span>المجموع الفرعي:</span>
                        <span>{getTotalPrice()} درهم</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span>الشحن:</span>
                        <span>50 درهم</span>
                      </div>
                      <div className="moroccan-divider" style={{ margin: '1rem 0' }}></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        <span>المجموع:</span>
                        <span style={{ color: '#c1272d' }}>{getTotalPrice() + 50} درهم</span>
                      </div>
                    </div>

                    <form onSubmit={handleCheckout}>
                      <div className="form-group">
                        <label className="form-label">الاسم الكامل *</label>
                        <input
                          type="text"
                          name="name"
                          value={customerInfo.name}
                          onChange={handleInputChange}
                          className="form-input"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">رقم الهاتف *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={customerInfo.phone}
                          onChange={handleInputChange}
                          className="form-input"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">البريد الإلكتروني</label>
                        <input
                          type="email"
                          name="email"
                          value={customerInfo.email}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">العنوان *</label>
                        <input
                          type="text"
                          name="address"
                          value={customerInfo.address}
                          onChange={handleInputChange}
                          className="form-input"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">المدينة *</label>
                        <input
                          type="text"
                          name="city"
                          value={customerInfo.city}
                          onChange={handleInputChange}
                          className="form-input"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isCheckingOut}
                        className="btn btn-primary"
                        style={{
                          width: '100%',
                          fontSize: '1.1rem',
                          padding: '1rem',
                          backgroundColor: isCheckingOut ? '#6c757d' : undefined
                        }}
                      >
                        {isCheckingOut ? 'جاري المعالجة...' : 'إتمام الطلب'}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
