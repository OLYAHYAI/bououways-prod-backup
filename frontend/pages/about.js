import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>من نحن - متجر الملابس التقليدية المغربية</title>
        <meta name="description" content="تعرف على قصة متجرنا ورسالتنا في الحفاظ على التراث المغربي الأصيل" />
        <meta name="keywords" content="من نحن, قصة المتجر, تراث مغربي, ملابس تقليدية" />
      </Head>
      <div className="moroccan-pattern">
        <Header />
        
        <section className="page-header" style={{
          background: `linear-gradient(135deg, rgba(194, 39, 45, 0.9), rgba(0, 102, 204, 0.9)), url('https://api.abouoways.ma/uploads/about_us_page_5365950016.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '80px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
              من نحن
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '0' }}>
              قصة عشق للتراث المغربي الأصيل
            </p>
          </div>
        </section>

        <section className="our-story" style={{ padding: '80px 0', backgroundColor: 'white' }}>
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: 'center' }}>
              <div>
                <h2 style={{ color: '#c1272d', marginBottom: '1.5rem' }}>
                  قصتنا
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  انطلق رحلتنا في عام 2010 بشغف عميق للتراث المغربي ورغبة في الحفاظ على الحرف التقليدية التي ورثناها عن أجدادنا. بدأنا كورشة صغيرة في قلب مراكش العتيقة، حيث كنا نعمل بجد لإنتاج أجود أنواع القندورة والنعال الجلدي.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  اليوم، وبعد أكثر من عقد من الخبرة، أصبحنا من أبرز المتاجر المتخصصة في الملابس التقليدية المغربية، نخدم آلاف العملاء في جميع أنحاء المملكة وخارجها، ونفتخر بأن كل قطعة ننتجها تحمل جزءاً من روح المغرب الأصيلة.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  نؤمن بأن الجودة والأصالة هما أساس نجاحنا، ونسعى دائماً لتقديم أفضل المنتجات التي تعكس ثقافتنا العريقة وتلبي توقعات عملائنا الكرام.
                </p>
              </div>
              <div>
                <img 
                  src="https://api.abouoways.ma/uploads/about_us_page_5365950016.png"
                  alt="ورشة العمل التقليدية"
                  style={{
                    width: '100%',
                    borderRadius: '15px',
                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mission-vision" style={{ padding: '80px 0' }}>
          <div className="container">
            <h2 className="text-center" style={{ color: '#c1272d', marginBottom: '3rem' }}>
              رسالتنا ورؤيتنا
            </h2>
            <div className="grid grid-2">
              <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#d4af37',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '2rem'
                }}>
                  🎯
                </div>
                <h3 style={{ color: '#0066cc', marginBottom: '1rem' }}>رسالتنا</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  الحفاظ على التراث المغربي الأصيل من خلال تقديم منتجات عالية الجودة تجمع بين الأصالة والحداثة، ودعم الحرفيين المحليين وتطوير مهاراتهم.
                </p>
              </div>
              <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#d4af37',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '2rem'
                }}>
                  👁️
                </div>
                <h3 style={{ color: '#0066cc', marginBottom: '1rem' }}>رؤيتنا</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  أن نكون الوجهة الأولى للملابس التقليدية المغربية في العالم، وأن نكون جسراً يربط بين التراث العريق والأجيال الجديدة.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="values" style={{ 
          padding: '80px 0', 
          backgroundColor: 'white'
        }}>
          <div className="container">
            <h2 className="text-center" style={{ color: '#c1272d', marginBottom: '3rem' }}>
              قيمنا
            </h2>
            <div className="grid grid-4">
              <div className="text-center">
                <div style={{
                  width: '70px',
                  height: '70px',
                  backgroundColor: '#c1272d',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '1.5rem',
                  color: 'white'
                }}>
                  🏆
                </div>
                <h4 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>الجودة</h4>
                <p>نلتزم بأعلى معايير الجودة في كل قطعة ننتجها</p>
              </div>
              <div className="text-center">
                <div style={{
                  width: '70px',
                  height: '70px',
                  backgroundColor: '#c1272d',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '1.5rem',
                  color: 'white'
                }}>
                  🤝
                </div>
                <h4 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>الثقة</h4>
                <p>نبني علاقات طويلة الأمد مع عملائنا المكرمين</p>
              </div>
              <div className="text-center">
                <div style={{
                  width: '70px',
                  height: '70px',
                  backgroundColor: '#c1272d',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '1.5rem',
                  color: 'white'
                }}>
                  🌍
                </div>
                <h4 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>الأصالة</h4>
                <p>نحافظ على الأصالة المغربية في كل تصاميمنا</p>
              </div>
              <div className="text-center">
                <div style={{
                  width: '70px',
                  height: '70px',
                  backgroundColor: '#c1272d',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '1.5rem',
                  color: 'white'
                }}>
                  💡
                </div>
                <h4 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>الابتكار</h4>
                <p>نجمع بين التراث والحداثة في تصاميمنا</p>
              </div>
            </div>
          </div>
        </section>

        <section className="founder" style={{ padding: '80px 0' }}>
          <div className="container">
            <h2 className="text-center" style={{ color: '#c1272d', marginBottom: '3rem' }}>
              المؤسس
            </h2>
            <div className="card" style={{ padding: '3rem', textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
              <img 
                src="https://api.abouoways.ma/uploads/PROFILE_jpg_c700fddd3f.png"
                alt="المؤسس"
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  margin: '0 auto 1.5rem',
                  objectFit: 'cover',
                  border: '4px solid #d4af37'
                }}
              />
              <h3 style={{ color: '#0066cc', marginBottom: '0.5rem', fontSize: '1.5rem' }}>محمد أمين</h3>
              <p style={{ color: '#d4af37', marginBottom: '1.5rem', fontSize: '1.1rem' }}>المؤسس والمدير العام</p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                شغوف بالتراث المغربي الأصيل منذ الصغر، أسست هذا المتجر لمشاركة جمال الحرف التقليدية المغربية مع العالم. أؤمن بأن كل قطعة تحكي قصة وتحمل روح الأجداد.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-cta" style={{
          background: `linear-gradient(135deg, #c1272d, #0066cc)`,
          color: 'white',
          padding: '80px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
              تواصل معنا
            </h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في اختيار المنتج المثالي
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+212656599581" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem', textDecoration: 'none' }}>
                📞 0656599581
              </a>
              <a href="https://wa.me/212656599581" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem', textDecoration: 'none', backgroundColor: '#25D366' }}>
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
