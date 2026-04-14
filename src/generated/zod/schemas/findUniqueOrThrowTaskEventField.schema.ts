import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventFieldSelectObjectSchema as TaskEventFieldSelectObjectSchema } from './objects/TaskEventFieldSelect.schema';
import { TaskEventFieldIncludeObjectSchema as TaskEventFieldIncludeObjectSchema } from './objects/TaskEventFieldInclude.schema';
import { TaskEventFieldWhereUniqueInputObjectSchema as TaskEventFieldWhereUniqueInputObjectSchema } from './objects/TaskEventFieldWhereUniqueInput.schema';

export const TaskEventFieldFindUniqueOrThrowSchema: z.ZodType<Prisma.TaskEventFieldFindUniqueOrThrowArgs> = z.object({ select: TaskEventFieldSelectObjectSchema.optional(), include: TaskEventFieldIncludeObjectSchema.optional(), where: TaskEventFieldWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TaskEventFieldFindUniqueOrThrowArgs>;

export const TaskEventFieldFindUniqueOrThrowZodSchema = z.object({ select: TaskEventFieldSelectObjectSchema.optional(), include: TaskEventFieldIncludeObjectSchema.optional(), where: TaskEventFieldWhereUniqueInputObjectSchema }).strict();