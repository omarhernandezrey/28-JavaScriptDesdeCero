// Ejercicio: Promedio de Notas Aprobadas

// Se define un array de notas
const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94];

// Se filtran las notas aprobadas (mayores o iguales a 70)
const passingGrades = grades.filter(grade => grade >= 70);

// Se calcula el promedio de las notas aprobadas
const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length;

// Se imprimen los resultados en la consola.
console.log('Notas Originales: ', grades);
console.log('Notas Aprobadas: ', passingGrades);
console.log('Promedio de Notas Aprobadas: ', averagePassingGrade);
