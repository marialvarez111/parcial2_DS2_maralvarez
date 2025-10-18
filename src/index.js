import express from 'express';


import { InMemoryTaskRepository } from './repositories/inMemory.repository.js';
import { TaskService } from './services/task.service.js';
import { TaskController } from './controllers/task.controller.js';
import { createTaskRouter } from './routes/task.routes.js';

// Capa 3
const taskRepository = new InMemoryTaskRepository();

// Capa 2 (inyectamos el repo)
const taskService = new TaskService(taskRepository);

// Capa 1 (inyectamos el service)
const taskController = new TaskController(taskService);

// Capa 1 - Router (inyectamos el controller)
const taskRouter = createTaskRouter(taskController);

// 3. Configurar Express
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

// Registrar las rutas
app.use('/task', taskRouter); 

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});