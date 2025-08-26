// this file will manage the services of the application
const data = require("./MOCK_DATA.json");

module.exports = {
  // this function will return all users
  getusers: () => data,

  // this function will create a new user
  CreateUser: (DataUser) => {
    let newUser = {
      id: data.length + 1,
      ...DataUser,
    };
    data.push(newUser);
    return newUser;
  },
};

// HI
