// You should implement your task here.
let generalArray;
module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }
    
    if (matrix.length === 2) {
        generalArray = matrix[0].concat(matrix[1].reverse());

    }
    if (matrix.length === 3) {
        generalArray = matrix[0].concat(matrix[1].reverse(), matrix[2]);

    }
    if (matrix.length === 4) {
        generalArray = matrix[0].concat(matrix[1].reverse(), matrix[2], matrix[3].reverse());

    }
    return generalArray;
};

