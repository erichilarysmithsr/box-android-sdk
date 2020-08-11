"use strict";
let datafire = require('datafire');

let http = require('@datafire/http').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let response = await Promise.all([].map(item => http.get({
      url: "",
    }, context)));
    return response;
  },
});
