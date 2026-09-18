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
          Chọn một trong các ứng dụng dưới đây để tải app, mở tài khoản online tại nhà hoàn toàn miễn phí và nhận quà tặng!
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
              💚 Ngân hàng số VPBank NEO (Dành cho lứa tuổi 15+)
            </p>
            <p style={{ margin: '0 0 10px 0', color: '#6b7280', fontSize: '12px' }}>
              👉 Lưu ý: Xóa chữ DAOSALE ở ô mã nhân viên (nếu có), nhập mã giới thiệu <span style={{ fontWeight: 'bold', color: 'red' }}>ATUSER9724</span> và nạp 10k vào ZaloPay trong 2 ngày nhé.
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

          {/* NÚT 3: ĐƯỜNG LINK MỚI THÊM VÀO */}
          <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '10px', textAlign: 'left' }}>
            <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', color: '#1f2937', fontSize: '14px' }}>
              🎁 Ứng dụng nhận quà thành viên mới
            </p>
            <p style={{ margin: '0 0 10px 0', color: '#6b7280', fontSize: '12px' }}>
              👉 Hướng dẫn: Bấm vào nút dưới đây để mở ứng dụng, thực hiện đăng ký tài khoản mới và làm theo các yêu cầu để nhận tiền thưởng.
            </p>
            <a 
              href="https://shorten.asia/2wK33xSK" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'block', backgroundColor: '#ea580c', color: 'white', fontWeight: 'bold', textDecoration: 'none', padding: '10px', borderRadius: '6px', fontSize: '14px', textAlign: 'center' }}
            >
              Bấm Để Tải & Nhận Thưởng
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
