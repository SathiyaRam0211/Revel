const twilio = require('twilio');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.handler = async (event, context) => {
    const { phoneNumber } = JSON.parse(event.body);

    try {
        const verification = await client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
            .verifications
            .create({ to: phoneNumber, channel: 'sms' });

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'OTP sent successfully' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: error.message }),
        };
    }
};
