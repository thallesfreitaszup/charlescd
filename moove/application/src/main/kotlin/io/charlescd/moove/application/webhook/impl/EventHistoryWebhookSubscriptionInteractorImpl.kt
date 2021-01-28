/*
 * Copyright 2020 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.charlescd.moove.application.webhook.impl

import io.charlescd.moove.application.WebhookService
import io.charlescd.moove.application.webhook.EventHistoryWebhookSubscriptionInteractor
import io.charlescd.moove.application.webhook.response.EventHistoryWebhookSubscriptionResponse
import io.charlescd.moove.domain.User
import io.charlescd.moove.domain.WebhookSubscriptionEventHistory
import io.charlescd.moove.domain.service.HermesService
import javax.inject.Inject
import javax.inject.Named

@Named
class EventHistoryWebhookSubscriptionInteractorImpl @Inject constructor(
    private val webhookService: WebhookService,
    private val hermesService: HermesService
) : EventHistoryWebhookSubscriptionInteractor {

    override fun execute(
        workspaceId: String,
        authorization: String,
        id: String,
        eventType: String?,
        eventStatus: String?,
        eventField: String?,
        eventValue: String?
    ): List<EventHistoryWebhookSubscriptionResponse> {
        val history = getEventHistory(workspaceId, authorization, id, eventType, eventStatus, eventField, eventValue)
        return history.map { EventHistoryWebhookSubscriptionResponse.from(it) }
    }

    private fun getEventHistory(
        workspaceId: String,
        authorization: String,
        id: String,
        eventType: String?,
        eventStatus: String?,
        eventField: String?,
        eventValue: String?
    ): List<WebhookSubscriptionEventHistory> {
        val author = webhookService.getAuthor(authorization)
        validateSubscription(workspaceId, author, id)
        return hermesService.getSubscriptionEventHistory(author.email, id, eventType, eventStatus, eventField, eventValue)
    }

    private fun validateSubscription(workspaceId: String, author: User, id: String) {
        val subscription = hermesService.getSubscription(author.email, id)
        webhookService.validateWorkspace(workspaceId, id, author, subscription)
    }
}
