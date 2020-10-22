require('dotenv').config();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const getAllEntities = async Model => {
  return (await Model.find()).filter(entity => entity);
};

const getEntity = async (Model, id) => {
  const entity = await Model.findOne({ id: id });

  return entity;
};

const updateEntity = async (Model, id, entity) => {
  await Model.updateOne({ id: id }, entity);
  return getEntity(Model, id);
};

const saveEntity = async (Model, entity) => {
  return await new Model(entity).save();
};

const removeEntity = async (Model, id) => {
  const entity = await getEntity(Model, id);

  if (entity) {
    await Model.remove(entity);
  }
  return entity;
};

module.exports = {
  getAllEntities,
  getEntity,
  removeEntity,
  saveEntity,
  updateEntity
};
