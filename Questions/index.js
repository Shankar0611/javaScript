// Question 1
// Find the missing numbers from given array
// let array = [1,2,3,5]
// var count = 10
// output should be like this arr = [4,6,7,8,9,10]
// Ans
// var array = [1, 2, 3, 5]
// var count = 10
// var AnsArray = []
// for (let i = 1; i <= count; i++) {
//     // !array.includes(i) ? AnsArray.push(i) : ""
//     if (!array.includes(i)) {
//         AnsArray.push(i);
//     }
// }
// console.log("AnsArray", AnsArray);


// Question 2
// Replace underscores with spaces and capitalize forst letter
// var str = this_is_javascript_learning_repo
// Ans
// var str = "this_is_javascript_learning_repo";
// var strs = str.split("_")
// for (let i = 0; i < strs.length; i++) {
//     strs[i] = strs[i].charAt(0).toUpperCase() + strs[i].slice(1)
// }
// console.log("output", strs.join(" "));


// Question 3
// Replace spaces with underscores
// Ans
// var str = "this_is_javascript_learning_repo"
// var sol = str.replaceAll("_", " ")
// console.log("sol", sol);


// Question 4
// Check the occurences how many times present in an array
// var arr = [5,5,5,1,1,1,2,2,7,9,9,9,9,9,6]
// Ans
// var arr = [5, 5, 5, 1, 1, 1, 2, 2, 7, 9, 9, 9, 9, 9, 6]
// var ansObj = {}
// for (const i of arr) {
//     ansObj[i] = ansObj[i] ? ansObj[i] + 1 : 1
// }
// console.log("ansObj", ansObj);


// Question 5
// Sort the age to ascending order use the below array of objects
// const arrObj = [
//     {
//         name: "Akash",
//         age: 40,
//         place: "Chennai"
//     },
//     {
//         name: "Thiru",
//         age: 38,
//         place: "Chennai"
//     },
//     {
//         name: "Bala",
//         age: 18,
//         place: "Chennai"
//     },
//     {
//         name: "Venkat",
//         age: 42,
//         place: "Chennai"
//     },
//     {
//         name: "Chinna",
//         age: 16,
//         place: "Chennai"
//     }
// ]
// // Ans
// const Ans = arrObj.map((obj) => {
//     return obj.age
// }).sort((a, b) => {
//     return a - b
// })
// console.log("Ans", Ans);


// Question 6
// Check the given string is palindrome 
// What is palindrome ?
// civic, madam, radar, and deified. 
// Ans
// var palindromeStr = "test"
// var reverse = palindromeStr.split('').reverse().join('')
// var solution = palindromeStr == reverse ? true : false
// console.log("solution",solution);

// Question 7
// Validate user input as they type
// Ans
// const userInputValue = document.getElementById("userInput");
// let finalVal;
// userInputValue.addEventListener("input",updateVal);
// function updateVal(e){
//     finalVal = e.target.value
//     if(finalVal == undefined){
//         console.log("Input field is mandatory");
//     }
//     else if(finalVal.length < 2){
//         console.log("Min 2 letters mandatory");
//     }
// }


// Question 8
// Add a new property and value to existing array of objects
// Ans
// let sample = [
//     {
//         "prodHiddenValue": "Amlodipine",
//         "prodDisplayValue": "Amlodipine",
//         "searchBase": "ProductKeyActiveIngredient"
//     },
//     {
//         "prodHiddenValue": "7d820c87-79a1-4d0f-bb0d-a533010cdd33,46577f09-0e2c-41fd-b0fa-a533010cdd46",
//         "prodDisplayValue": "Amlodipine(Amlo)",
//         "searchBase": "ProductKey"
//     },
//     {
//         "prodHiddenValue": "43cc09cc-c097-4b08-8657-a533010cf937,24b8dadf-a405-4a8d-a775-a533010cf947",
//         "prodDisplayValue": "Amlodipine(Amlodipine GH)",
//         "searchBase": "ProductKey"
//     },
//     {
//         "prodHiddenValue": "d6d1a41e-4c2a-4cbf-bc87-a533010cddab,d62dfc4c-fd00-4423-8ced-a533010cddbb",
//         "prodDisplayValue": "Amlodipine(Amlodipine Sandoz)",
//         "searchBase": "ProductKey"
//     },
//     {
//         "prodHiddenValue": "Amlodipine + Valsartan",
//         "prodDisplayValue": "Amlodipine + Valsartan",
//         "searchBase": "ProductKeyActiveIngredient"
//     },
//     {
//         "prodHiddenValue": "570ac867-ef95-4cde-b4bf-a533010da8c5,7933e1f2-39ad-46a6-9fbf-a8be00fdc45a,bbb9df2b-9759-41bf-809e-a8be00fdc43e,d7c4f7a2-0b94-4f02-8f99-a8be00fdc497",
//         "prodDisplayValue": "Amlodipine + Valsartan(Amlodipine/Valsartan Novartis)",
//         "searchBase": "ProductKey"
//     }
// ]
// let newArr=sample.map((item,index)=>{
//  if(index == 2) {
//     sample[2]["newProperty"] = "Sample Data"
//     sample.push(item)
//  }
// })
//  console.log("newSamp",sample);

// Question 9
// Memoization
// Ans
// function memoizedFunction (a){
//     if(!(a in cache)){
//         console.log("Calculating");
//         var result = a * 2;
//         cache[a] = result;
//     }
//     return cache[a];
// }

//  var cache = {};
// console.log(memoizedFunction(2));
// console.log(memoizedFunction(5));
// console.log(memoizedFunction(6));
// console.log(memoizedFunction(7));
// console.log(memoizedFunction(7));

