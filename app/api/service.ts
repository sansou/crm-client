

import { ProjectCreate } from "../interfaces/interfaces";

const API_URL = 'http://127.0.0.1:4000/';


export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function getProjects() {
  try {
    const res = await fetch(API_URL + 'projects');
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function createProject(createProjectDTO: ProjectCreate) {
  
  try {
    const res = await fetch(API_URL + 'projects', {
      method: 'POST',
      body: JSON.stringify({...createProjectDTO}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

export async function getLeads(projecId: string) {
  try {
    const res = await fetch(API_URL + 'leads/project/' + projecId);
    if (!res.ok) {
      throw new Error(res.status);
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}