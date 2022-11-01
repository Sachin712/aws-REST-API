import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const res = {
      statusCode: 200,
      body: "Hello sachin",
    };
    return res;
  } catch (error) {
    return {
      statusCode: 500,
      body: "Error occured.",
    };
  }
};

/*
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const response = {
      statusCode: 200,
      body: 'HELLO YOU ARE MY FRIEND!!!',
    };
    return response;
  } catch (err) {
    return {
      statusCode: 500,
      body: 'An error occured',
    };
  }
};

*/
