const nodemailer = require('nodemailer');

const sendBulkEmail = async (recipients, subject, message) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465, // Gunakan port 465 untuk SSL
        secure: true, // SSL aktif
        auth: {
            user: process.env.EMAIL_USER, // Email Gmail Anda
            pass: process.env.EMAIL_PASS, // App Password Gmail Anda
        },
        debug: true, 
        logger: true, 
    });

    const messageTemplate = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2 style="color: #4CAF50;">Selamat Datang di Layanan Logistik Termurah!</h2>
            <p>${message}</p>
            <p>
                Lihat penawaran pengiriman kami langsung di website:
                <a href="https://logistik-frontend.vercel.app" style="color: #4CAF50; font-weight: bold;">
                    https://logistik-frontend.vercel.app
                </a>
            </p>
            <p>Terima kasih,</p>
            <p><strong>Tim Logistik</strong></p>
        </div>
    `;

    const emailPromises = recipients.map((recipient) => {
        return transporter.sendMail({
            from: `"Tim Logistik" <${process.env.EMAIL_USER}>`, // Email pengirim
            to: recipient.email, // Email penerima
            subject: subject,
            text: `${message}\n\nKunjungi website kami: https://logistik-frontend.vercel.app`,
            html: messageTemplate,
        });
    });

    await Promise.all(emailPromises);
    return { success: true, message: `${recipients.length} emails sent successfully` };
};

module.exports = { sendBulkEmail };
