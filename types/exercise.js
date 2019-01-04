const a = {
  num: 1,
  valueOf: function() {
    return this.num += 1
  }
};

if (a == 2 && a == 3) {
    console.log('How on earth did you get here?');
}

// Basically, you are overwriting valueOf, which is used by default in Javascript when using ==
