# GitHub Search User

Esse projeto foi proposto por [@fsrocha-dev](https://github.com/fsrocha-dev) como parte de um exercício bônus. A ideia era treinar habilidades de React e Redux, criando uma aplicação que usa a [API do GitHub](https://docs.github.com/pt/rest) para buscar informações sobre usuários da plataforma.

A princípio, precisei ler a documentação da API para entender quais endpoints utilizar. O GitHub oferece uma variedade enorme de *endpoints*, então fica a critério do desenvolvedor escolher, a depender de como será o projeto. Optei por criar uma página onde o usuário digita o nome que deseja buscar em um *input*. Depois ao clicar no botão de buscar, a API retorna os cinco resultados mais próximos. O usuário então pode clicar em um deles, para obter mais detalhes sobre aquele resultado, tais como: principais repositórios, local onde reside e número de seguidores. Além disso, desenvolvi um botão que muda o tema da aplicação para *dark mode*, usando Javascript puro.

O resultado pode ser conferido [aqui.](https://marcoglnd.github.io/github-redux-app)
