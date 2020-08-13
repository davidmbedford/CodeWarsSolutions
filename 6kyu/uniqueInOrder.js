// Unique in order

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = iterable => {
  if (iterable.length === 0) {
    return []
  } else {
    let arr1 = iterable
    if (typeof arr1 == 'string') {arr1 = arr1.split('')} 
    let arr2 = [arr1[0]]
    
    for (i=1; i < arr1.length; i++) {
      if (arr1[i] !== arr1[i-1]) {arr2.push(arr1[i])}
    }
    
    return arr2
  }
}