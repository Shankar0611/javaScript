// Question 1
// Find the missing numbers from given array
// let array = [1,2,3,5]
// var count = 10
// output should be like this arr = [4,6,7,8,9,10]
// Ans
var array = [1, 2, 3, 5]
var count = 10
var AnsArray = []
for (let i = 1; i <= count; i++) {
    // !array.includes(i) ? AnsArray.push(i) : ""
    if (!array.includes(i)) {
        AnsArray.push(i);
    }
}
// console.log("AnsArray", AnsArray);


// Question 2
// Replace underscores with spaces and capitalize forst letter
// var str = this_is_javascript_learning_repo
// Ans
var str = "this_is_javascript_learning_repo";
var strs = str.split("_")
for (let i = 0; i < strs.length; i++) {
    strs[i] = strs[i].charAt(0).toUpperCase() + strs[i].slice(1)
}
// console.log("output", strs.join(" "));


// Question 3
// Replace spaces with underscores
// Ans
var str = "this_is_javascript_learning_repo"
var sol = str.replaceAll("_", " ")
// console.log("sol", sol);


// Question 4
// Check the occurences how many times present in an array
// var arr = [5,5,5,1,1,1,2,2,7,9,9,9,9,9,6]
// Ans
var arr = [5, 5, 5, 1, 1, 1, 2, 2, 7, 9, 9, 9, 9, 9, 6]
var ansObj = {}
for (const i of arr) {
    ansObj[i] = ansObj[i] ? ansObj[i] + 1 : 1
}
// console.log("ansObj", ansObj);


// Question 5
// Sort the age to ascending order use the below array of objects
const arrObj = [
    {
        name: "Akash",
        age: 40,
        place: "Chennai"
    },
    {
        name: "Thiru",
        age: 38,
        place: "Chennai"
    },
    {
        name: "Bala",
        age: 18,
        place: "Chennai"
    },
    {
        name: "Venkat",
        age: 42,
        place: "Chennai"
    },
    {
        name: "Chinna",
        age: 16,
        place: "Chennai"
    }
]
// Ans
const Ans = arrObj.map((obj) => {
    return obj.age
}).sort((a, b) => {
    return a - b
})
// console.log("Ans", Ans);


// Question 6
// Check the given string is palindrome 
// What is palindrome ?
// civic, madam, radar, and deified. 
// Ans
var palindromeStr = "test"
var reverse = palindromeStr.split('').reverse().join('')
var solution = palindromeStr == reverse ? true : false
// console.log("solution",solution);