// Question 10
// Spread operator
// Ans
// 1. Splits all the data in a array 
// 2. Make a copy of array or objects or any data
// 3. Concats only arrays
// let array = [1,2,3,4,5,6,7,8,9];
// let splitArray = Math.max(...array);
// console.log(splitArray);
// let array2 = ["A","B","C","D"];
// let concatArray = [...array, ...array2];
// console.log(concatArray);

// Causes infinite loop
// for (;;) {
//     console.log("loop");    
// }

// Question 11
// var x = 42;
// delete x;
// console.log(x);

// Question 12
// setTimeout(()=>console.log("A"),1000);
// setTimeout(()=>console.log("B"),500);
// console.log("C");

// Question 12
// console.log(a);
// var a = 5;

// Question 13
// console.log(1 + "1");


// Question 14
// Check palindrom
// function checkPalindrome(text){
//     return text.split("").reverse().join("") === text ? "Given text is palindrome" : "Given text is not palindrom"
// }
// console.log(checkPalindrome("radar"));

// Question 15
// Find the largest number in an array.
// let arr = [10,2,4,7,9,12,45,67,89,56,46,3,99,134,23,999]
// let largestNum = arr.sort((a,b)=> a-b).pop();
// console.log("largestNum",largestNum);

// Question 16
//Remove duplicates from an array.
    // let arr = [1,1,2,2,4,4,5,5,33,6,6,7,7,7,5];
    // let Ans= []
    // for(let i = 0; i < arr.length; i++){
    //     if(!Ans.includes(arr[i])){
    //         Ans.push(arr[i])
    //     }
    // }
    // console.log("Ans",Ans);

// Question 17
//Count the number of vowels in a string.
// var vowels = ["a","e","i","o","u","y"]
// var text = "something";
// var splitText = text.split("");
// var ans = 0;
// for (let index = 0; index < splitText.length; index++) {
//     if(vowels.includes(splitText[index])){
//        ans = ans+1
//     }
// }
// console.log("ans",ans);


// Question 18
// Flatten a nested array (e.g., [1, [2, [3, 4]]] → [1, 2, 3, 4]).
// var nestedArray =[1, [2, [3, 4]]]
// var flat = nestedArray.flat(Infinity)
// console.log("flat",flat);

// Question 19
// Write a function for deep cloning an object.
// function deepClone(data){
//     return JSON.parse(JSON.stringify(data));
// }
// console.log(deepClone(data));


// Question 20
// Implement a debounce function.
// document.getElementById("userInput").addEventListener("input", handleChange);
// var timeout;
// function handleChange(){
//     var debounceTimer = 1000;
//     var textBox = document.getElementById("userInput").value;
//     clearTimeout(timeout);
//     if(textBox != ""){
//         timeout = setTimeout(()=>{
//              console.log("data",textBox);
//          },debounceTimer)
//     }   
// }

// Question 21
// Reverse a string without using .reverse()
// let text = "sample"
// let splitText = text.split("")
// let ans = [];
// for(let i = 0; i < splitText.length; i++){
//     ans.unshift(splitText[i]);
// }
// console.log("ans",ans.join(""))

// Question 22
// Find the largest and smallest numbers in an array.
// let array = [3,5,4,67,87,12,34,1,99]
// let sortedArray = array.sort((a,b)=> a-b)
// console.log("Lowest num is",sortedArray[0]);
// console.log("Highest num is",sortedArray[sortedArray.length - 1]);

// Question 23
// Remove duplicate values from an array.
// let array = [1,1,2,3,4,5,4,6,7,6,8,8,9,0,0,34,56]
// let ans = [];
// for(let i = 0; i < array.length; i++){
//     if(!ans.includes(array[i])){
//         ans.push(array[i])
//     }
// }
// console.log("ans",ans);

// Question 24
// Count how many times each character appears in a string.
// let text = "Sometimes";
// let splitText = text.toLowerCase().split("")
// let ans = [];
// for(let i=0; i<splitText.length; i++){
//    if(!ans.find((item)=> item.char == splitText[i])){
//     let obj = {
//         char: splitText[i],
//         count: 1
//     }
//     ans.push(obj)
//    }
//    else{
//     var found = ans.find((item)=> item.char == splitText[i])
//     found.count++
//    }
// }
// console.log("ans",ans);

// Question 25
// Flatten a deeply nested array.
// const nestedArray = [1, [2, [3, [4, [5]]]], 6];
// console.log((nestedArray.flat(Infinity)));

// Question 26
// Write a function to debounce another function.
// var debounce;
// function sample(){
//     let debounceInterval = 1000;
//     clearTimeout(debounce)

//     debounce =setTimeout(()=>{
//         console.log("Entered");
//     },debounceInterval)
// }
// sample();

// Question 27
// Implement a deep clone of an object.
// using JSON.parse(JSON.stringify()) can deep clone but in this functions cant clone for that need to use lodash like library

// Question 28
// Find the intersection of two arrays.
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// var ans=[]
// for(let i=0; i<array1.length;i++){
//     if(array2.includes(array1[i])){
//         ans.push(array1[i])
//     }
// }
// console.log("ans",ans)

// Question 29
// Write a function that returns the factorial of a number.
// function findFactorial(num){
//     let ans = 1
//         for(let i=1; i<=num; i++){
//             ans *= i 
//         }
//     return ans
// }
// console.log(findFactorial(4));

// Question 30
// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
// let array = [1,2,3,4,5,6,7,8,9,10];
// let ans = [];
// for(let i = 1; i < array.length; i++){
//     if((array[i] % 2) == 0){
//         ans.push(array[i])
//     }
// }
// console.log("ans",ans);








