const readline = require('readline');
const { crearTarea, eliminarTarea, completarTarea, mostrarTareas } = require('./tareaFunciones');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = () => {
  rl.question('Seleccione una opción:\n 1. Crear tarea\n 2. Mostrar tareas\n 3. Completar tarea\n 4. Eliminar tarea\n 5. Salir\n', (nro) => {
    switch (nro.toString()) {
      case '1':
        rl.question('Añade la tarea que desea realizar: ', (description) => {
          crearTarea(description);
          menu();
        });
        break;

      case '2':
        mostrarTareas();
        menu();
        break;

      case '3':
        mostrarTareas();
        rl.question('¿Qué tarea desea marcar como completa? ', (complete) => {
          completarTarea(complete);
          menu();
        });
        break;

      case '4':
        mostrarTareas();
        rl.question('¿Qué tarea desea eliminar? ', (eliminar) => {
          eliminarTarea(eliminar);
          menu();
        });
        break;

      case '5':
        rl.close();
        break;

      default:
        console.log('Ingrese una opción válida, por favor.');
        menu();
        break;
    }
  });
};

module.exports = {
  menu,
};
