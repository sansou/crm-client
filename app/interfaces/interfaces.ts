import { StatusLead, StatusProject } from "../utils/enums";

export interface Project {
  pk: string,
  sk: string,
  name: string,
  status: StatusProject,
  domains: string[],
  accounts?: string[], //não esquecer de zerar na hora de normalizar
  description?: string,
  createdAt: Date,
  updatadAt?: Date,
}

export type ProjectCreate  = {
  name: string,
  status?: StatusProject,
  domains: string[],
  accounts: string[], //não esquecer de zerar na hora de normalizar
  description?: string,
}

export interface Lead {
  pk: string,
  sk: string, // será o email
  name: string,
  phone: string,
  status: StatusLead,
  host: string,
  position?: string,
  state?: string,
  city?: string,
  info?: any,
  observation?: string [],
  createdAt: Date,
  updatedAt: Date
}
export type updateLeadForm = {
  pk: string;
  sk: string;
  status: StatusLead;
  observation: string;
};
