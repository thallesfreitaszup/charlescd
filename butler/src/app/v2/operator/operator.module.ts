import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { DeploymentEntityV2 } from '../api/deployments/entity/deployment.entity'
import { ComponentsRepositoryV2 } from '../api/deployments/repository/component.repository'
import { DeploymentRepositoryV2 } from '../api/deployments/repository/deployment.repository'
import { K8sClient } from '../core/integrations/k8s/client'
import { LogsModule } from '../core/logs/logs.module'
import { DeploymentsHookController } from './deployments.hook.controller'
import { RoutesHookController } from './routes.hook.controller'
import { CreateRoutesManifestsUseCase } from './use-cases/create-routes-manifests.usecase'
import { ReconcileDeploymentUsecase } from './use-cases/reconcile-deployment.usecase'
import { ReconcileDeployment } from './use-cases/reconcile-deployments.usecase'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DeploymentEntityV2,
      DeploymentRepositoryV2,
      ComponentsRepositoryV2
    ]),
    LogsModule
  ],
  controllers: [
    DeploymentsHookController,
    RoutesHookController
  ],
  providers: [
    K8sClient,
    CreateRoutesManifestsUseCase,
    ReconcileDeploymentUsecase,
    ReconcileDeployment
  ]
})
export class OperatorModule {
}
