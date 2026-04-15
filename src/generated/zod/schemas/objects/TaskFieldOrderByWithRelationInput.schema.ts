import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaskOrderByWithRelationInputObjectSchema as TaskOrderByWithRelationInputObjectSchema } from './TaskOrderByWithRelationInput.schema';
import { AttachmentOrderByRelationAggregateInputObjectSchema as AttachmentOrderByRelationAggregateInputObjectSchema } from './AttachmentOrderByRelationAggregateInput.schema';
import { LibraOrderByWithRelationInputObjectSchema as LibraOrderByWithRelationInputObjectSchema } from './LibraOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  pocketId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  data: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  task: z.lazy(() => TaskOrderByWithRelationInputObjectSchema).optional(),
  attachments: z.lazy(() => AttachmentOrderByRelationAggregateInputObjectSchema).optional(),
  libra: z.lazy(() => LibraOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TaskFieldOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TaskFieldOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldOrderByWithRelationInput>;
export const TaskFieldOrderByWithRelationInputObjectZodSchema = makeSchema();
