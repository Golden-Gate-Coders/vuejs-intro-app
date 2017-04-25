document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#home',
    data: {
      reviews: [
        "Vue.js is the best!",
        "I love Vue.js!",
        "Vue.js is waaaaay better than React."
      ]
    }
  });
});