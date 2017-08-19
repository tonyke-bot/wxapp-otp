// index.js
const app = getApp()
const totp = require('../../utils/node-notp').totp;
// const Crypto = require('../../utils/crypto-js');

Page({
  data: {
    token: '12345678901234567890',
    timeStep: 45,  // should be the same value with the server
    otp: '------'
  },

  onLoad: function () {
    let { token, timeStep } = this.data;
    console.log('token', token);
    console.log('time step', timeStep);
    
    setInterval(() => {
      this.setData({otp: totp.gen(token, { time: timeStep })});
    }, timeStep * 45);
  }
})
