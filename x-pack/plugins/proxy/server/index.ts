/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { PluginInitializer } from 'src/core/server';
import { ProxyService, ProxyServiceSetup, ProxyServiceStart } from './proxy';
export { ProxyPluginType } from './proxy';

export const plugin: PluginInitializer<ProxyServiceSetup, ProxyServiceStart> = initializerContext =>
  new ProxyService(initializerContext);
