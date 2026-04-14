import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventFieldSelectObjectSchema as TaskEventFieldSelectObjectSchema } from './objects/TaskEventFieldSelect.schema';
import { TaskEventFieldCreateManyInputObjectSchema as TaskEventFieldCreateManyInputObjectSchema } from './objects/TaskEventFieldCreateManyInput.schema';

export const TaskEventFieldCreateManyAndReturnSchema: z.ZodType<Prisma.TaskEventFieldCreateManyAndReturnArgs> = z.object({ select: TaskEventFieldSelectObjectSchema.optional(), data: z.union([ TaskEventFieldCreateManyInputObjectSchema, z.array(TaskEventFieldCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventFieldCreateManyAndReturnArgs>;

export const TaskEventFieldCreateManyAndReturnZodSchema = z.object({ select: TaskEventFieldSelectObjectSchema.optional(), data: z.union([ TaskEventFieldCreateManyInputObjectSchema, z.array(TaskEventFieldCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();