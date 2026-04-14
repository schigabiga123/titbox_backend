import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  pocketId: z.string().optional().nullable(),
  name: z.string(),
  data: z.string().optional().nullable(),
  type: z.string().optional().nullable()
}).strict();
export const TaskFieldCreateManyTaskInputObjectSchema: z.ZodType<Prisma.TaskFieldCreateManyTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldCreateManyTaskInput>;
export const TaskFieldCreateManyTaskInputObjectZodSchema = makeSchema();
