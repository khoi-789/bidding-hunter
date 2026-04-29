import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Chỉ cho phép phương thức POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, cc, subject, html } = req.body;

  // Lấy cấu hình từ biến môi trường Vercel
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error('Missing Environment Variables on Vercel');
    return res.status(500).json({ 
      error: 'Cấu hình server chưa hoàn tất', 
      details: 'Thiếu EMAIL_USER hoặc EMAIL_APP_PASSWORD trên Vercel Settings' 
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  try {
    const mailOptions = {
      from: `"Bidding Hunter AI" <${user}>`,
      to: to || 'leminhkhoi279@gmail.com',
      cc: cc || '',
      subject: subject || '🚀 Thông báo từ Bidding Hunter',
      html: html || '<p>Nội dung mặc định</p>',
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent: ' + info.response);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Gửi mail thành công!',
      info: info.response 
    });
  } catch (error) {
    console.error('❌ SMTP Error:', error);
    return res.status(500).json({ 
      error: 'Lỗi gửi mail qua SMTP', 
      details: error.message 
    });
  }
}
