"use strict";
let datafire = require('datafire');

let stoplight = require('@datafire/stoplight').actions;
module.exports = new datafire.Action({
  id: "action11",
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => stoplight.versions.versionId.export.format.get({
      versionId: "",
      format: "oas.json",
    }, context)));
    return result;
  },
});
