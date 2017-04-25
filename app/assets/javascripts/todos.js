document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#todolist',
    data: {
      task1: "Take out the garbage",
      task2: "Make the bed",
      task3: "Mow the lawn"
    }
  });
});