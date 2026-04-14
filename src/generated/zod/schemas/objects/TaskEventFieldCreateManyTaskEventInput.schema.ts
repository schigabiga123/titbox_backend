import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  data: z.string().optional().nullable(),
  type: z.string().optional().nullable()
}).strict();
export const TaskEventFieldCreateManyTaskEventInputObjectSchema: z.ZodType<Prisma.TaskEventFieldCreateManyTaskEventInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldCreateManyTaskEventInput>;
export const TaskEventFieldCreateManyTaskEventInputObjectZodSchema = makeSchema();
