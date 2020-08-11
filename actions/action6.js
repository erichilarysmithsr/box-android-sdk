"use strict";
let datafire = require('datafire');

let circleci = require('@datafire/circleci').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let projects = await Promise.all([].map(item => circleci.projects.get({}, context)));
    return projects;
  },
});
