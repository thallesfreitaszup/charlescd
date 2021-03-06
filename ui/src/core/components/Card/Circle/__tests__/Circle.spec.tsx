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

import React from 'react';
import { render, screen } from 'unit-test/testUtils';
import * as dateUtils from 'core/utils/date';
import CardCircle from '../';

test('render CardCircle with children', () => {
  jest.spyOn(dateUtils, 'dateFrom').mockImplementation(value => value);

  render(
    <CardCircle title="woman" description="2020">
      content
    </CardCircle>
  );

  expect(screen.getByText(/2020/)).toBeInTheDocument();
  expect(screen.getByText('woman')).toBeInTheDocument();
  expect(screen.getByText('content')).toBeInTheDocument();
});
