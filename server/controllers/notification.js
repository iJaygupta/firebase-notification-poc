
const firebase = require("../lib/firebase-setup");


exports.sendNotificationFromFirebase = async (request, response) => {
    try {
        const registrationToken = request.body.client_registration_token;
        var payload = {
            notification: {
                title: "Hello From Firebase",
                body: "Notification from some activity on tribe"
            }
        };
        const options = {
            priority: "high",
            timeToLive: 60 * 60 * 24
        }
        let result = await firebase.sendNotification(registrationToken, payload, options);
        return response.status(200).json({
            status: "OK",
            data: result
        })
    } catch (error) {
        return response.status(500).json({
            status: "FAILED",
            error
        })
    }
}