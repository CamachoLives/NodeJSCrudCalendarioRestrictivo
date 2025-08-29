// this file will manage the services of the application
const data = require("./MOCK_DATA.json");

module.exports = {
  // this function will return all users
  getusers: () => data,

  // this function will return a user by id
  getuser: (id) => {
    let identifier = Number(id);
    let user = data.filter((persona) => persona.id === identifier);
    return user;
  },

  // this function will create a new user
  CreateUser: (DataUser) => {
    let newUser = {
      id: data.length + 1,
      ...DataUser,
    };
    data.push(newUser);
    return newUser;
  },

  // this function will update a user by id
  UpdateUser: (id, UpdUser) => {
    let identifier = Number(id);
    let index = data.findIndex((persona) => persona.id === identifier);
    data[index] = {
      id: identifier,
      ...UpdUser,
    };
    return data[index];
  },

  // this function will delete a user by id
  DeleteUser(id) {
    let identifier = Number(id);
    let index = data.findIndex((persona) => persona.id === identifier);
    return data.splice(index, 1);
  },
};
