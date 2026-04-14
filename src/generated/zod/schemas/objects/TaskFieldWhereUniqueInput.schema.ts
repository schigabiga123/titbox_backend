import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const TaskFieldWhereUniqueInputObjectSchema: z.ZodType<Prisma.TaskFieldWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldWhereUniqueInput>;
export const TaskFieldWhereUniqueInputObjectZodSchema = makeSchema();
