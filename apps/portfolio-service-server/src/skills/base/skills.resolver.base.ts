/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Skills } from "./Skills";
import { SkillsCountArgs } from "./SkillsCountArgs";
import { SkillsFindManyArgs } from "./SkillsFindManyArgs";
import { SkillsFindUniqueArgs } from "./SkillsFindUniqueArgs";
import { CreateSkillsArgs } from "./CreateSkillsArgs";
import { UpdateSkillsArgs } from "./UpdateSkillsArgs";
import { DeleteSkillsArgs } from "./DeleteSkillsArgs";
import { SkillsService } from "../skills.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Skills)
export class SkillsResolverBase {
  constructor(
    protected readonly service: SkillsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Skills",
    action: "read",
    possession: "any",
  })
  async _skillsItemsMeta(
    @graphql.Args() args: SkillsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Skills])
  @nestAccessControl.UseRoles({
    resource: "Skills",
    action: "read",
    possession: "any",
  })
  async skillsItems(
    @graphql.Args() args: SkillsFindManyArgs
  ): Promise<Skills[]> {
    return this.service.skillsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Skills, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Skills",
    action: "read",
    possession: "own",
  })
  async skills(
    @graphql.Args() args: SkillsFindUniqueArgs
  ): Promise<Skills | null> {
    const result = await this.service.skills(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Skills)
  @nestAccessControl.UseRoles({
    resource: "Skills",
    action: "create",
    possession: "any",
  })
  async createSkills(@graphql.Args() args: CreateSkillsArgs): Promise<Skills> {
    return await this.service.createSkills({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Skills)
  @nestAccessControl.UseRoles({
    resource: "Skills",
    action: "update",
    possession: "any",
  })
  async updateSkills(
    @graphql.Args() args: UpdateSkillsArgs
  ): Promise<Skills | null> {
    try {
      return await this.service.updateSkills({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Skills)
  @nestAccessControl.UseRoles({
    resource: "Skills",
    action: "delete",
    possession: "any",
  })
  async deleteSkills(
    @graphql.Args() args: DeleteSkillsArgs
  ): Promise<Skills | null> {
    try {
      return await this.service.deleteSkills(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
