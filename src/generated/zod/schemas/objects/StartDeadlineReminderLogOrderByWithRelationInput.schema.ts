import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaskOrderByWithRelationInputObjectSchema as TaskOrderByWithRelationInputObjectSchema } from './TaskOrderByWithRelationInput.schema';
import { ProjectOrderByWithRelationInputObjectSchema as ProjectOrderByWithRelationInputObjectSchema } from './ProjectOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  sentAt: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  projectId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  recipientRole: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  task: z.lazy(() => TaskOrderByWithRelationInputObjectSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const StartDeadlineReminderLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StartDeadlineReminderLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogOrderByWithRelationInput>;
export const StartDeadlineReminderLogOrderByWithRelationInputObjectZodSchema = makeSchema();
