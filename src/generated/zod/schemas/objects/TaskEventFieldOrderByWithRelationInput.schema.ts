import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaskEventOrderByWithRelationInputObjectSchema as TaskEventOrderByWithRelationInputObjectSchema } from './TaskEventOrderByWithRelationInput.schema';
import { AttachmentOrderByRelationAggregateInputObjectSchema as AttachmentOrderByRelationAggregateInputObjectSchema } from './AttachmentOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskEventId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  data: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  taskEvent: z.lazy(() => TaskEventOrderByWithRelationInputObjectSchema).optional(),
  attachments: z.lazy(() => AttachmentOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TaskEventFieldOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TaskEventFieldOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldOrderByWithRelationInput>;
export const TaskEventFieldOrderByWithRelationInputObjectZodSchema = makeSchema();
