import Express from "express";

export const getHtml = (
  _request: Express.Request,
  response: Express.Response,
) => {
  response.sendFile(process.cwd() + "/views/index.html");
};

export const postFormDataAndFile = (
  request: Express.Request,
  response: Express.Response,
) => {
  const { originalname, mimetype, size } = request.file || {};
  const responseData = {
    name: originalname,
    type: mimetype,
    size: size,
  };
  try {
    return response.json(responseData);
  } catch (err) {
    console.error(err);
    return response.status(500).json({ msg: "Server error" });
  }
};
