import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RateLimiterService } from "./rate-limiter.service";
import { QuotaController } from "./quota.controller";
import { PolicyController } from "./policy.controller";
import { PolicyService } from "./policy.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuotaPolicy } from "./policy.entity";
import { DynamicRateLimitScalingService } from "./dynamic-rate-limit-scaling.service";

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([QuotaPolicy])],
  providers: [RateLimiterService, PolicyService, DynamicRateLimitScalingService],
  controllers: [QuotaController, PolicyController],
  exports: [RateLimiterService, PolicyService, DynamicRateLimitScalingService],
})
export class QuotaModule {}
