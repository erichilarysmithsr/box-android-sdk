"use strict";
let datafire = require('datafire');

let swagger_generator = require('@datafire/swagger_generator').actions;
module.exports = new datafire.Action({
  id: "action16",
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => swagger_generator.getServerOptions({
      framework: "python-flask",
    }, context)));
    return result;
  },
});
