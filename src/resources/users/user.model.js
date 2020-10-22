const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class User {
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

const UserSchema = new mongoose.Schema({
  id: { type: String, index: true, required: true, unique: true },
  name: { type: String, index: true, required: true },
  login: { type: String, index: true, required: true },
  password: { type: String, index: true, required: true }
});

module.exports = { User, UserSchema };
