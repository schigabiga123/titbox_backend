import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  taskId: z.string(),
  name: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable()
}).strict();
export const TaskEventCreateManyInputObjectSchema: z.ZodType<Prisma.TaskEventCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventCreateManyInput>;
export const TaskEventCreateManyInputObjectZodSchema = makeSchema();
