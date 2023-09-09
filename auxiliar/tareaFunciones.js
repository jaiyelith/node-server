const listaTareas = [
    {
      id: 1,
      description: 'Tarea 1',
      complete: false,
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
    const tarea = {
      id: listaTareas.length + 1,
      description,
      complete: false,
    };
  
    return listaTareas.push(tarea);
  };
  
  const eliminarTarea = (id) => {
    const index = parseInt(id) - 1;
  
    if (index >= 0 && index < listaTareas.length) {
      return listaTareas.splice(index, 1);
    }
  
    return listaTareas;
  };
  
  const completarTarea = (id) => {
    const index = parseInt(id) - 1;
    if (index >= 0 && index < listaTareas.length) {
      return (listaTareas[index].complete = true);
    }
  
    return listaTareas;
  };
  
  const mostrarTareas = () => {
    listaTareas.forEach((tarea) => {
      console.log(`ID: ${tarea.id}, Descripcion: ${tarea.description}, Completada: ${tarea.complete}`);
    });
  };
  
  module.exports = {
    crearTarea,
    eliminarTarea,
    completarTarea,
    mostrarTareas,
  };
  