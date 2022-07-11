// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("removeAndShuffle", () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"];
  const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquama  rine", "saffron"];
  it("a function that takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    const actualShuffle = removeAndShuffle(colors1);
    expect(actualShuffle.sort()).toEqual(colors1.sort());
    it("a function that takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
      const actualShuffle = removeAndShuffle(colors2);
      expect(actualShuffle.sort()).toEqual(colors2.sort());
    })
  })
})

  // b) Create the function that makes the test pass.

// pseudo code:
// Create a function (removeAndShuffle) that takes in an array as a param. 
// Use .shift to remove the first item form the array
// Write another variable to store the variable length
// Write another variable to shuffle the data. Store the randomised position in 'i'
// Store the shuffled data and return array

  
  const removeAndShuffle = (array) => {
    array.shift()
    let = arrayLength = array.length, t, i;
    while (arrayLength) {
      i = Math.floor(Math.random() * arrayLength--);
      t = array[arrayLength];
      array[arrayLength] = array[i];
      array[i] = t;
    }
    return array;
  }



  // --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

  // a) Create a test with expect statements for each of the variables provided.
  const nums1 = [3, 56, 90, -8, 0, 23, 6]
  const nums2 = [109, 5, 9, 67, 8, 24]
    
  describe("minAndMaxNums", () => {
    it("a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
      expect(minAndMaxNums(nums1)).toEqual([-8, 90])
      expect(minAndMaxNums(nums2)).toEqual([5, 109])
    })
  })

  // b) Create the function that makes the test pass.

// pseudo code:
// Write a statement and give it 'array' as a param.
// Return the minimum and maximum values by using math.min and math.max
// The Spread operator will return just the 2 select values thus achieveing the ends. 

  let minAndMaxNums = (array) => {
    return [Math.min(...array), Math.max(...array)]
  }

  // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.


  // a) Create a test with an expect statement using the variables provided.

  describe("noDuplicates", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 =  [7, 8, 2, 3, 1, 5, 4]
    it("a function that takes in two arrays as arguments and returns one array with no duplicate values.", () => {
      const actualNoDuplicates = noDuplicates(testArray1, testArray2)
      expect(actualNoDuplicates).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
  })

  // b) Create the function that makes the test pass.

  // pseudo code:
// Write a function (noDuplicates) that takes in both arrays as params. 
// store new array in a let variable (new array) and set it to equal the 2 arrays concatenated. 
// return new array without variables using the spread operator and the new Set keyword. 

  const noDuplicates = (array1, array2) => {
    let newArray = array1.concat(array2)
    return newArray = [...new Set(newArray)]
  }

console.log(noDuplicates(testArray1, testArray2))
  
// I couldn't get the test on this one to pass. 