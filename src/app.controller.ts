import { PrismaService } from './db/prisma.service';
import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { randomUUID } from 'node:crypto';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketseatTeamMemberRepository } from './repositories/RocketseatTeamMemberRepository';

@Controller()
export class AppController {
  constructor(private readonly rocketseatTeamMemberRepository: RocketseatTeamMemberRepository) {}

  @Get()
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function:memberFunction } = body;

    await this.rocketseatTeamMemberRepository.create(
      name,
      memberFunction
    );

    return {
      
    }
  }
}
