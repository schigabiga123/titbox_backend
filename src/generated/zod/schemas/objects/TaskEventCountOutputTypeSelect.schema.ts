import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  fields: z.boolean().optional()
}).strict();
export const TaskEventCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TaskEventCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventCountOutputTypeSelect>;
export const TaskEventCountOutputTypeSelectObjectZodSchema = makeSchema();
