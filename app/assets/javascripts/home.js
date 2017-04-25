document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#home',
    data: {
      reviews: [
        {
          text: "Vue.js is the best!",
          rating: 5
        },
        {
          text: "I love Vue.js!",
          rating: 4
        },
        {
          text: "Vue sucks",
          rating: 4
        },
        {
          text: "Vue.js is waaaaay better than React.",
          rating: 5
        }
      ],
      newReviewText: '',
      newReviewRating: 0
    },
    methods: {
      addReview: function() {
        var newReview = {
          text: this.newReviewText,
          rating: this.newReviewRating
        }

        this.reviews.push(newReview);
        this.newReviewText = '';
        this.newReviewRating = 0;
      },
      isPositive: function(rating) {
        if (rating >= 3) {
          return true;
        } else {
          return false;
        }
      }
    }
  });
});