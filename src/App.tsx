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
        maxWidth: '400px',
        width: '100%'
      }}>
        <h1 style={{ color: '#1e3a8a', marginBottom: '10px', fontSize: '24px' }}>
          My Google AI Studio App
        </h1>
        <p style={{ color: '#4b5563', marginBottom: '25px', fontSize: '15px' }}>
          Chào mừng bạn đến với ứng dụng AI của mình. Dự án đang trong quá trình nâng cấp hệ thống.
        </p>
        
        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '20px' }}>
          <p style={{ color: '#1f2937', fontWeight: 'bold', marginBottom: '15px', fontSize: '14px' }}>
            🎁 Ủng hộ Admin bằng cách mở tài khoản MB Bank nhận ngay 30k miễn phí:
          </p>
          
          <a 
            href="https://shorten.asia/1pfrFBFK" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#0044ff',
              color: 'white',
              fontWeight: 'bold',
              textDecoration: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '15px',
              boxShadow: '0 4px 10px rgba(0, 68, 255, 0.3)',
              transition: 'background-color 0.2s'
            }}
          >
            Đăng Ký MB Bank Nhận 30K
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
