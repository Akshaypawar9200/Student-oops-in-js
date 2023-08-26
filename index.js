class Student {
    static allStudents = [];
    static id = 0;

    constructor(firstName, lastName, fullName, dob, age, semesterCgpa, finalCgpa, semGrade, finalGrade, yearEnroll, yearPass, totalGraduateYears, id) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.dob = dob;
        this.age = age;
        this.semesterCgpa = semesterCgpa;
        this.finalCgpa = finalCgpa;
        this.semGrade = semGrade;
        this.finalGrade = finalGrade;
        this.yearEnroll = yearEnroll;
        this.yearPass = yearPass;
        this.totalGraduateYears = totalGraduateYears;
    }

    static newStudent(firstName, lastName, dob, semesterCgpa, yearEnroll, yearPass) {
        if (typeof firstName !== "string" || typeof lastName !== "string" || typeof dob !== "string" || typeof yearEnroll !== "number" || typeof yearPass !== "number") {
            return null;
        } else {
            // Calculating fullName
            let fullName = firstName + " " + lastName;

            // Calculating age
            let dateOfBirth = new Date(dob);
            if (dateOfBirth == 'Invalid Date') {
                return null;
            }
            let currentDate = new Date();
            let age = currentDate.getFullYear() - dateOfBirth.getFullYear();

            // Calculating graduate years
            let totalGraduateYears = yearPass - yearEnroll;

            // Calculating semGrade
            let semGrade = [];
            for (let i = 0; i < semesterCgpa.length; i++) {
                if (semesterCgpa[i] <= 10) {
                    if (semesterCgpa[i] >= 8.5 && semesterCgpa[i] <= 10) {
                        semGrade.push("A");
                    } else if (semesterCgpa[i] >= 7.5 && semesterCgpa[i] < 8.5) {
                        semGrade.push("B");
                    } else if (semesterCgpa[i] >= 6.5 && semesterCgpa[i] < 7.5) {
                        semGrade.push("C");
                    } else if (semesterCgpa[i] >= 5.5 && semesterCgpa[i] < 6.5) {
                        semGrade.push("D");
                    } else if (semesterCgpa[i] >= 4.5 && semesterCgpa[i] < 5.5) {
                        semGrade.push("E");
                    } else {
                        semGrade.push("F");
                        break;
                    }
                } else {
                    console.log("Invalid cgpa");
                    break;
                }
            }

            // Calculating finalCgpa
            let sum = 0;
            for (let i = 0; i < semesterCgpa.length; i++) {
                sum += semesterCgpa[i];
            }
            let finalCgpa = sum / semesterCgpa.length;

            // Calculating finalGrade
            let finalGrade = [];
            if (finalCgpa >= 8.5 && finalCgpa <= 10) {
                finalGrade.push("A");
            } else if (finalCgpa >= 7.5 && finalCgpa < 8.5) {
                finalGrade.push("B");
            } else if (finalCgpa >= 6.5 && finalCgpa < 7.5) {
                finalGrade.push("C");
            } else if (finalCgpa >= 5.5 && finalCgpa < 6.5) {
                finalGrade.push("D");
            } else if (finalCgpa >= 4.5 && finalCgpa < 5.5) {
                finalGrade.push("E");
            } else {
                finalGrade.push("F");
            }
            let finalGrades = finalGrade.join();
            let newStudent = new Student(firstName, lastName, fullName, dob, age, semesterCgpa, finalCgpa, semGrade, finalGrades, yearEnroll, yearPass, totalGraduateYears, Student.id++);
            Student.allStudents.push(newStudent);
            return newStudent;
        }
    }

    static getAllStudents() {
        return Student.allStudents;
    }

    updateFirstName(newValue) {
        this.firstName = newValue;
        this.updateFullName();
    }

    updateLastName(newValue) {
        this.lastName = newValue;
        this.updateFullName();
    }

    updateFullName() {
        this.fullName = this.firstName + " " + this.lastName;
    }

    updateDob(newValue) {
        this.dob = newValue;
        let dateOfBirth = new Date(newValue);
        if (dateOfBirth == 'Invalid Date') {
            return null;
        }
        let currentDate = new Date();
        this.updateAge(currentDate.getFullYear() - dateOfBirth.getFullYear());
    }

    updateAge(newValue) {
        this.age = newValue;
    }

    updateSemesterCgpa(newValue) {
        this.semesterCgpa = newValue;
        this.updateSemGrade(newValue);
        this.updateFinalCgpa(newValue);
    }

    updateFinalCgpa(newValue) {
        let sum = 0;
        for (let i = 0; i < newValue.length; i++) {
            sum += newValue[i];
        }
        this.finalCgpa = sum / newValue.length;
        this.updateFinalGrade(this.finalCgpa);
    }

    updateFinalGrade(finalCgpa) {
        let finalGrade = [];
        if (finalCgpa >= 8.5 && finalCgpa <= 10) {
            finalGrade.push("A");
        } else if (finalCgpa >= 7.5 && finalCgpa < 8.5) {
            finalGrade.push("B");
        } else if (finalCgpa >= 6.5 && finalCgpa < 7.5) {
            finalGrade.push("C");
        } else if (finalCgpa >= 5.5 && finalCgpa < 6.5) {
            finalGrade.push("D");
        } else if (finalCgpa >= 4.5 && finalCgpa < 5.5) {
            finalGrade.push("E");
        } else {
            finalGrade.push("F");
        }
        let finalGrades = finalGrade.join();
        this.finalGrade = finalGrades;
    }

    updateSemGrade(newValue) {
        let semGrade = [];
        for (let i = 0; i < newValue.length; i++) {
            if (newValue[i] <= 10) {
                if (newValue[i] >= 8.5 && newValue[i] <= 10) {
                    semGrade.push("A");
                } else if (newValue[i] >= 7.5 && newValue[i] < 8.5) {
                    semGrade.push("B");
                } else if (newValue[i] >= 6.5 && newValue[i] < 7.5) {
                    semGrade.push("C");
                } else if (newValue[i] >= 5.5 && newValue[i] < 6.5) {
                    semGrade.push("D");
                } else if (newValue[i] >= 4.5 && newValue[i] < 5.5) {
                    semGrade.push("E");
                } else {
                    semGrade.push("F");
                    break;
                }
            } else {
                console.log("Invalid cgpa");
                break;
            }
        }
        this.semGrade = semGrade;
    }

    updateYearEnroll(newValue) {
        this.yearEnroll = newValue;
        this.updateTotalGraduateYears();
    }

    updateYearPass(newValue) {
        this.yearPass = newValue;
        this.updateTotalGraduateYears();
    }

    updateTotalGraduateYears() {
        this.totalGraduateYears = this.yearPass - this.yearEnroll;
    }

    static findStudent(id) {
        for (let i = 0; i < Student.allStudents.length; i++) {
            if (Student.allStudents[i].id == id) {
                return [Student.allStudents[i], i];
            } else {
                return [null];
            }
        }
        return [null, -1];
    }

    static updateStudent(parameter, newValue, id) {
        if (typeof parameter != 'string' || typeof id != "number") {
            return [null];
        } else {
            let [studentToBeUpdated, indexofStudent] = Student.findStudent(id);

            if (studentToBeUpdated == null) {
                return "Invalid id";
            }
            switch (parameter) {
                case 'firstName':
                    studentToBeUpdated.updateFirstName(newValue);
                    break;
                case 'lastName':
                    studentToBeUpdated.updateLastName(newValue);
                    break;
                case 'dob':
                    studentToBeUpdated.updateDob(newValue);
                    break;
                case "semesterCgpa":
                    studentToBeUpdated.updateSemesterCgpa(newValue);
                    break;
                case "yearEnroll":
                    studentToBeUpdated.updateYearEnroll(newValue);
                    break;
                case "yearPass":
                    studentToBeUpdated.updateYearPass(newValue);
                    break;
                default:
                    break;
            }
        }
    }

    static deleteStudent(id) {
        let del = Student.findStudent(id);

        if (del == null) {
            return "Invalid id";
        } else {
            Student.allStudents.splice(id, 1);
        }
    }
}

// driver code 
let s1 = Student.newStudent("Akshay", "Pawar", "2001-02-19", [10, 10, 10, 10, 10, 10, 10, 10], 2019, 2023);
let s2 = Student.newStudent("xyz", "uvw", "2001-02-19", [1, 10, 10, 10, 10, 1, 10, 10], 2019, 2023);

console.log(Student.allStudents);//print all student

// update student
Student.updateStudent("firstName","ap",0)//update firstname of id=0
Student.updateStudent("lastName","ap",0)//update lastname of id=0
Student.updateStudent("dob","2001-02-01",0)//update date of birth of id=0
Student.updateStudent("semesterCgpa",[9,9,9,9,9,9,9,9],0)//update sem cgpa of id=0
Student.updateStudent("yearEnroll",2019,0)//update year of enroll of id=0
Student.updateStudent("yearPass",2023,0)//update year of pass of id=0
console.log(Student.getAllStudents());

// delete object
// Student.deleteStudent(0)
// console.log(Student.getAllStudents());


