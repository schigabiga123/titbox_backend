import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  url: z.literal(true).optional(),
  type: z.literal(true).optional(),
  commentId: z.literal(true).optional(),
  taskFieldId: z.literal(true).optional(),
  taskEventFieldId: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const AttachmentMinAggregateInputObjectSchema: z.ZodType<Prisma.AttachmentMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentMinAggregateInputType>;
export const AttachmentMinAggregateInputObjectZodSchema = makeSchema();
