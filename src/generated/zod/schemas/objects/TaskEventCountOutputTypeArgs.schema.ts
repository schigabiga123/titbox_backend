import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventCountOutputTypeSelectObjectSchema as TaskEventCountOutputTypeSelectObjectSchema } from './TaskEventCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TaskEventCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TaskEventCountOutputTypeArgsObjectSchema = makeSchema();
export const TaskEventCountOutputTypeArgsObjectZodSchema = makeSchema();
