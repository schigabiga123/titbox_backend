import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskFieldUpdateManyMutationInputObjectSchema as TaskFieldUpdateManyMutationInputObjectSchema } from './objects/TaskFieldUpdateManyMutationInput.schema';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './objects/TaskFieldWhereInput.schema';

export const TaskFieldUpdateManySchema: z.ZodType<Prisma.TaskFieldUpdateManyArgs> = z.object({ data: TaskFieldUpdateManyMutationInputObjectSchema, where: TaskFieldWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaskFieldUpdateManyArgs>;

export const TaskFieldUpdateManyZodSchema = z.object({ data: TaskFieldUpdateManyMutationInputObjectSchema, where: TaskFieldWhereInputObjectSchema.optional() }).strict();