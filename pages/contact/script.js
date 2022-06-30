/* Form validator */
const regexValidator = /^[A-Za-z0-9._%+-]+@limgraph\.com$/

const handleSubmit = async (e) => {
  e.preventDefault();

  const validatorMessage = document.querySelector('#validatorMessage');

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const prefer = document.getElementById('prefer');
  const message = document.getElementById('message');

  if (name.value === '' || email.value === '' || message.value === '') {
    validatorMessage.innerText = 'Preencha todos os campos obrigatórios';
  }

  if (!regexValidator.test(prefer.value)) {
    validatorMessage.innerText = 'Por favor, digite um email de colaborador do Limgraph';
  }

  else {
    validatorMessage.style.color = 'green';
    validatorMessage.innerText = "Obrigado pela sua mensagem, em breve retornaremos o contato!";

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        prefer: prefer.value,
        message: message.value
      })
    });

    name.value = '';
    email.value = '';
    prefer.value = '';
    message.value = '';
  }
}