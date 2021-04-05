// Elabore uma função que recebe um objeto com estudantes e suas notas.
// As notas de cada estudante estarão num array, conforme exemplo abaixo.
// Você deverá calcular a média da nota de cada aluno e retornar um objeto
// com os atributos nome e media, que indica o aluno que teve o melhor
// desempenho nas notas.

const sum = (arr) => arr.reduce((total, nota) => total + nota, 0);
const averageFun = (arr) => sum(arr) / arr.length;

function bestStudent(students) {
  const studentsWithGrade = Object.entries(students).map((student) => {
    const key = 0;
    const value = 1;

    return { name: student[key], average: averageFun(student[value]) };
  });

  const orderedStudents = studentsWithGrade.sort(
    (studentA, studentB) => studentB.average - studentA.average
  );

  const bestStudent = orderedStudents[0];
  return bestStudent;
}

const objTest = {
  Joao: [8, 7.6, 8.9, 6],
  Mariana: [9, 6.6, 7.9, 8],
  Carla: [7, 7, 8, 9],
};

console.log(bestStudent(objTest));
