/**
 * Copyright 2024 IBM Corp.
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

import { FromSchema, JSONSchema } from 'json-schema-to-ts';

import { projectSchema } from './project';

import { createPaginationQuerySchema, withPagination } from '@/schema.js';

export const projectsListQuerySchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    ...createPaginationQuerySchema().properties,
    include_archived: {
      type: 'boolean',
      default: false
    }
  }
} as const satisfies JSONSchema;
export type ProjectsListQuery = FromSchema<typeof projectsListQuerySchema>;

export const projectsListResponseSchema = withPagination(projectSchema);
export type ProjectsListResponse = FromSchema<typeof projectsListResponseSchema>;
