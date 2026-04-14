import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventWhereInputObjectSchema as TaskEventWhereInputObjectSchema } from './TaskEventWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TaskEventWhereInputObjectSchema).optional(),
  some: z.lazy(() => TaskEventWhereInputObjectSchema).optional(),
  none: z.lazy(() => TaskEventWhereInputObjectSchema).optional()
}).strict();
export const TaskEventListRelationFilterObjectSchema: z.ZodType<Prisma.TaskEventListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventListRelationFilter>;
export const TaskEventListRelationFilterObjectZodSchema = makeSchema();
