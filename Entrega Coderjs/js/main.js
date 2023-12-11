const fuerza = [
  "Entrada en calor \n Abdominales agrupados 20 \n Abdominales bicicleta 50 \n Abdominales bajos 15\n",
  "\n Circuito 1 \n Pecho con barra 3x8 \n Flexiones en velocidad  3x10 \n Press arnold con mc 3x8 \n Plancha con los pies sobre el bozu 3x30 \n ",
  "\nCircuito 2 \n Remo en máquina 3x8 \n Serrucho con mancuerna 3x10 \n Tríceps fondos en banco 3x15 \n Abdominales bahjos 3x12",
];

const aerobico = [
  "15 minutos de cinta subiendo la velocidad \n 15 minutos de remo \n ",
  "15 minutos de eliptico \n 15 minutos de bicicleta",
];

const rutina = [
  "Por tiempo 40 seg x 10 seg - 3 vueltas\n Abdominales agrupados\n Bajos\n Construcciones\n Sentadilla más estocada atrás",
  "Rep 20-18-16-14-12-10-8 (tiempo Máximo 30 min)\n Sentadilla baja con rebote \n Sentadilla con salto \n Flexiones abiertas \n Fondos de triceps \n Abdominales bisagras",
  " 5 minutos de Cinta\n 5 minutos de Bici \n 5 minutos de remo ",
];

let nombre = prompt("Bienvenido a Entrenaminetos JP \n ¿Como te llamas?");
let edadPersona = parseFloat(prompt("Ingresa tu edad"));
let bienvenida = prompt(
  "Hola " +
    nombre +
    " ¿Que tipo de entrenamineto queres hacer?\n" +
    "A. Aerobico \nB. Fuerza "
);

if (bienvenida == "a" || bienvenida == "Aeróbico") {
  alert(nombre + " acá esta tu entrenamiento aeróbico \n" + aerobico);
} else if (bienvenida == "b" || bienvenida == "Fuerza") {
  alert(nombre + " acá esta tu entrenamiento de fuerza \n" + fuerza);
} else {
  alert("Opción no válida");
}

let agregar = prompt(
  "Armemos tu segundo día de entrenamiento \n A- Aerobico con abdominales\n B- Aerobico más corto \n C- Fuerza con aerobico \n D- Fuerza sin abdominales"
);
if (agregar === "a" || agregar =="Aerobico con abdominales") {
  aerobico.push(
    "\n\nCircuito de abdominales\n 20 abdominales agrupados\n 30 bajos \n 50 abdominales bicicleta "
  );
  alert(
    "Acá esta tu segundo día de entrenamiento aerobico con abdominales \n" +
      aerobico
  );
} else if (agregar == "b" || agregar == "Aerobico más corto") {
  aerobico.pop(
    "\n\nCircuito de abdominales\n 20 abdominales agrupados\n 30 bajos \n 50 abdominales bicicleta "
  );
  alert(
    "Acá esta tu segundo día de entrenamiento Aerobico más corto \n" + aerobico
  );
} else if (agregar == "c" || agregar == "Fuerza con aerobico") {
  fuerza.unshift("\n15 minutos de cinta\n\n");
  alert(
    "Acá esta tu segundo día de entrenamiento de Fuerza con aerobico \n" +
      fuerza
  );
} else if (agregar == "d" || agregar == "Fuerza sin abdominales") {
  fuerza.shift(
    "\n\nCircuito de abdominales\n 20 abdominales agrupados\n 30 bajos \n 50 abdominales bicicleta "
  );
  alert(
    "Acá esta tu segundo día de entrenamiento de Fuerza sin abdominales \n" +
      fuerza
  );
} else {
  console.log("Opción no válida");
}

let planificacion = alert(
  "En la consola te dejo el desafio semanal de esta semana! Te animas?"
);

function desafioSemanal(circuito) {
  if (circuito.length > 0) {
    for (let i = 0; i < circuito.length; i++) {
      console.log("El circuito N° " + (i + 1) + " es:\n" + circuito[i]);
    }
  } else {
    console.log("No hay mas días de entrenamiento");
  }
}

desafioSemanal(rutina);
