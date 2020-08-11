"use strict";
let datafire = require('datafire');

let postmark = require('@datafire/postmark').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => postmark.server.get({
      'Content-Type': "application/json",
      Accept: "application/json",
    }, context)));
    return result;
  },
});
