// 1. because the for loop executes before the setTimeout has finished,
// the console.log(i) will always be 0 (the loop is done running by then).

//
function countDown() {
    for (var i = 3; i >= 0; i--) {
        setTimeout(function() {
            console.log(i || "Lift-off!");
        }, (3 - i) * 1000);
    }
}

// Var has a global/function scope, it ignores that it is within the block and updates
// the value for i to 0.
// let has a block scope.

// Solution with let:
function countDown() {
    for (let i = 3; i >= 0; i--) {
        setTimeout(function() {
            console.log(i || "Lift-off!");
        }, (3 - i) * 1000);
    }
}

// solution with IIFE to capture the state of i:
function countDown() {
    for (var i = 3; i >= 0; i--) {
      (function(i){
        setTimeout(function() {
          console.log(i || "Lift-off!");
        }, (3 - i) * 1000);
      })(i);
    }
}

// 2. solution without loops, using recursion (calling itself within the function):
function countDownNoLoop(time) {
  if (time > 0) {
    setTimeout(function(){
       console.log(time)
       time--
       countDownNoLoop(time)
    }, 1000);
   } else {
    setTimeout(function(){
      console.log("Lift-Off!")
    }, 1000);
   }
}


countDownNoLoop(3);
// countDown();
