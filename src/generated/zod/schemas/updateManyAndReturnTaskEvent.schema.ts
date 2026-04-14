import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventSelectObjectSchema as TaskEventSelectObjectSchema } from './objects/TaskEventSelect.schema';
import { TaskEventUpdateManyMutationInputObjectSchema as TaskEventUpdateManyMutationInputObjectSchema } from './objects/TaskEventUpdateManyMutationInput.schema';
import { TaskEventWhereInputObjectSchema as TaskEventWhereInputObjectSchema } from './objects/TaskEventWhereInput.schema';

export const TaskEventUpdateManyAndReturnSchema: z.ZodType<Prisma.TaskEventUpdateManyAndReturnArgs> = z.object({ select: TaskEventSelectObjectSchema.optional(), data: TaskEventUpdateManyMutationInputObjectSchema, where: TaskEventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventUpdateManyAndReturnArgs>;

export const TaskEventUpdateManyAndReturnZodSchema = z.object({ select: TaskEventSelectObjectSchema.optional(), data: TaskEventUpdateManyMutationInputObjectSchema, where: TaskEventWhereInputObjectSchema.optional() }).strict();