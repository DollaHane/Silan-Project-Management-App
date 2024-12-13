import { Tool } from "./tool.model"

export interface Project {
  id: string;
  title: string;
  poNumber: string;
  jobNumber: string;
  value: number;
  deliveryDate: Date;
  createdAt: Date;
  updatedAt: Date;
  tools: Tool[]
}
