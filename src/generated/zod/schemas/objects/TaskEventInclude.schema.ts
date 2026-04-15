import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './TaskArgs.schema';
import { TaskEventFieldFindManySchema as TaskEventFieldFindManySchema } from '../findManyTaskEventField.schema';
import { TaskEventCountOutputTypeArgsObjectSchema as TaskEventCountOutputTypeArgsObjectSchema } from './TaskEventCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  task: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional(),
  fields: z.union([z.boolean(), z.lazy(() => TaskEventFieldFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TaskEventCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TaskEventIncludeObjectSchema: z.ZodType<Prisma.TaskEventInclude> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventInclude>;
export const TaskEventIncludeObjectZodSchema = makeSchema();
