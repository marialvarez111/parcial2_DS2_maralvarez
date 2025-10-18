import { v4 as uuidv4 } from 'uuid';
import { TaskStatus } from './taskstatus.js';

export class Task {
  constructor(title, description = null, dueDate = null) {
    this.id = uuidv4(); // id autamaticamente  generado
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.status = TaskStatus.PENDING; // por defecto en pendiente
  }
}