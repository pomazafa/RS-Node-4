const db = require('../../common/inMemoryDB');
const mongoose = require('mongoose');
const { User, UserSchema } = require('./user.model');
const UserModel = mongoose.model('User', UserSchema);

const getAll = async () => {
  return db.getAllEntities(UserModel);
};

const get = async id => {
  const user = await db.getEntity(UserModel, id);
  if (!user) {
    throw new Error(`User Not found: id=${id}`);
  }
  return user;
};

const remove = async id => {
  if (!(await db.removeEntity(UserModel, id))) {
    throw new Error(`Error while removing ${id} user`);
  }
};

const save = async user => {
  return db.saveEntity(UserModel, new User(user));
};

const update = async (id, user) => {
  const entity = await db.updateEntity(UserModel, id, user);

  if (!entity) {
    throw new Error(`Error while updating ${id} user`);
  }

  return entity;
};

module.exports = { getAll, get, remove, save, update };
