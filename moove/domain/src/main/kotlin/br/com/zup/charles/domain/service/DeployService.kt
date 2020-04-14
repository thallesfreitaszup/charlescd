/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

package br.com.zup.charles.domain.service

import br.com.zup.charles.domain.Build
import br.com.zup.charles.domain.Deployment

interface DeployService {

    fun deploy(deployment: Deployment, build: Build, isDefaultCircle: Boolean)

    fun undeploy(deploymentId: String, authorId: String)

}