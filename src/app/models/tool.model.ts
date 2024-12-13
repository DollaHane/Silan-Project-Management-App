import { Task } from "./task.model";
import { Note } from "./notes.model";

export interface Tool {
  id: string;
  title: string;
  projectParentId: number;
  toolNumber: string;
  description: string;
  deliveryDate: Date;
  createdAt: Date;
  updatedAt: Date;
  tasks: Task[]
  notes: Note[]
}
