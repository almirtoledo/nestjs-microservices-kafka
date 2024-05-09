import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Consumer2Controller } from './consumer-2.controller';
import { PrismaAdapterService } from './prisma-adapter.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'LINUS_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'linus-client-2',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'linus-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [Consumer2Controller],
  providers: [PrismaAdapterService],
})
export class Consumer2Module {}
