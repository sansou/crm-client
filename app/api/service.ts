import { ProjectCreate, updateLeadForm } from "../interfaces/interfaces";

const API_LOCAL_URL = 'http://localhost:4000/v1/';

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function getProjects() {
  const endpoint =  API_LOCAL_URL + 'projects';
  try {
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new Error(res.status);
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function createProject(createProjectDTO: ProjectCreate) {
  
  try {
    const res = await fetch(API_LOCAL_URL + 'projects', {
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
    const res = await fetch(API_LOCAL_URL + 'leads/project/' + projecId);
    if (!res.ok) {
      throw new Error(res.status);
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getLeadById(projecId: string, id: string) {
  try {
    const res = await fetch(API_LOCAL_URL + 'leads/'+ id + '/project/' + projecId);
    if (!res.ok) {
      throw new Error(res.status);
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateLead( UpdateLeadDTO: updateLeadForm) {
  console.log(updateLead, "no serviço");
  
  try {
    const res = await fetch(API_LOCAL_URL + 'leads/', {
      method: 'PATCH',
      body: JSON.stringify({...UpdateLeadDTO}),
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