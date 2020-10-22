const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class Board {
  constructor({
    id = uuid(),
    title = 'BOARD',
    columns = [],
    description = 'Board'
  } = {}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.columns = columns;
  }

  static toResponse(board) {
    return board;
  }
}

const BoardSchema = new mongoose.Schema({
  id: { type: String, index: true, required: true, unique: true },
  title: { type: String, index: true, required: true },
  columns: { type: String, index: true, required: true },
  description: { type: [String], index: true, required: true }
});

module.exports = { Board, BoardSchema };
