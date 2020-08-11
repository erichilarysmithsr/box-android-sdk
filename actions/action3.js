"use strict";
let datafire = require('datafire');

let smtp = require('@datafire/smtp').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => smtp.send({
      from: "",
      to: [],
    }, context)));
    return result;
  },
});
