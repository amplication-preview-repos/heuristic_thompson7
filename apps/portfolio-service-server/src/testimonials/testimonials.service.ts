import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestimonialsServiceBase } from "./base/testimonials.service.base";

@Injectable()
export class TestimonialsService extends TestimonialsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
