document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#todolist',
    data: {
      tasks: [
        "Take out the garbage",
        "Make the bed",
        "Mow the lawn"
      ],
      newTask: ''
    },
    methods: {
      addTask: function() {
        if (this.newTask != '') {          
          this.tasks.push(this.newTask);
          this.newTask = '';
        }
      },
      removeTask: function(task) {
        var index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
      }
    }
  });
});