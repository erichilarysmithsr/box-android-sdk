"use strict";
let datafire = require('datafire');

let configcat = require('@datafire/configcat').actions;
module.exports = new datafire.Action({
  id: "action19",
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => configcat.v1.products.productId.environments.get({
      productId: "",
    }, context)));
    return result;
  },
});
