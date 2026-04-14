import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  url: z.literal(true).optional(),
  type: z.literal(true).optional(),
  commentId: z.literal(true).optional(),
  taskFieldId: z.literal(true).optional(),
  taskEventFieldId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AttachmentCountAggregateInputObjectSchema: z.ZodType<Prisma.AttachmentCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AttachmentCountAggregateInputType>;
export const AttachmentCountAggregateInputObjectZodSchema = makeSchema();
