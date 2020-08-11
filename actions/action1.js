"use strict";
let datafire = require('datafire');

let mongodb = require('@datafire/mongodb').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => mongodb.update({
      collection: "",
      query: {},
      update: {},
    }, context)));
    return result;
  },
});
