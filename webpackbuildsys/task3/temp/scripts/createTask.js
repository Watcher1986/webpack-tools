"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onCreateTask = void 0;

var _renderer = require("./renderer.js");

var _storage = require("./storage.js");

var _tasksGateway = require("./tasksGateway.js");

var onCreateTask = function onCreateTask() {
  var taskTitleInputElem = document.querySelector('.task-input');
  var text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = '';
  var newTask = {
    text: text,
    done: false,
    createDate: new Date().toISOString()
  };
  (0, _tasksGateway.createTask)(newTask).then(function () {
    return (0, _tasksGateway.getTasksList)();
  }).then(function (newTasksList) {
    (0, _storage.setItem)('tasksList', newTasksList);
    (0, _renderer.renderTasks)();
  });
}; // 1. Prepare data
// 2. Write data to db
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data


exports.onCreateTask = onCreateTask;