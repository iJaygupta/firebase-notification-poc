const admin = require("firebase-admin");
const firebaseAppCredential = require("./firebase-config.json")


console.log(firebaseAppCredential);


admin.initializeApp({
    credential: admin.credential.cert(firebaseAppCredential),
    databaseURL: process.env.FIREBASE_DATABASE_URL
});


// var defaultAuth = admin.auth();
// var defaultDatabase = admin.database();


exports.sendNotification = function (registrationToken, msgBody, options) {
    return new Promise((resolve, reject) => {
        let output = {}
        admin.messaging().sendToDevice(registrationToken, msgBody, options)
            .then(data => {
                output.error = false;
                output.msg = "Notification Send Successfully";
                output.data = data;
                output.code = 2001;
                resolve(output);
            })
            .catch(error => {
                output.error = true;
                output.msg = "Unable to Send Notification";
                output.data = error;
                output.code = 9004;
                reject(output);
            })
    })
}