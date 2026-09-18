import React from 'react';

function App() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '420px',
        width: '100%'
      }}>
        <h1 style={{ color: '#1e3a8a', marginBottom: '10px', fontSize: '24px' }}>
          Tổng Hợp App Nhận Thưởng Miễn Phí
        </h1>
        <p style={{ color: '#4b5563', marginBottom: '25px', fontSize: '14px' }}>
          Chọn một trong các ngân hàng dưới đây để tải app, mở tài khoản online tại nhà hoàn toàn miễn phí và nhận quà tặng!
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* NÚT 1: MB BANK */}
          <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '10px', textAlign: 'left' }}>
            <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', color: '#1f2937', fontSize: '14px' }}>
              💙 Ngân hàng Quân Đội MB Bank (Dành cho lứa tuổi 15+)
            </p>
            <p style={{ margin: '0 0 10px 0', color: '#6b7280', fontSize: '12px' }}>
              👉 Lưu ý: Nhập mã giới thiệu <span style={{ fontWeight: 'bold', color: 'red' }}>AT</span> và quét định danh NFC Căn cước công dân để được tính quà nhé.
            </p>
            <a 
              href="https://shorten.asia/1pfrFBFK" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'block', backgroundColor: '#0044ff', color: 'white', fontWeight: 'bold', textDecoration: 'none', padding: '10px', borderRadius: '6px', fontSize: '14px', textAlign: 'center' }}
            >
              Đăng Ký MB Bank (Nhận 30k)
            </a>
          </div>

          {/* NÚT 2: VPBANK */}
          <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '10px', textAlign: 'left' }}>
            <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', color: '#1f2937', fontSize: '14px' }}>
              💚 Ngân hàng số VPBank NEO (Dành cho lứa tuổi 18+)
            </p>
            <p style={{ margin: '0 0 10px 0', color: '#6b7280', fontSize: '12px' }}>
              👉 Lưu ý: Nhập mã giới thiệu <span style={{ fontWeight: 'bold', color: 'red' }}>ATUSER9724</span> khi đăng ký trong ứng dụng nhé.
            </p>
            <a 
              href="https://shorten.asia/Ra3z4gHf" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'block', backgroundColor: '#10b981', color: 'white', fontWeight: 'bold', textDecoration: 'none', padding: '10px', borderRadius: '6px', fontSize: '14px', textAlign: 'center' }}
            >
              Đăng Ký VPBank (Nhận Quà Khủng)
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
