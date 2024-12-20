import { StatusProject } from "../utils/enums";

export interface Project {
  pk: string,
  sk: string,
  name: string,
  status: StatusProject,
  domains: string[],
  accounts?: string[], //não esquecer de zerar na hora de normalizar
  description?: string,
  createdAt?: Date,
  updatadAt?: Date,
}

export type ProjectCreate  = {
  name: string,
  status?: StatusProject,
  domains: string[],
  accounts: string[], //não esquecer de zerar na hora de normalizar
  description?: string,
}