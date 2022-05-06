//declaration of variables

let notasFinalesComisionA: number[] = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8];
let notasFinalesComisionB: number[] = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8];
let notasFinalesComisionC: number[] = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9];

let i: number = 0;
let promedioNotaA: number = 0;
let promedioNotaB: number = 0;
let promedioNotaC: number = 0;

//Main
function MayorPromedio() {
  for (i = 0; i < 10; i++) {
    promedioNotaA = promedioNotaA + notasFinalesComisionA[i];
    promedioNotaB = promedioNotaB + notasFinalesComisionB[i];
    promedioNotaC = promedioNotaC + notasFinalesComisionC[i];
  }
  if (promedioNotaA > promedioNotaB && promedioNotaA > promedioNotaC) {
    console.log("El mayor promedio es: " + promedioNotaA / 10);
  }
  if (promedioNotaB > promedioNotaA && promedioNotaB > promedioNotaC) {
    console.log("El mayor promedio es: " + promedioNotaB / 10);
  }
  if (promedioNotaC > promedioNotaB && promedioNotaC > promedioNotaA) {
    console.log("El mayor promedio es: " + promedioNotaC / 10);
  }
}
}
function MenorPromedio() {
  for (i = 0; i < 10; i++) {
    promedioNotaA = promedioNotaA + notasFinalesComisionA[i];
    promedioNotaB = promedioNotaB + notasFinalesComisionB[i];
    promedioNotaC = promedioNotaC + notasFinalesComisionC[i];
  }
  if (promedioNotaA < promedioNotaB && promedioNotaA < promedioNotaC) {
    console.log("El menor promedio es: " + promedioNotaA / 10);
  }
  if (promedioNotaB < promedioNotaA && promedioNotaB < promedioNotaC) {
    console.log("El menor promedio es: " + promedioNotaB / 10);
  }
  if (promedioNotaC < promedioNotaB && promedioNotaC < promedioNotaA) {
    console.log("El menor promedio es: " + promedioNotaC / 10);
  }
}
function CantidadDesaprobados() {
  console.log("En la comisión A desaprobaron: " + "alumnos");
}
function MenorNota() {
  console.log("En la comisión A la menor nota fue: ");
}
MayorPromedio();
MenorPromedio();
CantidadDesaprobados();
MenorNota();
