import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TestimonialsModuleBase } from "./base/testimonials.module.base";
import { TestimonialsService } from "./testimonials.service";
import { TestimonialsController } from "./testimonials.controller";
import { TestimonialsResolver } from "./testimonials.resolver";

@Module({
  imports: [TestimonialsModuleBase, forwardRef(() => AuthModule)],
  controllers: [TestimonialsController],
  providers: [TestimonialsService, TestimonialsResolver],
  exports: [TestimonialsService],
})
export class TestimonialsModule {}
