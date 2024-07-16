/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Name as PrismaName } from "@prisma/client";

export class NameServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.NameCountArgs, "select">): Promise<number> {
    return this.prisma.name.count(args);
  }

  async names(args: Prisma.NameFindManyArgs): Promise<PrismaName[]> {
    return this.prisma.name.findMany(args);
  }
  async name(args: Prisma.NameFindUniqueArgs): Promise<PrismaName | null> {
    return this.prisma.name.findUnique(args);
  }
  async createName(args: Prisma.NameCreateArgs): Promise<PrismaName> {
    return this.prisma.name.create(args);
  }
  async updateName(args: Prisma.NameUpdateArgs): Promise<PrismaName> {
    return this.prisma.name.update(args);
  }
  async deleteName(args: Prisma.NameDeleteArgs): Promise<PrismaName> {
    return this.prisma.name.delete(args);
  }
}
