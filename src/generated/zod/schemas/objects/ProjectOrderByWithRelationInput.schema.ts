import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaskOrderByRelationAggregateInputObjectSchema as TaskOrderByRelationAggregateInputObjectSchema } from './TaskOrderByRelationAggregateInput.schema';
import { ProjectSyncLogOrderByRelationAggregateInputObjectSchema as ProjectSyncLogOrderByRelationAggregateInputObjectSchema } from './ProjectSyncLogOrderByRelationAggregateInput.schema';
import { ProjectSyncLogItemOrderByRelationAggregateInputObjectSchema as ProjectSyncLogItemOrderByRelationAggregateInputObjectSchema } from './ProjectSyncLogItemOrderByRelationAggregateInput.schema';
import { StartDeadlineReminderLogOrderByRelationAggregateInputObjectSchema as StartDeadlineReminderLogOrderByRelationAggregateInputObjectSchema } from './StartDeadlineReminderLogOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  partnerName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pocketId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  title: SortOrderSchema.optional(),
  updatedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tasks: z.lazy(() => TaskOrderByRelationAggregateInputObjectSchema).optional(),
  syncLogs: z.lazy(() => ProjectSyncLogOrderByRelationAggregateInputObjectSchema).optional(),
  syncLogItems: z.lazy(() => ProjectSyncLogItemOrderByRelationAggregateInputObjectSchema).optional(),
  startDeadlineReminderLogs: z.lazy(() => StartDeadlineReminderLogOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProjectOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectOrderByWithRelationInput>;
export const ProjectOrderByWithRelationInputObjectZodSchema = makeSchema();
