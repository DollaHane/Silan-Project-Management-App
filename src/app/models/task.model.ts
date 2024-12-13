import { STATUS } from "../types/status";
import { PRIORITY } from "../types/priority";
import { Note } from "./notes.model";

export interface Task {
  id: string;
  title: string;
  responsible: string;
  progress: number;
  startDate: Date;
  targetDate: Date;
  createdAt: Date;
  updatedAt: Date;
  status: STATUS
  priority: PRIORITY;
  notes: Note[]
}