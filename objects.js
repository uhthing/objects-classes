class User {
  constructor(email, name, password) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(this.email, 'just logged in...');
    return this;
  }
  logout() {
    console.log(this.email, '..logged OUT.');
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, 'score is now', this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter(u => {
      return u.email != user.email;
    });
  }
}

var userOne = new User('ryu@mail.com', 'ryu', 'asdf');
var userTwo = new User('me@mail.com', 'mewi', 'lkjh');
var admin = new Admin('shaun@mail.com', 'shaun');


var users = [userOne, userTwo, admin];

admin.deleteUser(userOne);

console.log(users);


// The 'new' keyword
// - creaties a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the cunstructor method

// calculateAge(1965);

// // Hoisting
// function calculateAge(year) {
//   console.log(2016 - year);
// }

// retirement

// var retirement = function (year) {
//   console.log(65 - (2016 - year));
// }