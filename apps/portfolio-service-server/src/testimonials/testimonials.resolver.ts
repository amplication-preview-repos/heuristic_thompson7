import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TestimonialsResolverBase } from "./base/testimonials.resolver.base";
import { Testimonials } from "./base/Testimonials";
import { TestimonialsService } from "./testimonials.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Testimonials)
export class TestimonialsResolver extends TestimonialsResolverBase {
  constructor(
    protected readonly service: TestimonialsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
