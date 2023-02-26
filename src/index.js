
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  matrix.map((el, i) => {
    if (i % 2 !== 0) {
      el.reverse()
    }
  })
  return matrix.flat()
}
