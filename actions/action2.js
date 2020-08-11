"use strict";
let datafire = require('datafire');

let fileserver = require('@datafire/fileserver').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => fileserver.serve({
      filename: "",
    }, context)));
    return result;
  },
});
