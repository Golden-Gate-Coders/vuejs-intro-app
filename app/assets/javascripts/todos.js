document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#todolist',
    data: {
      tasks: [
        { text: "Take out the garbage", completed: false },
        { text: "Make the bed", completed: false },
        { text: "Mow the lawn", completed: true }
      ],
      newTaskText: ''
    },
    methods: {
      addTask: function() {

        var newTask = {
          text: this.newTaskText,
          completed: false
        }

        if (this.newTaskText != '') {          
          this.tasks.push(newTask);
          this.newTaskText = '';
        }
      },
      removeTask: function(task) {
        var index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
      },
      toggleTask: function(task) {
        task.completed = !task.completed
      },
      numberIncomplete: function() {
        var totalTasks = this.tasks.length;
        var completedTasks = 0;

        for (var i = 0; i < this.tasks.length; i++) {
          if (this.tasks[i].completed == true) {
            completedTasks += 1;
          }
        }
        
        var incompleteTasks = totalTasks - completedTasks;
        return incompleteTasks;
      },
      clearCompleted: function() {
        var incompleteTasks = [];
        for (var i = 0; i < this.tasks.length; i++) {
          if (this.tasks[i].completed == false) {
            incompleteTasks.push(this.tasks[i]);
          }
        }
        console.log(incompleteTasks);
        this.tasks = incompleteTasks;

      }
    }
  });
});