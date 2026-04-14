import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventWhereInputObjectSchema as TaskEventWhereInputObjectSchema } from './TaskEventWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TaskEventWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => TaskEventWhereInputObjectSchema).optional()
}).strict();
export const TaskEventScalarRelationFilterObjectSchema: z.ZodType<Prisma.TaskEventScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventScalarRelationFilter>;
export const TaskEventScalarRelationFilterObjectZodSchema = makeSchema();
