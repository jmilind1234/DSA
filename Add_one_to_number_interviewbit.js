module.exports = {
    //param A : array of integers
    //return a array of integers
    plusOne: function (A) {
        let arrLen = A.length;
        let carry = 0;
        let numToAdd = 1;
        let resultArr = [];
        for (let i = arrLen - 1; i >= 0; i--) {
            if (i < arrLen - 1) {
                numToAdd = 0;
            }
            let sum = A[i] + carry + numToAdd;
            if (sum > 9) {
                let numToPush = sum % 10;
                carry = Math.floor(sum / 10);
                resultArr.unshift(numToPush);
            } else if (sum === 0 && i !== 0) {
                carry = 0;
                resultArr.unshift(sum);
            } else if (sum <= 9) {
                carry = 0;
                resultArr.unshift(sum);
            }
        }
        if (carry > 0) {
            resultArr.unshift(carry);
        }
        const newArr = [...resultArr];
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] === 0) {
                resultArr.shift();
            }
            else{
                break;
            }
        }
        return resultArr;
    }
};
