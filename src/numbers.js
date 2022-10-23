"use strict";

module.exports.addNumbers = async (event) => {
  const body = JSON.parse(event.body);
  console.log(body);

  return body;
};
