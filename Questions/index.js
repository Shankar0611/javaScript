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


