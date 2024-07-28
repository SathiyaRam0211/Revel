const twilio = require('twilio');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.handler = async (event, context) => {
    const { phoneNumber, code } = JSON.parse(event.body);

    try {
        const verificationCheck = await client.verify.services(process.env.TWILIO_VERIFY_SERVICE_SID)
            .verificationChecks
            .create({ to: phoneNumber, code });

        if (verificationCheck.status === 'approved') {
            return {
                statusCode: 200,
                body: JSON.stringify({ success: true, message: 'OTP verified successfully' }),
            };
        } else {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, message: 'Invalid OTP' }),
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: error.message }),
        };
    }
};
