"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initTodoListHandlers = void 0;

var _createTask = require("./createTask.js");

var _updateTask = require("./updateTask.js");

// import { onDeleteTask } from './deleteData.js';
var initTodoListHandlers = function initTodoListHandlers() {
  var createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', _createTask.onCreateTask);
  var todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', _updateTask.onToggleTask); // todoListElem.addEventListener('click', onDeleteTask);
};

exports.initTodoListHandlers = initTodoListHandlers;