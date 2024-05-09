import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ProducerModule } from './producer.module';

async function bootstrap() {
  const app = await NestFactory.create(ProducerModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'client-producer',
        brokers: ['localhost:9092'],
      },
      producer: {
        allowAutoTopicCreation: true,
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
