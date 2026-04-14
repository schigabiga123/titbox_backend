import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventFieldSelectObjectSchema as TaskEventFieldSelectObjectSchema } from './objects/TaskEventFieldSelect.schema';
import { TaskEventFieldIncludeObjectSchema as TaskEventFieldIncludeObjectSchema } from './objects/TaskEventFieldInclude.schema';
import { TaskEventFieldWhereUniqueInputObjectSchema as TaskEventFieldWhereUniqueInputObjectSchema } from './objects/TaskEventFieldWhereUniqueInput.schema';
import { TaskEventFieldCreateInputObjectSchema as TaskEventFieldCreateInputObjectSchema } from './objects/TaskEventFieldCreateInput.schema';
import { TaskEventFieldUncheckedCreateInputObjectSchema as TaskEventFieldUncheckedCreateInputObjectSchema } from './objects/TaskEventFieldUncheckedCreateInput.schema';
import { TaskEventFieldUpdateInputObjectSchema as TaskEventFieldUpdateInputObjectSchema } from './objects/TaskEventFieldUpdateInput.schema';
import { TaskEventFieldUncheckedUpdateInputObjectSchema as TaskEventFieldUncheckedUpdateInputObjectSchema } from './objects/TaskEventFieldUncheckedUpdateInput.schema';

export const TaskEventFieldUpsertOneSchema: z.ZodType<Prisma.TaskEventFieldUpsertArgs> = z.object({ select: TaskEventFieldSelectObjectSchema.optional(), include: TaskEventFieldIncludeObjectSchema.optional(), where: TaskEventFieldWhereUniqueInputObjectSchema, create: z.union([ TaskEventFieldCreateInputObjectSchema, TaskEventFieldUncheckedCreateInputObjectSchema ]), update: z.union([ TaskEventFieldUpdateInputObjectSchema, TaskEventFieldUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TaskEventFieldUpsertArgs>;

export const TaskEventFieldUpsertOneZodSchema = z.object({ select: TaskEventFieldSelectObjectSchema.optional(), include: TaskEventFieldIncludeObjectSchema.optional(), where: TaskEventFieldWhereUniqueInputObjectSchema, create: z.union([ TaskEventFieldCreateInputObjectSchema, TaskEventFieldUncheckedCreateInputObjectSchema ]), update: z.union([ TaskEventFieldUpdateInputObjectSchema, TaskEventFieldUncheckedUpdateInputObjectSchema ]) }).strict();