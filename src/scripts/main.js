// Função para gerar uma senha aleatória
function generatePassword() {
    // Obtém o comprimento da senha a partir do input do usuário
    const length = document.getElementById('password-length').value;
    
    // Define os caracteres possíveis para a senha
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    
    // Inicializa a variável da senha
    let password = '';
    
    // Gera a senha aleatória
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    // Exibe a senha gerada no campo de saída
    const passwordOutput = document.getElementById('password-output');
    passwordOutput.value = password;
    
    // Torna o botão de copiar visível
    document.getElementById('copy-button').style.display = 'block';
}

// Função para copiar a senha gerada para a área de transferência
function copyPassword() {
    // Obtém a senha gerada do campo de saída
    const passwordOutput = document.getElementById('password-output').value;
    
    // Copia a senha para a área de transferência
    navigator.clipboard.writeText(passwordOutput).then(() => {
        // Exibe uma mensagem de sucesso
        alert('Senha copiada para a área de transferência!');
    }, () => {
        // Exibe uma mensagem de erro
        alert('Falha ao copiar a senha.');
    });
}