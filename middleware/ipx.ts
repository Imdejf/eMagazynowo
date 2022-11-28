import express from "express";

import { createIPX, createIPXMiddleware } from "ipx";

const ipx = createIPX({});
const app = express();
app.use("/image", createIPXMiddleware(ipx));

export default app;