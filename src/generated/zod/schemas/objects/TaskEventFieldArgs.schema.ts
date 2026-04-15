import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldSelectObjectSchema as TaskEventFieldSelectObjectSchema } from './TaskEventFieldSelect.schema';
import { TaskEventFieldIncludeObjectSchema as TaskEventFieldIncludeObjectSchema } from './TaskEventFieldInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TaskEventFieldSelectObjectSchema).optional(),
  include: z.lazy(() => TaskEventFieldIncludeObjectSchema).optional()
}).strict();
export const TaskEventFieldArgsObjectSchema = makeSchema();
export const TaskEventFieldArgsObjectZodSchema = makeSchema();
