module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    const arrLen = A.length;
    const preSumArr = new Array(arrLen);
    const postSumArr = new Array(arrLen);
    let preSum = A[0];
    preSumArr[0] = preSum;
    // creating presum array
    for (let i = 1; i < arrLen; i++) {
      preSum += A[i];
      preSumArr[i] = preSum;
    }
    let postSum = A[arrLen - 1];
    postSum[arrLen - 1] = postSum;
    //creating postSum array
    for (let i = arrLen - 2; i >= 0; i--) {
      postSum += A[i];
      postSumArr[i] = postSum;
    }
    let maximumSum = preSumArr[B - 1];
    if (maximumSum < postSumArr[A.length - B]) {
      maximumSum = postSumArr[A.length - B];
    }
    //picking from left
    for (let i = 1; i < B; i++) {
      let sum = preSumArr[i - 1];
      let leftIndex = arrLen - B + i;
      sum += postSumArr[leftIndex];
      if (sum > maximumSum) maximumSum = sum;
    }

    //picking from right
    let rightIndex = B - 2;
    for (let i = arrLen - 1; i >= arrLen - B; i--) {
      sum = postSum[i] + preSum[rightIndex];
      rightIndex--;
      if (sum > maximumSum) maximumSum = sum;
    }
    return maximumSum;
  },
};
