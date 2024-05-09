import { Controller, Inject } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { Article, User } from '@prisma/client';
import { PrismaAdapterService } from './prisma-adapter.service';

@Controller()
export class Consumer2Controller {
  constructor(
    @Inject('LINUS_SERVICE') private readonly kafkaClient: ClientKafka,
    private readonly prisma: PrismaAdapterService,
  ) {}

  @MessagePattern('users')
  async users(@Payload() user: User) {
    await this.prisma.user.create({ data: { ...user } });
  }

  @MessagePattern('articles')
  async articles(@Payload() user: Article) {
    await this.prisma.article.create({ data: { ...user } });
  }
}
