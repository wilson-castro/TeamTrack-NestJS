import { PrismaService } from "src/db/prisma.service";
import { RocketseatTeamMemberRepository } from "./RocketseatTeamMemberRepository";
import { randomUUID } from "node:crypto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RocketseatTeamMemberRepositoryImpl implements RocketseatTeamMemberRepository {
  constructor(private prisma: PrismaService) { };

  async create(name: string, memberFunction: string): Promise<void>{
     await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction
      }
    });
  }
}