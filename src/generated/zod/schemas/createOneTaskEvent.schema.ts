import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventSelectObjectSchema as TaskEventSelectObjectSchema } from './objects/TaskEventSelect.schema';
import { TaskEventIncludeObjectSchema as TaskEventIncludeObjectSchema } from './objects/TaskEventInclude.schema';
import { TaskEventCreateInputObjectSchema as TaskEventCreateInputObjectSchema } from './objects/TaskEventCreateInput.schema';
import { TaskEventUncheckedCreateInputObjectSchema as TaskEventUncheckedCreateInputObjectSchema } from './objects/TaskEventUncheckedCreateInput.schema';

export const TaskEventCreateOneSchema: z.ZodType<Prisma.TaskEventCreateArgs> = z.object({ select: TaskEventSelectObjectSchema.optional(), include: TaskEventIncludeObjectSchema.optional(), data: z.union([TaskEventCreateInputObjectSchema, TaskEventUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TaskEventCreateArgs>;

export const TaskEventCreateOneZodSchema = z.object({ select: TaskEventSelectObjectSchema.optional(), include: TaskEventIncludeObjectSchema.optional(), data: z.union([TaskEventCreateInputObjectSchema, TaskEventUncheckedCreateInputObjectSchema]) }).strict();