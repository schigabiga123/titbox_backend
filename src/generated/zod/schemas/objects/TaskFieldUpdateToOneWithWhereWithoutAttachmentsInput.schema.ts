import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './TaskFieldWhereInput.schema';
import { TaskFieldUpdateWithoutAttachmentsInputObjectSchema as TaskFieldUpdateWithoutAttachmentsInputObjectSchema } from './TaskFieldUpdateWithoutAttachmentsInput.schema';
import { TaskFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema as TaskFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './TaskFieldUncheckedUpdateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskFieldWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TaskFieldUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema)])
}).strict();
export const TaskFieldUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.TaskFieldUpdateToOneWithWhereWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUpdateToOneWithWhereWithoutAttachmentsInput>;
export const TaskFieldUpdateToOneWithWhereWithoutAttachmentsInputObjectZodSchema = makeSchema();
