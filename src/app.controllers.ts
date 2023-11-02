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
    const responseData = {
      name: request.file?.originalname,
      type: request.file?.mimetype,
      size: request.file?.size,
    };
    return response.json(responseData);
  } catch (err) {
    console.error(err);
    return response.status(500).json({ msg: "Server error" });
  }
};
