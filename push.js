var push = require('web-push');

let vapidKeys = {
    publicKey: 'BCohg_Q7urt4q8suITza2p1XZPFEENCIneO5PhbQ4ezj1xVstG9IW1xzwoHkStqSw0S4Ag7T3rXPUJpvu2wZGrY',
    privateKey: 'Uxqx6QjVzmMPMArJDIR2LYxXa_wiVroIt9pLD_fICdE'
};

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'message');