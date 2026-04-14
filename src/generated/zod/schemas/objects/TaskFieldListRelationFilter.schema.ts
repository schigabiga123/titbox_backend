import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './TaskFieldWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TaskFieldWhereInputObjectSchema).optional(),
  some: z.lazy(() => TaskFieldWhereInputObjectSchema).optional(),
  none: z.lazy(() => TaskFieldWhereInputObjectSchema).optional()
}).strict();
export const TaskFieldListRelationFilterObjectSchema: z.ZodType<Prisma.TaskFieldListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldListRelationFilter>;
export const TaskFieldListRelationFilterObjectZodSchema = makeSchema();
