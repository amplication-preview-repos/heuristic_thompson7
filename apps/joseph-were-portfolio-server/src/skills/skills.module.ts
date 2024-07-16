import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SkillsModuleBase } from "./base/skills.module.base";
import { SkillsService } from "./skills.service";
import { SkillsController } from "./skills.controller";
import { SkillsResolver } from "./skills.resolver";

@Module({
  imports: [SkillsModuleBase, forwardRef(() => AuthModule)],
  controllers: [SkillsController],
  providers: [SkillsService, SkillsResolver],
  exports: [SkillsService],
})
export class SkillsModule {}
