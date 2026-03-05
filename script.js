// pegando o botão pela referência
const button = document.getElementById("send-button");

// um event listener para capturar o click no botao
button.addEventListener("click", send);

// função que roda quando o botão é clicado
function send(){
    // captura os valores dos campos
    let warningLabel = document.getElementById("warning-label");
    let nameField = document.getElementById("name-field");
    let emailField = document.getElementById("email-field");
    let messageField = document.getElementById("message-field");
    
    // testes lógicos
    if (nameField.value == "") // testa o nome para nulo
    {
        warningLabel.textContent = "O campo nome está vazio.";
    }
    else if (!validateEmail(emailField.value)) // valida o email
    {
        warningLabel.textContent = "E-mail inválido.";
    }
    else if (messageField.value.trim() === "") // testa a mensagem para nulo
    {
        // nessa condição acima eu sofri até descobrir que deveria usar a função trim()
        // para apagar espaços em branco e também usei o operador === (idêntico) para
        // fazer uma comparação exata
        warningLabel.textContent = "O conteúdo da mensagem não pode ser vazio.";
    }
    else // se passou, apaga todos os campos
    {        
        warningLabel.textContent = "";
        nameField.value = "";
        emailField.value = "";
        messageField.value = "";        
    }
}
// função usando regular expressions para teste de email válido
function validateEmail(email) {
    // padrão de teste alphanumérico + @ + alphanumérico + . + sufixo
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // retorna o booleano resultante do teste
    return pattern.test(email);
}