'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    return arr.reduce(function(prev,curr){
  return prev + curr;
},base);
},

// sum : ()nums.reduce(function(prev,curr){
//   return prev +curr
// }
// }),

  // sum: (arr, base) => {
  //   let sum = base;
  //   for (var i = 0; i < arr.length; i++){
  //     sum += arr[i];
  //   }
  //   return sum;
  // },
// sum: function(arr, base){
//   let sum = base;
//     for (var i = 0; i < arr.length; i++){
//       sum += arr[i];
//     }
//     return sum;
// }

// sum(arr, base){
//   let sum = base;
//     for (var i = 0; i < arr.length; i++){
//       sum += arr[i];
//     }
//     return sum;
// },


  someObjsContainProp: (arr, prop) => {

    return arr.some(function(person){
      if(person.hasOwnProperty(prop)){
        return true
      } else {
        return false
      }

    })


  },

  convertNameArrayToObject: (arr) => {

    return arr.map(function(person){
  let obj = {};
  obj.first = person[0]
  obj.last = person[1]
  return obj

})


  },


  objContainsProp: (arr, prop) => {

    return arr.every(function(person){
      if(person.hasOwnProperty(prop)){
        return true
      } else {
        return false
      }

    })

  },

  stringMatch: (arr, str) => {

    return arr.filter(function(thing){

      console.log(arr, str, thing)
    if (thing.includes(str)){
      return true
    }

    })

  
  },
};
