/*
Checks the inputted value (id is "gradeEntry") and changes the inner HTML of the validation message (id is "validationMessage")
accordingly. Probably too many else ifs.
*/
function checkGrade(grade){
    grade = parseInt(document.getElementById("gradeEntry").value);
    document.getElementById("gradeEntry").value = "";
    if(grade >= 90 && grade <= 100){
        document.getElementById("validationMessage").innerHTML = "Your grade is " + grade + ". You got an A, great job!";
    } else if (grade < 90 && grade >= 80) {
        document.getElementById("validationMessage").innerHTML = "Your grade is " + grade + ". You got a B, good job.";
    } else if (grade < 70 && grade >= 60) {
        document.getElementById("validationMessage").innerHTML = "Your grade is " + grade + ". You got a C, try a bit harder.";
    } else if (grade < 60 && grade >= 50) {
        document.getElementById("validationMessage").innerHTML = "Your grade is " + grade + ". You got a D. You passed, but you could do better.";
    } else if (grade < 50 && grade >= 0) {
        document.getElementById("validationMessage").innerHTML = "Your grade is " + grade + ". You got an F. You failed, try again.";
    } else {
        document.getElementById("validationMessage").innerHTML = "Entered a number above 100, a negative number, or left field blank. Please enter another number.";
    } 
}

// when "checkGradeBtn" is clicked, call the checkGrade function.
document.getElementById("checkGradeBtn").addEventListener("click", checkGrade);