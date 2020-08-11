"use strict";
let datafire = require('datafire');

let imap = require('@datafire/imap').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => imap.fetch({
      messages: [],
    }, context)));
    return result;
  },
});
