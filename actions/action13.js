"use strict";
let datafire = require('datafire');

let apache_qakka = require('@datafire/apache_qakka').actions;
module.exports = new datafire.Action({
  id: "action13",
  handler: async (input, context) => {
    let apiResponse = await Promise.all([].map(item => apache_qakka.getMessageData({
      queueName: "",
      queueMessageId: "",
    }, context)));
    return apiResponse;
  },
});
