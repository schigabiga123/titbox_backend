import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  projectId: z.literal(true).optional(),
  taskId: z.literal(true).optional(),
  szfCode: z.literal(true).optional(),
  plateNumber: z.literal(true).optional(),
  assignedUserId: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  manuallyLibra: z.literal(true).optional(),
  manuallyLibraComment: z.literal(true).optional(),
  taskFieldId: z.literal(true).optional()
}).strict();
export const LibraMinAggregateInputObjectSchema: z.ZodType<Prisma.LibraMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LibraMinAggregateInputType>;
export const LibraMinAggregateInputObjectZodSchema = makeSchema();
