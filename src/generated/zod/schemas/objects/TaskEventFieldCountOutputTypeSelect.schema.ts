import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  attachments: z.boolean().optional()
}).strict();
export const TaskEventFieldCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TaskEventFieldCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldCountOutputTypeSelect>;
export const TaskEventFieldCountOutputTypeSelectObjectZodSchema = makeSchema();
