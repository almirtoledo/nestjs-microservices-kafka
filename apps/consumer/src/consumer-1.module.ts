import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Consumer1Controller } from './consumer-1.controller';
import { PrismaAdapterService } from './prisma-adapter.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'LINUS_SERVICE',
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
      },
    ]),
  ],
  controllers: [Consumer1Controller],
  providers: [PrismaAdapterService],
})
export class Consumer1Module {}
