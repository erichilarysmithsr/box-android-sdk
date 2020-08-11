"use strict";
let datafire = require('datafire');

let mandrillapp = require('@datafire/mandrillapp').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let webhook = await Promise.all([].map(item => mandrillapp.webhooks.add.json.post({
      body: {},
    }, context)));
    return webhook;
  },
});
