const db = require('../../common/inMemoryDB');
const mongoose = require('mongoose');
const { Task, TaskSchema } = require('./task.model');
const TaskModel = mongoose.model('Task', TaskSchema);

const getAll = async () => {
  return db.getAllEntities(TaskModel);
};

const get = async id => {
  const task = await db.getEntity(TaskModel, id);
  if (!task) {
    throw new Error(`Task Not found: id=${id}`);
  }
  return task;
};

const remove = async id => {
  if (!(await db.removeEntity(TaskModel, id))) {
    throw new Error(`Error while removing ${id} task`);
  }
};

const save = async task => {
  return db.saveEntity(TaskModel, new Task(...task));
};

const update = async (id, task) => {
  const entity = await db.updateEntity(TaskModel, id, task);

  if (!entity) {
    throw new Error(`Error while updating ${id} task`);
  }

  return entity;
};

module.exports = { getAll, get, remove, save, update };
