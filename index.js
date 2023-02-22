const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

/* 
    Considere uma senha sendo válida quando a mesma possuir as seguintes definições:

    - Nove ou mais caracteres
    - Ao menos 1 dígito
    - Ao menos 1 letra minúscula
    - Ao menos 1 letra maiúscula
    - Ao menos 1 caractere especial
        - Considere como especial os seguintes caracteres: !@#$%^&*()-+
    - Não possuir caracteres repetidos dentro do conjunto 
*/

// verifica se a senha possui caracteres repetidos
function caracteres_repetidos(password) {
    const caracteresRepetidos = {};
    for (let i = 0; i < password.length; i++) {
        if (caracteresRepetidos[password[i]]) {
            return true; // possui caracteres repetidos
        } else {
            caracteresRepetidos[password[i]] = true;
        }
    }
    return false; // não possui caracteres repetidos
}

valid_password = (req, res) => {
    
    // receive password
    const password = req.body.password;

    // Nove ou mais caracteres
    if (password.length < 9) res.send(`password deve ter nove ou mais caracteres`); 

    // Nota: Espaços em branco não devem ser considerados como caracteres válidos.
    if (password.includes(' ')) res.send(`password deve ter espaços em branco`); 

    // Ao menos 1 dígito
    if (!/[0-9]/.test(password)) res.send(`password deve ter ao menos 1 dígito`); 
    
    // Ao menos 1 letra minúscula
    if (!/[a-z]/.test(password)) res.send(`password deve ter ao menos 1 letra minúscula`); 

    // Ao menos 1 letra maiúscula
    if (!/[A-Z]/.test(password)) res.send(`password deve ter ao menos 1 letra maiúscula`);

    // Ao menos 1 caractere especial
    if (!/[!@#$%^&*()+-]/.test(password)) res.send(`password deve ter ao menos 1 caractere especial`);

    // Não possuir caracteres repetidos dentro do conjunto
    if (caracteres_repetidos(password)) res.send(`password não deve ter caracteres repetidos`);

    // password foi validado
    res.send(`O password ${password} foi validado !`);
};


app.get('/', (req, res) => {
    res.send('API Valid Password v1');
});

app.post('/valid_password', valid_password);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000!');
});
