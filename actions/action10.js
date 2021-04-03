"use strict";
let datafire = require('datafire');

let appveyor = require('@datafire/appveyor').actions;
module.exports = new datafire.Action({
  id: "action10",
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => appveyor.getProjects({}, context)));
    return result;
  },
});
