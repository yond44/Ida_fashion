// let a = [2,3,4]
// let b = 3


// function sum(a,b) {
//     let sum=[]

//     for(let i = 0; i < a.length; i++){
//         sum += b + a[i]
//     }
//     return sum
// }

// console.log(sum(a,b))


// let s = 7
// let t = 11
// let a = 5
// let b = 15
// let apples = [-2,2,1]
// let oranges = [5,-6]


// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   let apple = 0;
//   let orange = 0;

//   for (let i = 0; i < apples.length; i++) {
//     if (a + apples[i] >= s && a + apples[i] <= t) {
//       apple++;
//     }
//   }

//   for (let i = 0; i < oranges.length; i++) {
//     if (b + oranges[i] >= s && b + oranges[i] <= t) {
//       orange++;
//     }
//   }
//   console.log(apple, orange)
// }
// countApplesAndOranges(s, t, a, b, apples, oranges)

// let x1 = 0, v1 = 3, x2= 4, v2 = 2

// function kangaroo(x1, v1, x2, v2) {
//     let a = 0

//   for (let i = x1; i <= 1000000; i+= v1) {
//       for (let j = x2; j <= 1000000; j += v2) {
//         if (i == j) {
//             a = "Yes";
//             break;
//         } else {
//             a ="NO"
//         }
//       }
//   }
//   return a
// }

// console.log(kangaroo(x1, v1, x2, v2));


// var array1 = ["cat", "sum", "fun", "run"],
//   array2 = ["bat", "cat", "dog", "sun", "hut", "gut"];

// function getMatch(a, b) {
//   var matches = [];

//   for (var i = 0; i < a.length; i++) {
//     console.log(a)
//     for (var e = 0; e < b.length; e++) {
//       if (a[i] === b[e]) matches.push(a[i]);
//     }
//   }
//   return matches;
// }


// console.log(getMatch(array1,array2))


let grades = [39,40,57,79]


// function gradingStudents(grades) {
//   let a = []
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] + 2 >= 40 || grades[i] + 1 >= 40) {
//       if ((grades[i] + 2) % 5 == 0 || (grades[i] + 1) % 5 == 0) {
//         a.push (5-(grades[i]%5)+grades[i]);
//       } else {
//         a.push(grades[i]);
//       }
//     }
//   }

//   return a;
// }

// console.log(gradingStudents(grades))


// let scores = [10,5,20,20,4,5,2,25,1]


// function breakingRecords(scores) {
//   let max = scores[0];
//   let min = scores[0];
//   let broke = 0;
//   let not = 0;
//   for (let num of scores) {
//     if (num > max) {
//       max = num;
//       broke++;
//     } else if (num < min) {
//       min = num;
//       not++;
//     }
//   }
//   console.log([broke, not]);
// };


// breakingRecords(scores)


// let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

// function breakingRecords(scores) {
//   let max = scores[0];
//   let min = scores[0];
//   let broke = 0;
//   let not = 0;
//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > max) {
//       max = scores[i];
//       broke++;
//     } else if (scores[i] < min) {
//       min = scores[i];
//       not++;
//     }
//   }
//   console.log([broke, not]);
// }

// breakingRecords(scores);

let s = [1,2,1,3,2]
let d = 3, m = 2
function birthday(s, d, m) {
  // Write your code here
  //store number of availabe methods
  let numMethods = 0;
  //array for segment
  let segArr;
  //loop over the array elements
  for (let i = 0; i < s.length; i++) {
    //intialize the sum
    let segSum = 0;
    //slice the arr
    segArr = s.slice(i, i + m);
    //find sum of the sliced Arr
    segSum = sumArray(segArr);
    //check the sum
    if (segSum == d) numMethods++;
  }
  return numMethods;
}

//sum array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(birthday(s,d,m))