'use server'
const API_URL = 'http://127.0.0.1:4000/';


export async function getProjects() {
  try {
    const res = await fetch(API_URL + 'projects');
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}