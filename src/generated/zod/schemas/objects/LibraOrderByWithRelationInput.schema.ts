import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaskOrderByWithRelationInputObjectSchema as TaskOrderByWithRelationInputObjectSchema } from './TaskOrderByWithRelationInput.schema';
import { TaskFieldOrderByWithRelationInputObjectSchema as TaskFieldOrderByWithRelationInputObjectSchema } from './TaskFieldOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  projectId: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  szfCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  plateNumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  assignedUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  amount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  manuallyLibra: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  manuallyLibraComment: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  taskFieldId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  task: z.lazy(() => TaskOrderByWithRelationInputObjectSchema).optional(),
  taskField: z.lazy(() => TaskFieldOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const LibraOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LibraOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraOrderByWithRelationInput>;
export const LibraOrderByWithRelationInputObjectZodSchema = makeSchema();
