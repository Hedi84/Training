
var a = 2;
{
    let a = 3;
    console.log(a);
}
console.log(a);

// will print the global a, so the answer is '2'


let a = 2;
{
    var a = 3;
    console.log(a);
}
console.log(a);

// will give an error since a has already been declared (var is global)
