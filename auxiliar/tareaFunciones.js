const listaTareas = [
  {
    descripcion: 'Hacer mercado',
    completada: false,
    id: '1'
  },
  {
    descripcion: 'Estudiar Node.js',
    completada: true,
    id: '2'
  },
  {
    descripcion: 'Pagar servicios',
    completada: false,
    id: '3'
  },
  {
    descripcion: 'Hacer todas mis entregas',
    completada: false,
    id: '4'
  },
];

function agregarTarea(descripcion, completada = false) {
  const nuevaTarea = {
    descripcion,
    completada,
    id: generarIDUnico(),
  };
  listaTareas.push(nuevaTarea);
  return nuevaTarea; 
}

function eliminarTarea(id) {
  const index = listaTareas.findIndex((tarea) => tarea.id === id);
  if (index !== -1) {
    listaTareas.splice(index, 1);
    return true;
  }
  return false; 
}

function completarTarea(id) {
  const tarea = listaTareas.find((t) => t.id === id);
  if (tarea) {
    tarea.completada = true;
    return tarea; 
  }
  return null;
}

function generarIDUnico() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

module.exports = {
  listaTareas,
  agregarTarea,
  eliminarTarea,
  completarTarea,
};
