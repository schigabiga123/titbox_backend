import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventCreateManyInputObjectSchema as TaskEventCreateManyInputObjectSchema } from './objects/TaskEventCreateManyInput.schema';

export const TaskEventCreateManySchema: z.ZodType<Prisma.TaskEventCreateManyArgs> = z.object({ data: z.union([ TaskEventCreateManyInputObjectSchema, z.array(TaskEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventCreateManyArgs>;

export const TaskEventCreateManyZodSchema = z.object({ data: z.union([ TaskEventCreateManyInputObjectSchema, z.array(TaskEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();