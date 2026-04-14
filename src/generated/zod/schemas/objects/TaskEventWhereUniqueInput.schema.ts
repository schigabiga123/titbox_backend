import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const TaskEventWhereUniqueInputObjectSchema: z.ZodType<Prisma.TaskEventWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventWhereUniqueInput>;
export const TaskEventWhereUniqueInputObjectZodSchema = makeSchema();
