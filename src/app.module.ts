import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './db/prisma.service';
import { RocketseatTeamMemberRepository } from './repositories/RocketseatTeamMemberRepository';
import { RocketseatTeamMemberRepositoryImpl } from './repositories/RocketseatTeamMemberRepositoryImpl';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, {
    useClass:  RocketseatTeamMemberRepositoryImpl,
    provide: RocketseatTeamMemberRepository
  }],
})
export class AppModule {}
