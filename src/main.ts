// Schritt 1: Definition des Studententyps
type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: (number | string | undefined)[];
};

// Schritt 2: Funktion zur Ausgabe von Studentendaten
function printStudent(student: Student) {
    console.log("============================================================");

    const { firstName, lastName, age, grades } = student;
    console.log(`====> ${firstName} ${lastName} // Age:(${age})`);
    console.log("----------------------");
    console.log("====> Noten:");
    console.log(grades.map((grade) => (grade === undefined ? "*" : grade)).join(","));
    console.log("============================================================");
}

// Schritt 3: Beispiel-Studenten erstellen
let student1: Student = {
    firstName: "Romi",
    lastName: "Waalkes",
    age: 26,
    grades: [1,4,3,1,3,2,1,2],
};

let student2: Student = {
    firstName: "Bella",
    lastName: "B",
    age: 22,
    grades: ["A",2,"F",3,1,"B",2,5],
};

let student3: Student = {
    firstName: "Anna",
    lastName: "Wiebke",
    age: 23,
    grades: ["A", 2,undefined,3,1,"B",undefined,5],
};

// Schritt 4: Funktion zur Ausgabe einer Liste von Studenten
function printStudentList(students: Student[]) {
    students.forEach((student) => {
        printStudent(student);
    });
}

// Beispiel: Liste der Studenten ausgeben
let studentList: Student[] = [student1, student2, student3];
printStudentList(studentList);
