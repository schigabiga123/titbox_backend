import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  comments: z.boolean().optional(),
  fields: z.boolean().optional(),
  inspections: z.boolean().optional(),
  events: z.boolean().optional()
}).strict();
export const TaskCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TaskCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TaskCountOutputTypeSelect>;
export const TaskCountOutputTypeSelectObjectZodSchema = makeSchema();
