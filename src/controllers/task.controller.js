
export class TaskController {
  // Inyectamos el servicio
  constructor(taskService) {
    this.taskService = taskService;
  }

  // POST /tasks
  createTask = (req, res) => {
    // try catch por si hay error
    try {
      // Extraemos datos del cuerpo de la solicitud
      const { title, description, dueDate } = req.body;

      // Llama al servicio para crear la tarea
      const task = this.taskService.create(title, description, dueDate);
      
      // Responder con la tarea creada
      res.status(201).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };

  //GET /tasks
  getTasks = (req, res) => {
    try {
      // Filtro opcional por query param
      const { status } = req.query;
      const tasks = this.taskService.list(status);
      // Responder con la lista de tareas
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // PATCH /tasks/:id/status
  updateTaskStatus = (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const updatedTask = this.taskService.updateStatus(id, status);
      res.status(200).json(updatedTask);
    } catch (error) {

      if (error.message == 'No encontré la tarea') {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  // DELETE /tasks/:id
  deleteTask = (req, res) => {
    try {
      const { id } = req.params;
      this.taskService.delete(id);

      res.status(204).send();
    } catch (error) {
      if (error.message === 'No encontré la tarea') {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  // GET /tasks/overdue 
}