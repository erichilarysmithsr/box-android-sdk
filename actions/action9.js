"use strict";
let datafire = require('datafire');

let n_auth = require('@datafire/n_auth').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => n_auth.nauth.post({
      msg: "",
    }, context)));
    return result;
  },
});
