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

function valid_password (req, res) {
    
    // receive password
    const password = req.body.password;
    
    // Nove ou mais caracteres
    if (password.length < 9) {
        return res.status(400).json({ 
            status: false, 
            mensagem: 'A senha deve ter nove ou mais caracteres.' 
        });
    };

    // Nota: Espaços em branco não devem ser considerados como caracteres válidos.
    if (password.includes(' ')) {
        return res.status(400).json({ 
            status: false, 
            mensagem: 'A senha não deve ter espaços em branco.' 
        });
    };

    // Ao menos 1 dígito
    if (!/[0-9]/.test(password)) {
        return res.status(400).json({ 
            status: false, 
            mensagem: 'A senha não deve ter ao menos 1 dígito.' 
        });
    }; 
    
    // Ao menos 1 letra minúscula
    if (!/[a-z]/.test(password)) {
        return res.status(400).json({ 
            status: false, 
            mensagem: 'A senha deve ter ao menos 1 letra minúscula.' 
        });
    };

    // Ao menos 1 letra maiúscula
    if (!/[A-Z]/.test(password)) {
        return res.status(400).json({ 
            status: false, 
            mensagem: 'A senha deve ter ao menos 1 letra maiúscula.' 
        });
    };

    // Ao menos 1 caractere especial
    if (!/[!@#$%^&*()+-]/.test(password)) {
        return res.status(400).json({ 
            status: false, 
            mensagem: 'A senha deve ter ao menos 1 caractere especial.'
        });
    };

    // Não possuir caracteres repetidos dentro do conjunto
    if (caracteres_repetidos(password)) {
        return res.status(400).json({ 
            status: false, 
            mensagem: 'A senha não deve ter caracteres repetidos.' 
        });
    };

    // password foi validado
    return res.status(200).json({ 
        status: true, 
        mensagem: `A senha ${password} é valida` 
    });
};

module.exports = valid_password;