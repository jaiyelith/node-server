require('colors');

const listaTareas = [
  {
    id: 1,
    description: 'Tarea 1',
    complete: true,
  },
  {
    id: 2,
    description: 'Tarea 2',
    complete: false,
  },
  {
    id: 3,
    description: 'Tarea 3',
    complete: false,
  },
];

const crearTarea = (description) => {
  return new Promise((resolve, reject) => {
    const tarea = {
      id: listaTareas.length + 1,
      description,
      complete: false,
    };

    listaTareas.push(tarea);
    resolve(tarea);
  });
};

const eliminarTarea = (id) => {
  return new Promise((resolve, reject) => {
    const index = parseInt(id) - 1;

    if (index >= 0 && index < listaTareas.length) {
      const tareaEliminada = listaTareas.splice(index, 1)[0];
      resolve(tareaEliminada);
    } else {
      reject(new Error('No existe la tarea'));
    }
  });
};

const completarTarea = (id) => {
  return new Promise((resolve, reject) => {
    const index = parseInt(id) - 1;

    if (index >= 0 && index < listaTareas.length) {
      listaTareas[index].complete = true;
      resolve(listaTareas[index]);
    } else {
      reject(new Error('No existe la tarea'));
    }
  });
};

const mostrarTareas = () => {
  listaTareas.forEach((tarea) => {
    console.log(
      `${'ID:'.cyan} ${tarea.id}, ${'Descripcion:'.cyan} ${tarea.description}, ${'Completada:'.cyan} ${tarea.complete}`
    );
  });
};

module.exports = {
  crearTarea,
  eliminarTarea,
  completarTarea,
  mostrarTareas,
};
