"use strict";

module.exports.addNumbers = async (event) => {
  // const body = JSON.parse(event.body);
  // console.log(body.num);

  // return body;
  try {
    const reqBody = event.body;
    const parsedBody = JSON.parse(reqBody);

    let num1 = parsedBody.num1;
    let num2 = parsedBody.num2;

    let res = num1+num2;
    return {
      statusCode: 200,
      body: `Answer is ${res}`,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: "Error occured.",
    };
  }
};
