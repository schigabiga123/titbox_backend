import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskFieldSelectObjectSchema as TaskFieldSelectObjectSchema } from './objects/TaskFieldSelect.schema';
import { TaskFieldIncludeObjectSchema as TaskFieldIncludeObjectSchema } from './objects/TaskFieldInclude.schema';
import { TaskFieldCreateInputObjectSchema as TaskFieldCreateInputObjectSchema } from './objects/TaskFieldCreateInput.schema';
import { TaskFieldUncheckedCreateInputObjectSchema as TaskFieldUncheckedCreateInputObjectSchema } from './objects/TaskFieldUncheckedCreateInput.schema';

export const TaskFieldCreateOneSchema: z.ZodType<Prisma.TaskFieldCreateArgs> = z.object({ select: TaskFieldSelectObjectSchema.optional(), include: TaskFieldIncludeObjectSchema.optional(), data: z.union([TaskFieldCreateInputObjectSchema, TaskFieldUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TaskFieldCreateArgs>;

export const TaskFieldCreateOneZodSchema = z.object({ select: TaskFieldSelectObjectSchema.optional(), include: TaskFieldIncludeObjectSchema.optional(), data: z.union([TaskFieldCreateInputObjectSchema, TaskFieldUncheckedCreateInputObjectSchema]) }).strict();