const { sendBulkEmail } = require('../services/emailService');

const sendEmails = async (req, res) => {
    try {
        const { recipients, subject, message } = req.body;

        // Validasi input
        if (!Array.isArray(recipients) || recipients.length === 0) {
            return res.status(400).json({ error: 'Recipients must be a non-empty array' });
        }
        if (!subject || !message) {
            return res.status(400).json({ error: 'Subject and message are required' });
        }

        const result = await sendBulkEmail(recipients, subject, message);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send emails' });
    }
};

module.exports = { sendEmails };
