const a = 10;
const b = 40; 
const c = 100;

// Use temporary variables so we can swap values
let first = a;
let second = b;
let third = c;

// Compare first and second, swap if out of order
if (first > second)
{
    const temp = first;
    first = second;
    second = temp;
}

// Compare second and third, swap if out of order
if (second > third)
{
    const temp = second;
    second = third;
    third = temp;
}

// Compare first and second again to ensure correct order
if (first > second) 
{
    const temp = first;
    first = second;
    second = temp;
}

// Print the sorted numbers and the highest number (largest value)
console.log("Sorted numbers (smallest to largest):", first, second, third);
console.log("The largest number:", third);
console.log("The middle number:", second);
console.log("The smallest number:", first);