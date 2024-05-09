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

#### Otimize o MariaDB

- innodb_flush_method: para evitar a gravação duplicada no buffer do sistema operacional.
  > innodb_flush_method = O_DIRECT

leia:

- https://mariadb.com/docs/server/storage-engines/innodb/operations/
- https://mariadb.com/kb/en/configuring-mariadb-for-optimal-performance/
