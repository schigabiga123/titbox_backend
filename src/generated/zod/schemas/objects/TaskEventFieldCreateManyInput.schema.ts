import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  taskEventId: z.string(),
  name: z.string(),
  data: z.string().optional().nullable(),
  type: z.string().optional().nullable()
}).strict();
export const TaskEventFieldCreateManyInputObjectSchema: z.ZodType<Prisma.TaskEventFieldCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldCreateManyInput>;
export const TaskEventFieldCreateManyInputObjectZodSchema = makeSchema();
