import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SkillsService } from "./skills.service";
import { SkillsControllerBase } from "./base/skills.controller.base";

@swagger.ApiTags("skills")
@common.Controller("skills")
export class SkillsController extends SkillsControllerBase {
  constructor(
    protected readonly service: SkillsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
