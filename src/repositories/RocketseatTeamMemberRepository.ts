export abstract class RocketseatTeamMemberRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}