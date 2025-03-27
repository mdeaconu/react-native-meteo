const Expo = require("expo-server-sdk").default;
const expo = new Expo();

async function sendNotification(token) {
  if (Expo.isExpoPushToken(token)) {
    const notificationResponse = expo.sendPushNotificationsAsync([
      {
        to: token,
        title: "Hello!",
        body: "This is an expo notification",
        data: {
          blabla: 123
        }
      }
    ]);

    console.log("Notification sent: ", notificationResponse);
  } else {
    console.log(`This ${token} is not an Expo token`);
  }
}

if (process.argv.length === 3) {
  const TOKEN = process.argv[2];
  sendNotification(TOKEN);
} else {
  console.log("No token has been provided.\nUsage: node ./index.js <token>");
}
