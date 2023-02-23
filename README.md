# Api valida senha
Este projeto é um desafio proposto pela e-fluxus, que tem como objetivo implementar um sistema de validação de senhas. A ideia é receber uma string de senha enviada do front-end para o back-end e validar se ela atende a determinados critérios, como comprimento mínimo, inclusão de caracteres especiais e números, entre outros. A implementação deste sistema de validação requer conhecimentos em programação de back-end e pode ser uma boa oportunidade para praticar suas habilidades nessa área.

# Instalação do server
  1. Faça o clone do repositório em sua máquina local:
```
git clone git@github.com:rodrigoaguerra/desafio_e_fluxus.git
```
  2. Abra a pasta desafio_e_fluxus/api/:
```
cd desafio_e_fluxus/api/
```
  3. Instale as dependências do projeto:
```
npm install
``` 
# Uso
  1. Execute o projeto:
```
npm start
```
Obs: se tudo ocorreu como planejado o servidor deve rodar na porta 5000 e a seguinte mensagem deve aparecer :
```
> desafio_e_fluxus@1.0.0 start
> node index.js
Servidor iniciado na porta 5000!
```
# Instalação do front end
  1. Na pasta raiz do projeto navegue a pasta front:
```
cd ../front/
```
  2. Instale as dependências do projeto:
```
npm install
```
# Uso
  1. Execute o projeto:
```
npm start
```
  2. Acesse o projeto no seu navegador pelo endereço http://localhost:3000

# Detalhes sobre a solução
Para atender à proposta do desafio, eu criei uma API simples com Node.js, que contém duas rotas: uma rota raiz ('/') para verificar o funcionamento adequado da API e outra rota ('/valid_password') para solucionar o problema proposto.
Para garantir que a senha atenda às condições específicas, as verificações são realizadas em etapas, e caso a senha não satisfaça uma ou mais das condições, a API retorna uma resposta com o status 400, juntamente com um objeto JSON contendo um status booleano e uma mensagem em string. Incluí a mensagem na resposta para permitir que o usuário saiba exatamente qual condição da senha não foi atendida.
Quanto à dúvida sobre espaços em branco na senha, optei por defini-los como inválidos.
A parte mais complexa da aplicação foi a verificação de caracteres repetidos, que foi resolvida por meio de uma função específica que criei para esse propósito. Além disso, a ligação do front-end foi outra parte interessante e desafiadora do projeto, que foi solucionada com o uso da função 'fetch' nativa do JavaScript para enviar os dados do formulário para a API.

# Pré-requisitos
    1. Node versão 18.14.2
    2. Npm versão 9.5.1
    
# Autor
  Rodrigo Alves Guerra
