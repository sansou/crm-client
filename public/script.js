const project = {
  id: '',
};

const URL_PRODUCTION = 'https://crm-production-e403.up.railway.app/';

// Função para enviar os dados capturados para a API
async function  sendDataToAPI(data) {
  const body = JSON.stringify({...data, projectId: project.id})
   
  console.log(body);
  
  fetch( URL_PRODUCTION +'leads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  })
    .then(response => response.json())
    .then(data => {
      console.log('Dados enviados com sucesso:', data);
    })
    .catch(error => {
      console.error('Erro ao enviar o lead:', error);
    });
}

// Adicionar um listener de evento para capturar o lead quando o formulário for enviado
function captureLead() {
  const form = document.querySelector("form[data-crm-id='xyz']");    
  if (form) {
    //pegar a ação
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      console.log('data:',formData);
      const data = Object.fromEntries(formData.entries());
      sendDataToAPI(data);
      form.submit();
    });
  }
}

function getProjectId() {
  const id = document.currentScript?.getAttribute("data-project-id");    
  if (id) project.id = id
  if (!project.id) throw new Error('Script missing ID parameter.')
  // if (!project.id.match(/[0-9a-f]{24}/g)) throw new Error('Script with abnormal ID parameter.')
}

async function main() {
  await getProjectId();
  await captureLead();
}

(async () => {
  try {
    await main()
  } catch (error) {
    console.log("Erro", error);
  }
})()