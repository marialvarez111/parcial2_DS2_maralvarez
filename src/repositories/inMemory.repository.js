import { TaskStatus } from '../models/taskstatus.js';


export class InMemoryTaskRepository {
  
  constructor() {
    this.store = [];
  }

  /**
   * Guarda una tarea (nueva o actualizada).
   * @param {Task} task - La tarea a guardar.
   * @returns {Task} - La tarea guardada.
   */
  save(task) {
    const existingIndex = this.store.findIndex((t) => t.id === task.id);

    if (existingIndex > -1) {
      // Actualizar
      this.store[existingIndex] = task;
    } else {
      // Crear nueva
      this.store.push(task);
    }
    return task;
  }

  /**
   * Encuentra una tarea por su ID.
   * @param {string} id - El ID de la tarea.
   * @returns {Task | undefined} - La tarea encontrada o undefined.
   */
  findById(id) {
    return this.store.find((t) => t.id === id);
  }

  /**
   * Encuentra todas las tareas, opcionalmente filtradas por estado.
   * @param {string} [status] - (Opcional) El estado para filtrar.
   * @returns {Task[]} - Un array de tareas.
   */
  findAll(status) {
    if (status) {
      return this.store.filter((t) => t.status === status);
    }
    return [...this.store]; // Devuelve una copia para evitar mutaciones
  }

  /**
   * Elimina una tarea por su ID.
   * @param {string} id - El ID de la tarea a eliminar.
   * @returns {void}
   */
  delete(id) {
    const index = this.store.findIndex((t) => t.id === id);
    if (index > -1) {
      this.store.splice(index, 1);
    }
  }

  /**
   * Encuentra tareas vencidas.
   * @param {Date} today - La fecha de hoy.
   * @returns {Task[]} - Array de tareas vencidas.
   */
  findOverdue(today) {
    return this.store.filter(
      (t) =>
        t.status !== TaskStatus.DONE && t.dueDate && new Date(t.dueDate) < today
    );
  }
}