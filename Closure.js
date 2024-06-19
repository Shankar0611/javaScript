// Understanding what is Closure

// what is Closure ?
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function

// Examples
function outer() {
    let counter = 0
    function inner() {
        counter++
        console.log("counter", counter);
    }
    inner()
}

outer() 
outer() 


function outer(){
    let counter = 0
    function inner() {
        counter++
        console.log("counter", counter);
    }
    return inner
}

const fn = outer()
fn()
fn()
fn()





