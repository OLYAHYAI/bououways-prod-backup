import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3>المتجر المغربي</h3>
            <p>
              متجر متخصص في الملابس التقليدية المغربية الأصلية. نقدم أجود أنواع القندورة والنعال الجلدي المصنوع يدوياً بأعلى معايير الجودة.
            </p>
            <div style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
                <span style={{ cursor: 'pointer' }}>📱</span>
                <span style={{ cursor: 'pointer' }}>📘</span>
                <span style={{ cursor: 'pointer' }}>📷</span>
                <span style={{ cursor: 'pointer' }}>🐦</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>روابط سريعة</h3>
            <ul>
              <li><Link href="/">الرئيسية</Link></li>
              <li><Link href="/products">المنتجات</Link></li>
              <li><Link href="/about">من نحن</Link></li>
              <li><Link href="/cart">سلة التسوق</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h3>الفئات</h3>
            <ul>
              <li><Link href="/products?category=قندورة">القندورة</Link></li>
              <li><Link href="/products?category=نعال">النعال الجلدي</Link></li>
              <li><Link href="/products?category=ملابس">ملابس تقليدية</Link></li>
              <li><Link href="/products?category=إكسسوارات">إكسسوارات</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3>تواصل معنا</h3>
            <ul>
              <li>📍 العنوان: 32 طريق محمد الخامس، مراكش</li>
              <li>📞 الهاتف: +212 5XX-XXXXXX</li>
              <li>📱 الموبايل: +212 6XX-XXXXXX</li>
              <li>✉️ البريد: info@moroccan-store.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 المتجر المغربي. جميع الحقوق محفوظة.</p>
          <p>صُمم ب ❤️ في المغرب</p>
        </div>
      </div>
    </footer>
  )
}