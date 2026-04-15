import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { ProjectCreateNestedOneWithoutSyncLogItemsInputObjectSchema as ProjectCreateNestedOneWithoutSyncLogItemsInputObjectSchema } from './ProjectCreateNestedOneWithoutSyncLogItemsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  pocketProjectId: z.string().optional().nullable(),
  projectTitle: z.string(),
  success: z.boolean(),
  skipped: z.boolean().optional(),
  skippedReason: z.string().optional().nullable(),
  createdProjects: z.number().int().optional(),
  updatedProjects: z.number().int().optional(),
  createdTasks: z.number().int().optional(),
  updatedTasks: z.number().int().optional(),
  updatedTaskFields: z.number().int().optional(),
  skippedTaskSync: z.boolean().optional(),
  errorMessage: z.string().optional().nullable(),
  changeDetails: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutSyncLogItemsInputObjectSchema).optional()
}).strict();
export const ProjectSyncLogItemCreateWithoutSyncLogInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemCreateWithoutSyncLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemCreateWithoutSyncLogInput>;
export const ProjectSyncLogItemCreateWithoutSyncLogInputObjectZodSchema = makeSchema();
