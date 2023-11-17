function solution(A, K) {
    // Iterate K times
    for (let i = 0; i < K; i++) {
        // Get the index of the last element
        let lastIndex = A.length - 1;
        
        // Get the value of the last element
        let lastNumber = A[lastIndex];
        
        // Move the last element to the front
        A.unshift(lastNumber);
        
        // Remove the last element from its original position
        A.pop();
    }
    
    // Return the modified array
    return A;
}
const A1 = [3, 8, 9, 7, 6];
const K1 = 2;
console.log(solution(A1, K1));
