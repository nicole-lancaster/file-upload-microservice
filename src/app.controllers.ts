import Express from "express";

export const getHtml = (
  request: Express.Request,
  response: Express.Response,
) => {
  response.sendFile(process.cwd() + "/views/index.html");
};
