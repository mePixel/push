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
    "https://fcm.googleapis.com/fcm/send/exIvHybOm0U:APA91bFpa6T5LQdHcsn1kNpx737-H1SfRK6NbpnR209RI21NfsccLYr2UKseodCTc3w3eequlbnwJzAsODuaV5g6ibUFKH-28jzuEov_e3tm3oaLDhX_sbGNIvC0uwmggRTX1eiZkXAG",
  expirationTime: null,
  keys: {
    p256dh:
      "BEjeuF05ArU1S11S_zz7IgT9CR4HxRlr0Jd1S-hVY7JdRYxtRco2GwqHd_zWS5Zto_pi76pepXc1UaOenO2xOHs",
    auth: "_L-X6011IsbVcnULQC0RGw"
  }
};

push.sendNotification(sub, "message");
