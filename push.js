var push = require("web-push");

let vapidKeys = {
  publicKey:
    "BCohg_Q7urt4q8suITza2p1XZPFEENCIneO5PhbQ4ezj1xVstG9IW1xzwoHkStqSw0S4Ag7T3rXPUJpvu2wZGrY",
  privateKey: "Uxqx6QjVzmMPMArJDIR2LYxXa_wiVroIt9pLD_fICdE"
};

push.setVapidDetails(
  "mailto:test@code.co.uk",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/eCkp8mma-OU:APA91bG7euaPcUwmGUrI0E_Z212VJ86oCw4yeh9aK6J4b-3FKwDpOVY1yLqaJnEN-L8enMIn4cAi1K3g9brMLqFsgF7PSMoHKATjlzlLGcd-fP4PrD9LpYPIkcKnn7lH_6ZaoTiHKdyL",
  expirationTime: null,
  keys: {
    p256dh:
      "BP8gw4tnds36ldTv3WXBV4gOqsactHLuoRX13bDSXCq9u4AwGoIAUvd4p0nlnQJVNbvu-gYquQSSqoHeTKcRauY",
    auth: "34UgmvdC_xBJ-IAUAZqUAg"
  }
};

push.sendNotification(sub, "message");
