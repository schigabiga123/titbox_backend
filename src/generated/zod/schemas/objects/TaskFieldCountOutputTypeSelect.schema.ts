import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  attachments: z.boolean().optional()
}).strict();
export const TaskFieldCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TaskFieldCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldCountOutputTypeSelect>;
export const TaskFieldCountOutputTypeSelectObjectZodSchema = makeSchema();
