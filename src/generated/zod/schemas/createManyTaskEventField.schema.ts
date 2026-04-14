import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventFieldCreateManyInputObjectSchema as TaskEventFieldCreateManyInputObjectSchema } from './objects/TaskEventFieldCreateManyInput.schema';

export const TaskEventFieldCreateManySchema: z.ZodType<Prisma.TaskEventFieldCreateManyArgs> = z.object({ data: z.union([ TaskEventFieldCreateManyInputObjectSchema, z.array(TaskEventFieldCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventFieldCreateManyArgs>;

export const TaskEventFieldCreateManyZodSchema = z.object({ data: z.union([ TaskEventFieldCreateManyInputObjectSchema, z.array(TaskEventFieldCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();