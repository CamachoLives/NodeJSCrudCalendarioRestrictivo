// the sheet that will contain all above the Server
//Variables
const express = require("express");
const app = express();
const Service = require("./src/service");
const PORT = 4000;
// const data = require("./MOCK_DATA.json");

// this middleware will allow us to read the body of the request
app.use(express.json());

// This endpoint will allow us to read the body of the request
app.get("/", (Req, Res) => {
  Res.json({
    message: "List Users",
    body: Service.getusers(),
  });
});

// this endpoint will allow us to create a new user
app.post("/", (Req, Res) => {
  const newUser = Req.body;
  Res.status(201).json({
    message: "User Created  Successfully",
    body: Service.CreateUser(newUser),
  });
});

// this will start the server
app.listen(4000, () => {
  console.log(`Server listening --> http://localhost:${PORT}`);
});
