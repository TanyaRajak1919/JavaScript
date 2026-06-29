//Q for a given array with marks of students->[85,97,23,19.97] find the average marks of the entire class
let marks = [85,97,23,19,97]; 
let sum = 0;
for(let val of marks){
     sum += val;
}
let avg = sum / marks.length;
     console.log(`avg marks of the class= ${avg}`);


