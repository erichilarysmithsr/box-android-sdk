"use strict";
let datafire = require('datafire');

let rubygems = require('@datafire/rubygems').actions;
module.exports = new datafire.Action({
  id: "action18",
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => rubygems.api_key.format.get({
      format: "json",
    }, context)));
    return result;
  },
});
