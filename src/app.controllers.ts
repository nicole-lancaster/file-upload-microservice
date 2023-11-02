import Express from "express";

export const getHtml = (
  request: Express.Request,
  response: Express.Response,
) => {
  response.sendFile(process.cwd() + "/views/index.html");
};

export const postFormDataAndFile = (
  request: Express.Request,
  response: Express.Response,
) => {
  try {
    const responseData = request.file;
    return response.json(responseData);
  } catch (err) {
    console.error(err);
  }
};
