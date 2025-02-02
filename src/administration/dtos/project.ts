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

import { ProjectStatus, ProjectVisiblity } from '../entities/project.entity';

export const projectSchema = {
  type: 'object',
  required: ['object', 'id', 'name', 'visibility', 'status', 'created_at', 'archived_at'],
  properties: {
    object: { const: 'organization.project' },
    id: { type: 'string' },
    name: { type: 'string' },
    visibility: { type: 'string', enum: Object.values(ProjectVisiblity) },
    status: { type: 'string', enum: Object.values(ProjectStatus) },
    created_at: { type: 'number' },
    archived_at: { type: 'number', nullable: true }
  }
} as const satisfies JSONSchema;
export type Project = FromSchema<typeof projectSchema>;
