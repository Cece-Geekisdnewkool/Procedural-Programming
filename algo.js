function scalerMatrix(arr1, arr2) {
  let dotProduct = 0;

  for (i = 0; i < arr1.length; i++) {
    for (i = 0; i < arr2.length; i++) {
      dotProduct += arr1[i] * arr2[i];
    }
  }
  if (dotProduct === 0) {
    return (
      "the two arrays are orthagonal-True, and the dot product is : " +
      dotProduct
    );
  } else {
    return (
      "the two arrays are orthagonal-False, and the dot product is : " +
      dotProduct
    );
  }
}

console.log(scalerMatrix([5, -3], [9, 5]));
console.log(scalerMatrix([3, 4, 0], [4, -3, 12]));
