import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskFieldSelectObjectSchema as TaskFieldSelectObjectSchema } from './objects/TaskFieldSelect.schema';
import { TaskFieldCreateManyInputObjectSchema as TaskFieldCreateManyInputObjectSchema } from './objects/TaskFieldCreateManyInput.schema';

export const TaskFieldCreateManyAndReturnSchema: z.ZodType<Prisma.TaskFieldCreateManyAndReturnArgs> = z.object({ select: TaskFieldSelectObjectSchema.optional(), data: z.union([ TaskFieldCreateManyInputObjectSchema, z.array(TaskFieldCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TaskFieldCreateManyAndReturnArgs>;

export const TaskFieldCreateManyAndReturnZodSchema = z.object({ select: TaskFieldSelectObjectSchema.optional(), data: z.union([ TaskFieldCreateManyInputObjectSchema, z.array(TaskFieldCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();