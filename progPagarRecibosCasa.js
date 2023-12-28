// Definir un objeto con los valores de los recibos
let valoresRecibos = {
    agua: 36200,
    luz: 15000,
    internet: 50000,
    gas: 10000,
  };
  
  // Definir un array con los nombres de los servicios
  let recibos = ["agua", "luz", "internet", "gas"];
  
  // Inicializar la suma total
  let sumaTotal = 0;
  
  // Iterar sobre los recibos y sumar los valores correspondientes
  recibos.forEach(servicio => {
    sumaTotal += valoresRecibos[servicio];
  });
  
  // Calcular el total a pagar dividiendo la sumaTotal entre 2
  let totalAPagar = sumaTotal / 2;
  
  // Imprimir la suma total y el total a pagar
  console.log(`La suma total de los recibos es: $${sumaTotal}`);
  console.log(`El total a pagar es: $${totalAPagar}`);
  

/*   En este código:

Se define un objeto valoresRecibos que contiene los montos asociados a cada servicio.
Se crea un array recibos que contiene los nombres de los servicios.
Se inicializa una variable sumaTotal en la que se acumulará la suma de los valores de los recibos.
Se utiliza un bucle forEach para iterar sobre los servicios en el array recibos. En cada iteración,
se accede al valor correspondiente en el objeto valoresRecibos y se suma a sumaTotal.
Se calcula el totalAPagar dividiendo sumaTotal entre 2.
Finalmente, se imprime la suma total de los recibos y el total a pagar. */