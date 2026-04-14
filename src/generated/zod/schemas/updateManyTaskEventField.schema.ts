import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventFieldUpdateManyMutationInputObjectSchema as TaskEventFieldUpdateManyMutationInputObjectSchema } from './objects/TaskEventFieldUpdateManyMutationInput.schema';
import { TaskEventFieldWhereInputObjectSchema as TaskEventFieldWhereInputObjectSchema } from './objects/TaskEventFieldWhereInput.schema';

export const TaskEventFieldUpdateManySchema: z.ZodType<Prisma.TaskEventFieldUpdateManyArgs> = z.object({ data: TaskEventFieldUpdateManyMutationInputObjectSchema, where: TaskEventFieldWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventFieldUpdateManyArgs>;

export const TaskEventFieldUpdateManyZodSchema = z.object({ data: TaskEventFieldUpdateManyMutationInputObjectSchema, where: TaskEventFieldWhereInputObjectSchema.optional() }).strict();