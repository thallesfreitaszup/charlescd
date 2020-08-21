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

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Text from 'core/components/Text';
import { Option } from 'core/components/Form/Select/interfaces';
import { thresholdOptions } from './constants';
import AceEditorForm from 'core/components/Form/AceEditor';
import { useMetricProviders, useSaveMetric, useProviderMetrics } from './hooks';
import { normalizeSelectOptions } from 'core/utils/select';
import { Metric } from './interface';
import { normalizeMetricOptions } from './helpers';
import BasicQueryForm from './BasicQueryForm';
import Styled from './styled';

type Props = {
  id: string;
  onGoBack: Function;
};

const AddMetric = ({ onGoBack, id }: Props) => {
  const { handleSubmit, register, control } = useForm<Metric>();
  const [isBasicQuery, setIsBasicQuery] = useState(true);
  const { getMetricsProviders } = useMetricProviders();
  const { getAllDataSourceMetrics } = useProviderMetrics();
  const { saveMetric } = useSaveMetric();
  const [providerOptions, setProviderOptions] = useState<Option[]>();
  const [metrics, setMetrics] = useState<Option[]>();
  const [selectedProvider, setSelectedProvider] = useState<Option>();

  useEffect(() => {
    getMetricsProviders().then(providersResponse => {
      const normalizedOptions = normalizeSelectOptions(providersResponse);
      setProviderOptions(normalizedOptions);
    });
  }, [getMetricsProviders]);

  useEffect(() => {
    if (isBasicQuery && selectedProvider) {
      getAllDataSourceMetrics(selectedProvider.value).then(metricsResponse => {
        const normalizedOptions = normalizeMetricOptions(metricsResponse);
        setMetrics(normalizedOptions);
      });
    }
  }, [isBasicQuery, selectedProvider]);

  const onSubmit = (data: Metric) => {
    const payload = { ...data, threshold: Number(data.threshold) };
    const metricGroupId = '11151f52-7f03-4ffa-9c80-b89515d37021';
    saveMetric(metricGroupId, payload).then(res => {
      console.log(res);
    });
  };

  return (
    <>
      <Styled.Layer>
        <Styled.Icon
          name="arrow-left"
          color="dark"
          onClick={() => onGoBack()}
        />
      </Styled.Layer>
      <Styled.Layer>
        <Text.h2 color="light">Add metric</Text.h2>
      </Styled.Layer>
      <Styled.Form
        onSubmit={handleSubmit(onSubmit)}
        data-testid="create-metric"
      >
        <Styled.Layer>
          <Styled.Input
            name="nickname"
            ref={register({ required: true })}
            label="Type a nickname for metric"
          />

          <Styled.ProviderSelect
            control={control}
            name="dataSourceId"
            label="Select a type server"
            options={providerOptions}
            onChange={option => setSelectedProvider(option)}
          />
          <Text.h5 color="dark">
            You can fill your query in a basic or advanced way:
          </Text.h5>
          <Styled.Actions>
            <Styled.ButtonIconRounded
              color="dark"
              onClick={() => setIsBasicQuery(true)}
              isActive={isBasicQuery}
            >
              Basic
            </Styled.ButtonIconRounded>
            <Styled.ButtonIconRounded
              color="dark"
              onClick={() => setIsBasicQuery(false)}
              isActive={!isBasicQuery}
            >
              Advanced
            </Styled.ButtonIconRounded>
          </Styled.Actions>

          {isBasicQuery && (
            <BasicQueryForm metrics={metrics} control={control} />
          )}

          {!isBasicQuery && (
            <>
              <Text.h5 color="dark">Type a query:</Text.h5>

              <Styled.AceEditorWrapper>
                <AceEditorForm
                  height="50px"
                  mode="json"
                  name="query"
                  control={control}
                />
              </Styled.AceEditorWrapper>
            </>
          )}

          <Styled.Title color="light">Threshold</Styled.Title>
          <Styled.Subtitle color="dark">
            Set the threshold to indicate when to reach the configured numeric
            value.
          </Styled.Subtitle>

          <Styled.ThresholdWrapper>
            <Styled.ThresholdSelect
              options={thresholdOptions}
              control={control}
              rules={{ required: true }}
              label="Conditional"
              name="condition"
            />

            <Styled.InputNumber
              name="threshold"
              label="Threshold"
              ref={register({ required: true })}
            />
          </Styled.ThresholdWrapper>

          <Styled.ButtonDefault
            type="submit"
            isLoading={false}
            isDisabled={false}
            isValid={false}
          >
            <Text.h6 color={'dark'}>Save</Text.h6>
          </Styled.ButtonDefault>
        </Styled.Layer>
      </Styled.Form>
    </>
  );
};

export default AddMetric;
