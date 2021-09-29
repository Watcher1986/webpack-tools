"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasksList = void 0;
var baseUrl = 'https://614785ed65467e0017384b96.mockapi.io/api/v1/tasks';

var getTasksList = function getTasksList() {
  return fetch(baseUrl).then(function (response) {
    return response.json();
  });
};

exports.getTasksList = getTasksList;

var createTask = function createTask(taskData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
};

exports.createTask = createTask;

var updateTask = function updateTask(taskId, updatedTaskData) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(updatedTaskData)
  });
};

exports.updateTask = updateTask;

var deleteTask = function deleteTask(taskId) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'DELETE'
  });
};

exports.deleteTask = deleteTask;