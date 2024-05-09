# Teste de carga microserviços

#### Proposta

- Criar 5000 mil usuários
- Criar 100 artigos para cada usuário
- Consumir com dois serviços no mesmo tópico, sem replicar mensagens

**Testado com Node na versão 20.13.0 (Core i5 13° 20-threds / 32G ram)**

## Comandos

> docker compose -f kafka.yml up -d
> docker compose -f db.yml up -d
> npm i
> npm prisma migrate deploy
> npm prisma generate

Consumers

> npm run start:dev consumer
> npm run start:dev consumer-1

Producer

> npm run start:dev producer
