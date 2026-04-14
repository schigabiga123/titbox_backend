import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldWhereInputObjectSchema as TaskEventFieldWhereInputObjectSchema } from './TaskEventFieldWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TaskEventFieldWhereInputObjectSchema).optional(),
  some: z.lazy(() => TaskEventFieldWhereInputObjectSchema).optional(),
  none: z.lazy(() => TaskEventFieldWhereInputObjectSchema).optional()
}).strict();
export const TaskEventFieldListRelationFilterObjectSchema: z.ZodType<Prisma.TaskEventFieldListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldListRelationFilter>;
export const TaskEventFieldListRelationFilterObjectZodSchema = makeSchema();
