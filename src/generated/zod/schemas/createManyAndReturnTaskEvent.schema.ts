import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventSelectObjectSchema as TaskEventSelectObjectSchema } from './objects/TaskEventSelect.schema';
import { TaskEventCreateManyInputObjectSchema as TaskEventCreateManyInputObjectSchema } from './objects/TaskEventCreateManyInput.schema';

export const TaskEventCreateManyAndReturnSchema: z.ZodType<Prisma.TaskEventCreateManyAndReturnArgs> = z.object({ select: TaskEventSelectObjectSchema.optional(), data: z.union([ TaskEventCreateManyInputObjectSchema, z.array(TaskEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventCreateManyAndReturnArgs>;

export const TaskEventCreateManyAndReturnZodSchema = z.object({ select: TaskEventSelectObjectSchema.optional(), data: z.union([ TaskEventCreateManyInputObjectSchema, z.array(TaskEventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();