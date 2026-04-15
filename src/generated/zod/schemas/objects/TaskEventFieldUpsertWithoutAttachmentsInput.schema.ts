import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldUpdateWithoutAttachmentsInputObjectSchema as TaskEventFieldUpdateWithoutAttachmentsInputObjectSchema } from './TaskEventFieldUpdateWithoutAttachmentsInput.schema';
import { TaskEventFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema as TaskEventFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './TaskEventFieldUncheckedUpdateWithoutAttachmentsInput.schema';
import { TaskEventFieldCreateWithoutAttachmentsInputObjectSchema as TaskEventFieldCreateWithoutAttachmentsInputObjectSchema } from './TaskEventFieldCreateWithoutAttachmentsInput.schema';
import { TaskEventFieldUncheckedCreateWithoutAttachmentsInputObjectSchema as TaskEventFieldUncheckedCreateWithoutAttachmentsInputObjectSchema } from './TaskEventFieldUncheckedCreateWithoutAttachmentsInput.schema';
import { TaskEventFieldWhereInputObjectSchema as TaskEventFieldWhereInputObjectSchema } from './TaskEventFieldWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TaskEventFieldUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskEventFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskEventFieldCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskEventFieldUncheckedCreateWithoutAttachmentsInputObjectSchema)]),
  where: z.lazy(() => TaskEventFieldWhereInputObjectSchema).optional()
}).strict();
export const TaskEventFieldUpsertWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.TaskEventFieldUpsertWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldUpsertWithoutAttachmentsInput>;
export const TaskEventFieldUpsertWithoutAttachmentsInputObjectZodSchema = makeSchema();
