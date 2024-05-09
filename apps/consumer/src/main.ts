import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Consumer1Module } from './consumer-1.module';

async function bootstrap() {
  const app = await NestFactory.create(Consumer1Module);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'linus-client',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'linus-consumer',
      },
    },
  });

  await app.startAllMicroservices();

  await app.listen(3001);
}
bootstrap();
