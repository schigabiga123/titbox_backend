import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  partnerName: z.literal(true).optional(),
  pocketId: z.literal(true).optional(),
  title: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProjectCountAggregateInputObjectSchema: z.ZodType<Prisma.ProjectCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCountAggregateInputType>;
export const ProjectCountAggregateInputObjectZodSchema = makeSchema();
