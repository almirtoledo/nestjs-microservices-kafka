import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ScheduleModule } from '@nestjs/schedule';
import { ProducerController } from './producer.controller';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ClientsModule.register([
      {
        name: 'PRODUCER_SERVICE',
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
      },
    ]),
  ],
  controllers: [ProducerController],
})
export class ProducerModule {}
