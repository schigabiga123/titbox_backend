import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventFieldSelectObjectSchema as TaskEventFieldSelectObjectSchema } from './objects/TaskEventFieldSelect.schema';
import { TaskEventFieldIncludeObjectSchema as TaskEventFieldIncludeObjectSchema } from './objects/TaskEventFieldInclude.schema';
import { TaskEventFieldCreateInputObjectSchema as TaskEventFieldCreateInputObjectSchema } from './objects/TaskEventFieldCreateInput.schema';
import { TaskEventFieldUncheckedCreateInputObjectSchema as TaskEventFieldUncheckedCreateInputObjectSchema } from './objects/TaskEventFieldUncheckedCreateInput.schema';

export const TaskEventFieldCreateOneSchema: z.ZodType<Prisma.TaskEventFieldCreateArgs> = z.object({ select: TaskEventFieldSelectObjectSchema.optional(), include: TaskEventFieldIncludeObjectSchema.optional(), data: z.union([TaskEventFieldCreateInputObjectSchema, TaskEventFieldUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TaskEventFieldCreateArgs>;

export const TaskEventFieldCreateOneZodSchema = z.object({ select: TaskEventFieldSelectObjectSchema.optional(), include: TaskEventFieldIncludeObjectSchema.optional(), data: z.union([TaskEventFieldCreateInputObjectSchema, TaskEventFieldUncheckedCreateInputObjectSchema]) }).strict();