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
    const size = responseData?.size;
    const type = responseData?.mimetype;
    const name = responseData?.filename;
    const responseJson = { size, type, name };

    return response.json(responseJson);
  } catch (err) {
    console.error(err);
  }
};
