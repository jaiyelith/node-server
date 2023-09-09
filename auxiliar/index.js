require('colors');

const readline = require('readline');
const { crearTarea, eliminarTarea, completarTarea, mostrarTareas } = require('./tareaFunciones');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const mostrarMenu = () => {
  console.log('======================='.blue)
  console.log('    Lista de Tareas    '.blue)
  console.log('======================='.blue)
  console.log(`${'Seleccione una opción:'.underline.cyan}`);
  console.log(`${'1.'.cyan} Crear tarea`);
  console.log(`${'2.'.cyan} Mostrar tareas`);
  console.log(`${'3.'.cyan} Completar tarea`);
  console.log(`${'4.'.cyan} Eliminar tarea`);
  console.log(`${'5.'.cyan} Salir`);
};

const menu = () => {
  mostrarMenu();
  rl.question('', async (opcion) => {
    switch (opcion.trim()) {
      case '1':
        console.clear();
        rl.question('Añade la tarea que desea realizar: ', async (description) => {
          try {
            await crearTarea(description);
            console.log('\n Tarea creada existosamente!'.green);
          } catch (error) {
            console.error(error.message.red);
          }
          menu();
        });
        break;

      case '2':
        console.clear();
        mostrarTareas();
        menu();
        break;

      case '3':
        console.clear();
        mostrarTareas();
        rl.question('¿Qué tarea desea marcar como completa? ', async (complete) => {
          try {
            await completarTarea(complete);
            console.log('\n Tarea completada existosamente'.green);
          } catch (error) {
            console.error(error.message.red);
          }
          menu();
        });
        break;

      case '4':
        console.clear();
        mostrarTareas();
        rl.question('¿Qué tarea desea eliminar? ', async (eliminar) => {
          try {
            await eliminarTarea(eliminar);
            console.log('\n Tarea eliminada existosamente'.green);
          } catch (error) {
            console.error(error.message.red);
          }
          menu();
        });
        break;

      case '5':
        rl.close();
        break;

      default:
        console.clear();
        console.log('\n Ingresa una opción válida, por favor.'.red);
        menu();
        break;
    }
  });
};

module.exports = {
  menu,
};
