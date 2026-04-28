import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  status: z.string().optional(),
  createdAt: z.coerce.date().optional().nullable()
}).strict();
export const TaskEventCreateManyTaskInputObjectSchema: z.ZodType<Prisma.TaskEventCreateManyTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventCreateManyTaskInput>;
export const TaskEventCreateManyTaskInputObjectZodSchema = makeSchema();
