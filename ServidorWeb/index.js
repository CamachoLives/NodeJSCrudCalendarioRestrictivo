// the sheet that will contain all above the Server
//Variables
const express = require("express");
const app = express();
const PORT = 4000;
const data = require("./MOCK_DATA.json");

app.get("/", (Req, Res) => {
  Res.json({
    message: "List Users",
    body: data,
  });
});

app.listen(4000, () => {
  console.log(`Server listening --> http://localhost:${PORT}`);
});
