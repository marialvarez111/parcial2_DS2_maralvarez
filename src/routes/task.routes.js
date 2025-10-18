import { Router } from 'express';


export const createTaskRouter = (taskController) => {
  const router = Router();


  router.post('/', taskController.createTask);
  router.get('/', taskController.getTasks);
//   router.get('/overdue', taskController.getOverdueTasks);
  router.patch('/:id/status', taskController.updateTaskStatus);
  router.delete('/:id', taskController.deleteTask);

  return router;
};