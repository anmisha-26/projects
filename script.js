console.log("Student result calculator");
let no_of_student = Number(prompt("Enter no_of_students"));
let Fail_student = 0;
let Pass_student = 0;

for (let student = 1; student <= no_of_students; student++){
    let name = prompt("Enter student name");
      let English = Number(prompt("English marks"));
      let Maths = Number(prompt("Enter Maths marks"));
      let Science = Number(prompt("Enter Science marks"));
      let Hindi = Number(prompt("Enter Hindi marks"));
      let Social = Number(prompt("Enter Social marks"));
      let total = English + Maths + Science + Hindi + Social;
      let avg = total / 5;
      let percentage = (total / 500) * 100;
      let result;
if (English >= 35 && Maths >= 35 && Science >= 35 && Hindi >= 35 &&  Social >= 35) {
    result = "Pass";
    Pass_student++;
} 
else {
     result = "Fail";
     Fail_student++;
}
     let grade;
if (result == "Fail") {
    grade = "F";
} else if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 80) {
    grade = "B";
} else if (percentage >= 70) {
    grade = "C";
} else if (percentage >= 60) {
    grade = "D";
} else {
    grade = "E";
}
console.log("Student name: " + name);
console.log("English: " + English);
console.log("Maths: " + Maths);
console.log("Science: " + Science);
console.log("Hindi: " + Hindi);
console.log("Social: " + Social);
console.log("Total marks: " + total);
console.log("Average: " + avg);
console.log("Percentage: " + percentage);
console.log("Grade: " + grade);
console.log("result:"+ result);
}
console.log("No. of students: " + no_of_students);
console.log("Pass student: " + Pass_student);
console.log("Fail student: " + Fail_student);