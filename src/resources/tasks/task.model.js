const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class Task {
  constructor({
    id = uuid(),
    title = 'TASK',
    order = 'ORDER',
    description,
    userId = 0,
    boardId = 0,
    columnId = 0
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, descriprion, userId, boardId, columnId } = task;
    return { id, title, order, descriprion, userId, boardId, columnId };
  }
}

const TaskSchema = new mongoose.Schema({
  id: { type: String, index: true, required: true, unique: true },
  title: { type: String, index: true, required: true },
  order: { type: String, index: true, required: true },
  deskription: { type: String, index: true },
  userId: { type: String, index: true, required: true },
  boardId: { type: String, index: true, required: true },
  columnId: { type: String, index: true, required: true }
});

module.exports = { Task, TaskSchema };
