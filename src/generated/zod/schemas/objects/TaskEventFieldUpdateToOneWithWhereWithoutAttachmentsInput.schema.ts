import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldWhereInputObjectSchema as TaskEventFieldWhereInputObjectSchema } from './TaskEventFieldWhereInput.schema';
import { TaskEventFieldUpdateWithoutAttachmentsInputObjectSchema as TaskEventFieldUpdateWithoutAttachmentsInputObjectSchema } from './TaskEventFieldUpdateWithoutAttachmentsInput.schema';
import { TaskEventFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema as TaskEventFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './TaskEventFieldUncheckedUpdateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskEventFieldWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TaskEventFieldUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskEventFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema)])
}).strict();
export const TaskEventFieldUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.TaskEventFieldUpdateToOneWithWhereWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldUpdateToOneWithWhereWithoutAttachmentsInput>;
export const TaskEventFieldUpdateToOneWithWhereWithoutAttachmentsInputObjectZodSchema = makeSchema();
