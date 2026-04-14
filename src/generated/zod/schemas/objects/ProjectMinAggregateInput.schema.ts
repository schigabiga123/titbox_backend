import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  partnerName: z.literal(true).optional(),
  pocketId: z.literal(true).optional(),
  title: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ProjectMinAggregateInputObjectSchema: z.ZodType<Prisma.ProjectMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProjectMinAggregateInputType>;
export const ProjectMinAggregateInputObjectZodSchema = makeSchema();
