"use strict";
let datafire = require('datafire');

let github = require('@datafire/github').actions;
module.exports = new datafire.Action({
  id: "action15",
  handler: async (input, context) => {
    let authorization = await Promise.all([].map(item => github.authorizations.authorization_id.get({
      authorization_id: 0,
    }, context)));
    return authorization;
  },
});
