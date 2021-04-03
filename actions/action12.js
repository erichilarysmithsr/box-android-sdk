"use strict";
let datafire = require('datafire');

let extendsclass_json_storage = require('@datafire/extendsclass_json_storage').actions;
module.exports = new datafire.Action({
  id: "action12",
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => extendsclass_json_storage.bin.id.get({
      id: "",
    }, context)));
    return result;
  },
});
