import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventSelectObjectSchema as TaskEventSelectObjectSchema } from './TaskEventSelect.schema';
import { TaskEventIncludeObjectSchema as TaskEventIncludeObjectSchema } from './TaskEventInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TaskEventSelectObjectSchema).optional(),
  include: z.lazy(() => TaskEventIncludeObjectSchema).optional()
}).strict();
export const TaskEventArgsObjectSchema = makeSchema();
export const TaskEventArgsObjectZodSchema = makeSchema();
