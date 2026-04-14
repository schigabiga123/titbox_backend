import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskFieldSelectObjectSchema as TaskFieldSelectObjectSchema } from './objects/TaskFieldSelect.schema';
import { TaskFieldUpdateManyMutationInputObjectSchema as TaskFieldUpdateManyMutationInputObjectSchema } from './objects/TaskFieldUpdateManyMutationInput.schema';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './objects/TaskFieldWhereInput.schema';

export const TaskFieldUpdateManyAndReturnSchema: z.ZodType<Prisma.TaskFieldUpdateManyAndReturnArgs> = z.object({ select: TaskFieldSelectObjectSchema.optional(), data: TaskFieldUpdateManyMutationInputObjectSchema, where: TaskFieldWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaskFieldUpdateManyAndReturnArgs>;

export const TaskFieldUpdateManyAndReturnZodSchema = z.object({ select: TaskFieldSelectObjectSchema.optional(), data: TaskFieldUpdateManyMutationInputObjectSchema, where: TaskFieldWhereInputObjectSchema.optional() }).strict();