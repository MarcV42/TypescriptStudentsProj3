// Schritt 1: Definition des Studententyps
type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: (number | string | undefined)[];
};

// Schritt 2: Funktion zur Ausgabe von Studentendaten
function printStudent(student: Student) {
    const { firstName, lastName, age, grades } = student;
    console.log(`${firstName} ${lastName} (${age})`);
    console.log("==============================");
    console.log("Noten:");
    console.log(grades.map((grade) => (grade === undefined ? "*" : grade)).join(","));
    console.log("");
}

// Schritt 3: Beispiel-Studenten erstellen
const student1: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: [1, 4, 3, 1, "A", undefined, 1, 2],
};

const student2: Student = {
    firstName: "Berta",
    lastName: "Müller",
    age: 17,
    grades: ["A", undefined, 1],
};

const student3: Student = {
    firstName: "Cäsar",
    lastName: "Schmidt",
    age: 17,
    grades: ["A", 1, undefined, 3, 2, 4, 5],
};

// Schritt 4: Funktion zur Ausgabe einer Liste von Studenten
function printStudentList(students: Student[]) {
    students.forEach((student) => {
        printStudent(student);
    });
}

// Beispiel: Liste der Studenten ausgeben
const studentList: Student[] = [student1, student2, student3];
printStudentList(studentList);
