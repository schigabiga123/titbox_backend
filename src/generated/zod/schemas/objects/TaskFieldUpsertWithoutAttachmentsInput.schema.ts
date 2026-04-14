import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldUpdateWithoutAttachmentsInputObjectSchema as TaskFieldUpdateWithoutAttachmentsInputObjectSchema } from './TaskFieldUpdateWithoutAttachmentsInput.schema';
import { TaskFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema as TaskFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './TaskFieldUncheckedUpdateWithoutAttachmentsInput.schema';
import { TaskFieldCreateWithoutAttachmentsInputObjectSchema as TaskFieldCreateWithoutAttachmentsInputObjectSchema } from './TaskFieldCreateWithoutAttachmentsInput.schema';
import { TaskFieldUncheckedCreateWithoutAttachmentsInputObjectSchema as TaskFieldUncheckedCreateWithoutAttachmentsInputObjectSchema } from './TaskFieldUncheckedCreateWithoutAttachmentsInput.schema';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './TaskFieldWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TaskFieldUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskFieldCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskFieldUncheckedCreateWithoutAttachmentsInputObjectSchema)]),
  where: z.lazy(() => TaskFieldWhereInputObjectSchema).optional()
}).strict();
export const TaskFieldUpsertWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.TaskFieldUpsertWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUpsertWithoutAttachmentsInput>;
export const TaskFieldUpsertWithoutAttachmentsInputObjectZodSchema = makeSchema();
