import { Project } from "./project.model"

export interface Customer {
  id: string;
  name: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  contactPerson: string;
  contactNumber: number;
  contactEmail: string;
  adminEmail: string;
  createdAt: Date;
  updatedAt: Date;
  projects: Project[]
}