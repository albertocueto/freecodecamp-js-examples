function secretPassword() {
  var password = 'xh38sk';
  return {
    guessPassword: function(guess) {
      if (guess === password) {
        return true;
      } else {
        return false;
      }
    }
  }
}

var passwordGame = secretPassword();
console.log(passwordGame.guessPassword('heyisthisit?')); // false
console.log(passwordGame.guessPassword('xh38sk')); // true
