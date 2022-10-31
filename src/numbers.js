"use strict";

module.exports.addNumbers = async (event) => {
  // const body = JSON.parse(event.body);
  // console.log(body.num);

  // return body;
  try {
    const reqBody = event.body;
    const parsedBody = JSON.parse(reqBody);
    return {
      statusCode: 200,
      body: `Answer ${parsedBody?.num}`,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: "Error occured.",
    };
  }
};
