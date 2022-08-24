
function getNeighbours(arr, row, col) {
    let neighbourArr = [];
    if(typeof arr[row-1] !== 'undefined' && typeof arr[row-1][col] !== 'undefined') {
        neighbourArr.push(arr[row-1][col]);
    }
    if(typeof arr[row-1] !== 'undefined' && typeof arr[row-1][col-1] !== 'undefined') {
        neighbourArr.push(arr[row-1][col-1]);
    }
    if(typeof arr[row] !== 'undefined' && typeof arr[row][col-1] !== 'undefined') {
        neighbourArr.push(arr[row][col-1]);
    }
    if(typeof arr[row+1] !== 'undefined' && typeof arr[row+1][col-1] !== 'undefined') {
        neighbourArr.push(arr[row+1][col-1]);
    }
    if(typeof arr[row+1] !== 'undefined' && typeof arr[row+1][col] !== 'undefined') {
        neighbourArr.push(arr[row+1][col]);
    }
    if(typeof arr[row+1] !== 'undefined' && typeof arr[row+1][col+1] !== 'undefined') {
        neighbourArr.push(arr[row+1][col+1]);
    }
    if(typeof arr[row] !== 'undefined' && typeof arr[row][col+1] !== 'undefined') {
        neighbourArr.push(arr[row][col+1]);
    }
    if(typeof arr[row-1] !== 'undefined' && typeof arr[row-1][col+1] !== 'undefined') {
        neighbourArr.push(arr[row-1][col+1]);
    }
    return neighbourArr;
}

function countTrue(arr) {
    var ctTruth = 0
    for(let i = 0; i <arr.length; i++) {
        if(arr[i] === true) {
            ctTruth+=1;
        }
    }
    return ctTruth;
}

function stepBoard(arr) {
    var newArr = [];
    if (arr.length === 0) {
		return 0;
	} 
    else if (arr[0].length === 0) {
		return 0;
	}
    let numRows = arr.length;
    let numCols = arr[0].length;
    const tempArr = JSON.parse(JSON.stringify(arr));
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            newArr = getNeighbours(tempArr, i, j);
            var ct = countTrue(newArr);
            if(tempArr[i][j] === true) {
                if(ct === 2 || ct === 3) {
                    arr[i][j] = true; 
                }
                else {
                    arr[i][j] = false;
                }
            }
            else if (tempArr[i][j] === false) {
                if(ct === 3) {
                    arr[i][j] = true;
                }
                else {
                    arr[i][j] = false;
                }
            }
        }
    }
    return arr;
}