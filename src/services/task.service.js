import { Task } from '../models/task.js'; // Importamos el modelo Task
import { TaskStatus } from '../models/taskstatus.js'; // Importamos los estados de tarea

export class TaskService {

  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  /**
   * Declaramos una nueva tarea.
   * @param {string} title
   * @param {string} [description]
   * @param {Date} [dueDate]
   * @returns {Task} - La tarea creada.
   */


  //Metodo para crear una nueva tarea
  create(title, description, dueDate) {
    const newTask = new Task(title, description, dueDate);
    
    //Invocamos el repositorio para guardar la nueva tarea
    return this.taskRepository.save(newTask);
  }

  /**
   * Lista de tareas, o filtradas por estado
   * @param {string} [status]
   * @returns {Task[]}
   */
  list(status) {
    //Invocamos el repositorio para obtener las tareas
    return this.taskRepository.findAll(status);
  }

  /**
   * Actualiza el estado de una tarea.
   * @param {string} id
   * @param {string} status - Nuevo estado (ej: 'DONE')
   * @returns {Task} - La tarea actualizada.
   */
  updateStatus(id, status) {
    // Obtener la tarea existente sino existe lanzar error
    const task = this.taskRepository.findById(id);
    if (!task) {
      throw new Error('No encontré la tarea');
    }

    // Regla de negocio: Validar que el estado sea válido
    if (!Object.values(TaskStatus).includes(status)) {
      throw new Error('Estado inválido o ese estado no existe');
    }

    // Si todo está bien, actualizar el estado
    task.status = status;
    
    // Invocar el repositorio para guardar los cambios
    return this.taskRepository.save(task);
  }

  /**
   * Elimina una tarea.
   * @param {string} id
   * @returns {void}
   */
  delete(id) {
    // Obtener la tarea existente sino existe lanzar error
    const task = this.taskRepository.findById(id);
    if (!task) {
      throw new Error('No encontré la tarea:' + id);
    }

    // Invocar el repositorio para eliminar la tarea
    return this.taskRepository.delete(id);
  }

  /**
   * Lista tareas vencidas.
   * @returns {Task[]}
   */
  listOverdue() {
    // Obtener la fecha actual
    const today = new Date();
    // Invocar el repositorio para encontrar tareas vencidas
    return this.taskRepository.findOverdue(today);
  }
}