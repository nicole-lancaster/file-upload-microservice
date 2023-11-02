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
    return response.json({ msg: "successfully posted form" });
  } catch (err) {
    console.error(err);
  }
};
