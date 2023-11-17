function solution(A, K) {
    // Iterate K times
    for (let i = 0; i < K; i++) {
        // Get the index of the last element
        let lastIndex = A.length - 1;
        
        // Get the value of the last element
        let lastNumber = A[lastIndex];
        
        // Duplicates last element and moves it to the front
        A.unshift(lastNumber);
        
        // Deletes last element in array. Also avoids duplicates of last element
        A.pop();
    }
    
    // Return the modified array
    return A;
}

//Example
const A1 = [3, 8, 9, 7, 6];
const K1 = 2;
//running node index.js in terminal will return [ 7, 6, 3, 8, 9 ]
console.log(solution(A1, K1));
