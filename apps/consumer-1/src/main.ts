import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Consumer2Module } from './consumer-2.module';

async function bootstrap() {
  const app = await NestFactory.create(Consumer2Module);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
        clientId: 'linus-client-2',
      },
      consumer: {
        groupId: 'linus-consumer',
      },
    },
  });

  await app.startAllMicroservices();

  await app.listen(3002);
}
bootstrap();
