import {
  forwardRef,
  HttpModule,
  Module
} from '@nestjs/common'
import { SpinnakerService } from './cd/spinnaker'
import { DeploymentConfigurationService } from './configuration'
import { MooveService } from './moove'
import { LogsModule } from '../logs/logs.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import {
  ComponentDeploymentEntity,
  DeploymentEntity,
  ModuleDeploymentEntity
} from '../../api/deployments/entity'
import {
  ComponentDeploymentsRepository,
  ComponentUndeploymentsRepository,
  QueuedDeploymentsRepository
} from '../../api/deployments/repository'
import { DatabasesService } from './databases'
import { ServicesModule } from '../services/services.module'
import { DeploymentsModule } from '../../api/deployments/deployments.module'
import { CdConfigurationsRepository } from '../../api/configurations/repository'
import { CdStrategyFactory } from './cd'

@Module({
  imports: [
    HttpModule,
    LogsModule,
    ServicesModule,
    forwardRef(() => DeploymentsModule),
    TypeOrmModule.forFeature([
      ComponentDeploymentEntity,
      ComponentDeploymentsRepository,
      DeploymentEntity,
      ModuleDeploymentEntity,
      QueuedDeploymentsRepository,
      ComponentUndeploymentsRepository,
      CdConfigurationsRepository
    ])
  ],
  providers: [
    SpinnakerService,
    DeploymentConfigurationService,
    MooveService,
    DatabasesService,
    CdStrategyFactory
  ],
  exports: [
    DeploymentConfigurationService,
    MooveService,
    DatabasesService,
    CdStrategyFactory
  ]
})
export class IntegrationsModule {}
