import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskFieldCreateManyInputObjectSchema as TaskFieldCreateManyInputObjectSchema } from './objects/TaskFieldCreateManyInput.schema';

export const TaskFieldCreateManySchema: z.ZodType<Prisma.TaskFieldCreateManyArgs> = z.object({ data: z.union([ TaskFieldCreateManyInputObjectSchema, z.array(TaskFieldCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TaskFieldCreateManyArgs>;

export const TaskFieldCreateManyZodSchema = z.object({ data: z.union([ TaskFieldCreateManyInputObjectSchema, z.array(TaskFieldCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();