import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventFieldSelectObjectSchema as TaskEventFieldSelectObjectSchema } from './objects/TaskEventFieldSelect.schema';
import { TaskEventFieldIncludeObjectSchema as TaskEventFieldIncludeObjectSchema } from './objects/TaskEventFieldInclude.schema';
import { TaskEventFieldWhereUniqueInputObjectSchema as TaskEventFieldWhereUniqueInputObjectSchema } from './objects/TaskEventFieldWhereUniqueInput.schema';

export const TaskEventFieldDeleteOneSchema: z.ZodType<Prisma.TaskEventFieldDeleteArgs> = z.object({ select: TaskEventFieldSelectObjectSchema.optional(), include: TaskEventFieldIncludeObjectSchema.optional(), where: TaskEventFieldWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TaskEventFieldDeleteArgs>;

export const TaskEventFieldDeleteOneZodSchema = z.object({ select: TaskEventFieldSelectObjectSchema.optional(), include: TaskEventFieldIncludeObjectSchema.optional(), where: TaskEventFieldWhereUniqueInputObjectSchema }).strict();