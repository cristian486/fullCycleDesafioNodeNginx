# Desafio Nginx com NodeJS

Desenvolvida a aplicação em Node com base no que foi demonstrado ao longo do treinamento de docker. Além disto foi adicionada criação e consulta na tabela, bem como a inserção de mais registros.

Modificadas as configurações do Nginx para que ele se comunique com o servidor Node e retorne então o resultado para o cliente.

Para a execução basta baixar o arquivo *compose.yml* e executar ele.

Link para as duas imagens criadas:

* https://hub.docker.com/repository/docker/cristian486/nginx_desafio (Dockerfile.nginx)
* https://hub.docker.com/repository/docker/cristian486/back_node_desafio/general (Dockerfile)

O arquivo de configuração do Nginx encontra-se em `nginx/default.conf`.