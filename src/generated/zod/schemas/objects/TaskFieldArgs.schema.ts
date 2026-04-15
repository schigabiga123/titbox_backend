import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldSelectObjectSchema as TaskFieldSelectObjectSchema } from './TaskFieldSelect.schema';
import { TaskFieldIncludeObjectSchema as TaskFieldIncludeObjectSchema } from './TaskFieldInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TaskFieldSelectObjectSchema).optional(),
  include: z.lazy(() => TaskFieldIncludeObjectSchema).optional()
}).strict();
export const TaskFieldArgsObjectSchema = makeSchema();
export const TaskFieldArgsObjectZodSchema = makeSchema();
