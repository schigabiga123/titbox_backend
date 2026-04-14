import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldCountOutputTypeSelectObjectSchema as TaskEventFieldCountOutputTypeSelectObjectSchema } from './TaskEventFieldCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TaskEventFieldCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TaskEventFieldCountOutputTypeArgsObjectSchema = makeSchema();
export const TaskEventFieldCountOutputTypeArgsObjectZodSchema = makeSchema();
