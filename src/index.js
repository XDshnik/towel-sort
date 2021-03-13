module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)) {
    return []
};

const result = [];
matrix.forEach((arr, i) => {
    if (i % 2 === 0) {
        result.push(...arr);
    } else {
        result.push(...arr.reverse());
    }
})
return result;
}

