import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TestimonialsService } from "./testimonials.service";
import { TestimonialsControllerBase } from "./base/testimonials.controller.base";

@swagger.ApiTags("testimonials")
@common.Controller("testimonials")
export class TestimonialsController extends TestimonialsControllerBase {
  constructor(
    protected readonly service: TestimonialsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
