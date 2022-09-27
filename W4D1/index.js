const express = require("express");
const cookieParser = require("cookie-parser");
const port = 3000;

const app = express();
app.use(cookieParser());

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server created successfully on port ${port}`);
});

app.post("/result", (res, req) => {
  //   res.cookie();
});
