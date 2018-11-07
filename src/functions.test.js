/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */

// ...

let max = (num1, num2) => {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

// ...

let maxOfThree = (num1, num2, num3) => {
  // solution using filter, Math.max, and ternary expression
  let arr = [num1, num2, num3]
  let onlyNumbers = arr.filter(num => typeof num === 'number')

  return onlyNumbers.length === 0 ? NaN : Math.max(...onlyNumbers)

  // solution using if
  // if (num1 > num2 && num1 > num3) {
  //   return num1
  // } else if (num2 > num1 && num2 > num3) {
  //   return num2
  // } else {
  //   return num3
  // }
}

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

// ...

let sum = (num1, num2) => {
  return num1 + num2
}

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */

// ...

let sumOfArray = array => {
  return array.reduce(function(acc, curVal) {
    return acc + curVal
  }, 0)
}

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

// ...

let isVowel = character => {
  // solution using regular expression
  return /[aeiou]/i.test(character)

  // solution using switch
  // switch (character) {
  //   case 'a':
  //     return true
  //     break
  //   case 'A':
  //     return true
  //     break
  //   case 'E':
  //     return true
  //     break
  //   case 'e':
  //     return true
  //     break
  //   case 'I':
  //     return true
  //     break
  //   case 'i':
  //     return true
  //     break
  //   case 'O':
  //     return true
  //     break
  //   case 'o':
  //     return true
  //     break
  //   case 'U':
  //     return true
  //     break
  //   case 'u':
  //     return true
  //     break
  //   default:
  //     return false
  // }

  //   solution using if
  //   if (character === 'a') {
  //     return true
  //   } else if (character === 'e') {
  //     return true
  //   } else if (character === 'i') {
  //     return true
  //   } else if (character === 'o') {
  //     return true
  //   } else if (character === 'u') {
  //     return true
  //   } else if (character === 'A') {
  //     return true
  //   } else if (character === 'E') {
  //     return true
  //   } else if (character === 'I') {
  //     return true
  //   } else if (character === 'O') {
  //     return true
  //   } else if (character === 'U') {
  //     return true
  //   } else {
  //     return false
  //   }
}

/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */

// ...

// solution using regular expression
let rovarspraket = input => {
  let output = input
    .toString()
    .split('')
    .map(letter => {
      if (/[^aeiou\d]/i.test(letter)) {
        return letter + 'o' + letter
      } else {
        return letter
      }
    })
    .join('')
  console.log(output)
  return output

  // // solution using toString, split, map, if, join
  // // break up input into individual letters
  // let output = input
  //   .toString()
  //   .split('')
  //   // go through each letter
  //   // if it's a vowel, just return it
  //   // if it's a consonant, then return it plus an o plus the consonant
  //   .map(letter => {
  //     if (
  //       letter === 'A' ||
  //       letter === 'a' ||
  //       letter === 'E' ||
  //       letter === 'e' ||
  //       letter === 'I' ||
  //       letter === 'i' ||
  //       letter === 'O' ||
  //       letter === 'o' ||
  //       letter === 'U' ||
  //       letter === 'u'
  //     ) {
  //       return letter
  //     } else if (letter === '0') {
  //       return letter
  //     } else {
  //       return letter + 'o' + letter
  //     }
  //   })
  //   // join the split up letters into one string
  //   .join('')
  // // return the answer
  // return output
}

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

// ...

let reverse = str => {
  return str
    .split('')
    .reverse()
    .join('')
}

/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

// ...

let findLongestWord = str => {
  let longestWord = ''
  // break up str into array of different words
  let arr = str.split(' ')
  // measure length of each element
  arr.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  })
  // return the element with longest length
  return longestWord
}

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', t => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree()', t => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('sum()', t => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', t => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', t => {
  t.is(isVowel(0), false)
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('t'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', t => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
  t.is(rovarspraket(0), '0')
})

test('reverse()', t => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', t => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

/* eslint-enable */
