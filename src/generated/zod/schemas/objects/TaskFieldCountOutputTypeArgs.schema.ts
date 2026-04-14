import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldCountOutputTypeSelectObjectSchema as TaskFieldCountOutputTypeSelectObjectSchema } from './TaskFieldCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TaskFieldCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TaskFieldCountOutputTypeArgsObjectSchema = makeSchema();
export const TaskFieldCountOutputTypeArgsObjectZodSchema = makeSchema();
