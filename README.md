# Teste de carga microserviços

#### Proposta

- Criar 5000 mil usuários
- Criar 100 artigos para cada usuário (500.000 artigos)
- Consumir com dois serviços no mesmo tópico, sem replicar mensagens

**Testado com Node na versão 20.13.0 (Core i5 13° 20-threds / 32G ram)**

## Comandos

```bash
$ docker compose -f kafka.yml up -d
```

```bash
$ docker compose -f db.yml up -d
```

```bash
$ npm i
```

```bash
$ npm prisma migrate deploy
```

```bash
$ npm prisma generate
```

Consumers

```bash
$ npm run start:dev consumer
```

```bash
$ npm run start:dev consumer-1
```

Producer

```bash
$ npm run start:dev producer
```

#### Otimize o MariaDB

leia:

- https://mariadb.com/docs/server/storage-engines/innodb/operations/
- https://mariadb.com/kb/en/configuring-mariadb-for-optimal-performance/
