import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskEventFieldSelectObjectSchema as TaskEventFieldSelectObjectSchema } from './objects/TaskEventFieldSelect.schema';
import { TaskEventFieldUpdateManyMutationInputObjectSchema as TaskEventFieldUpdateManyMutationInputObjectSchema } from './objects/TaskEventFieldUpdateManyMutationInput.schema';
import { TaskEventFieldWhereInputObjectSchema as TaskEventFieldWhereInputObjectSchema } from './objects/TaskEventFieldWhereInput.schema';

export const TaskEventFieldUpdateManyAndReturnSchema: z.ZodType<Prisma.TaskEventFieldUpdateManyAndReturnArgs> = z.object({ select: TaskEventFieldSelectObjectSchema.optional(), data: TaskEventFieldUpdateManyMutationInputObjectSchema, where: TaskEventFieldWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TaskEventFieldUpdateManyAndReturnArgs>;

export const TaskEventFieldUpdateManyAndReturnZodSchema = z.object({ select: TaskEventFieldSelectObjectSchema.optional(), data: TaskEventFieldUpdateManyMutationInputObjectSchema, where: TaskEventFieldWhereInputObjectSchema.optional() }).strict();