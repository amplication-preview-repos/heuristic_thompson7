import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NameModuleBase } from "./base/name.module.base";
import { NameService } from "./name.service";
import { NameController } from "./name.controller";
import { NameResolver } from "./name.resolver";

@Module({
  imports: [NameModuleBase, forwardRef(() => AuthModule)],
  controllers: [NameController],
  providers: [NameService, NameResolver],
  exports: [NameService],
})
export class NameModule {}
