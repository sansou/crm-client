const project = {
  id: '',
};

// const URL_PRODUCTION = 'https://crm-production-e403.up.railway.app/';
const URL_LOCAL = 'http://127.0.0.1:4000/';

// Função para enviar os dados capturados para a API
async function sendDataToAPI(data) {
  const host = window.location.host;
  data.host = host;
  console.log('host:', host);
  
  const body = JSON.stringify({ ...data, projectId: project.id })
  try {
    const response = await fetch(URL_LOCAL + 'leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    })
    if (!response.ok) {
      console.log('Erro na requisição');
    }
    const data = await response.json();
    console.log("lead enviado com sucesso");
  } catch (error) {
    console.log("Erro ao enviar lead", error);
  }
}

// Adicionar um listener de evento para capturar o lead quando o formulário for enviado
async function captureLead() {
  const form = document.querySelector("form[data-crm-id='xyz']");
  if (form) {
    //pegar a ação
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      await sendDataToAPI(data);
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