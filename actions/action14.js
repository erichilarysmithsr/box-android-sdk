"use strict";
let datafire = require('datafire');

let box_authorization = require('@datafire/box_authorization').actions;
module.exports = new datafire.Action({
  id: "action14",
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => box_authorization.authorize({
      response_type: "code",
      client_id: "",
      redirect_uri: "",
      state: "",
      scope: "",
    }, context)));
    return result;
  },
});
