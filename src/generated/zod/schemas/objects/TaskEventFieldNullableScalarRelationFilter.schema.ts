import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldWhereInputObjectSchema as TaskEventFieldWhereInputObjectSchema } from './TaskEventFieldWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TaskEventFieldWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => TaskEventFieldWhereInputObjectSchema).optional().nullable()
}).strict();
export const TaskEventFieldNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TaskEventFieldNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldNullableScalarRelationFilter>;
export const TaskEventFieldNullableScalarRelationFilterObjectZodSchema = makeSchema();
