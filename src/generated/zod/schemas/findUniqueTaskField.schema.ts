import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskFieldSelectObjectSchema as TaskFieldSelectObjectSchema } from './objects/TaskFieldSelect.schema';
import { TaskFieldIncludeObjectSchema as TaskFieldIncludeObjectSchema } from './objects/TaskFieldInclude.schema';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './objects/TaskFieldWhereUniqueInput.schema';

export const TaskFieldFindUniqueSchema: z.ZodType<Prisma.TaskFieldFindUniqueArgs> = z.object({ select: TaskFieldSelectObjectSchema.optional(), include: TaskFieldIncludeObjectSchema.optional(), where: TaskFieldWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TaskFieldFindUniqueArgs>;

export const TaskFieldFindUniqueZodSchema = z.object({ select: TaskFieldSelectObjectSchema.optional(), include: TaskFieldIncludeObjectSchema.optional(), where: TaskFieldWhereUniqueInputObjectSchema }).strict();