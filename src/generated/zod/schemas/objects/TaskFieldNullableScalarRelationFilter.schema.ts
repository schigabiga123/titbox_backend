import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './TaskFieldWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TaskFieldWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => TaskFieldWhereInputObjectSchema).optional().nullable()
}).strict();
export const TaskFieldNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TaskFieldNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldNullableScalarRelationFilter>;
export const TaskFieldNullableScalarRelationFilterObjectZodSchema = makeSchema();
