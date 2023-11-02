"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHtml = void 0;
const getHtml = (request, response) => {
    response.sendFile(process.cwd() + '/views/index.html');
};
exports.getHtml = getHtml;
