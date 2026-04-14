import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldCreateWithoutAttachmentsInputObjectSchema as TaskEventFieldCreateWithoutAttachmentsInputObjectSchema } from './TaskEventFieldCreateWithoutAttachmentsInput.schema';
import { TaskEventFieldUncheckedCreateWithoutAttachmentsInputObjectSchema as TaskEventFieldUncheckedCreateWithoutAttachmentsInputObjectSchema } from './TaskEventFieldUncheckedCreateWithoutAttachmentsInput.schema';
import { TaskEventFieldCreateOrConnectWithoutAttachmentsInputObjectSchema as TaskEventFieldCreateOrConnectWithoutAttachmentsInputObjectSchema } from './TaskEventFieldCreateOrConnectWithoutAttachmentsInput.schema';
import { TaskEventFieldUpsertWithoutAttachmentsInputObjectSchema as TaskEventFieldUpsertWithoutAttachmentsInputObjectSchema } from './TaskEventFieldUpsertWithoutAttachmentsInput.schema';
import { TaskEventFieldWhereInputObjectSchema as TaskEventFieldWhereInputObjectSchema } from './TaskEventFieldWhereInput.schema';
import { TaskEventFieldWhereUniqueInputObjectSchema as TaskEventFieldWhereUniqueInputObjectSchema } from './TaskEventFieldWhereUniqueInput.schema';
import { TaskEventFieldUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema as TaskEventFieldUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema } from './TaskEventFieldUpdateToOneWithWhereWithoutAttachmentsInput.schema';
import { TaskEventFieldUpdateWithoutAttachmentsInputObjectSchema as TaskEventFieldUpdateWithoutAttachmentsInputObjectSchema } from './TaskEventFieldUpdateWithoutAttachmentsInput.schema';
import { TaskEventFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema as TaskEventFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './TaskEventFieldUncheckedUpdateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskEventFieldCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskEventFieldUncheckedCreateWithoutAttachmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskEventFieldCreateOrConnectWithoutAttachmentsInputObjectSchema).optional(),
  upsert: z.lazy(() => TaskEventFieldUpsertWithoutAttachmentsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TaskEventFieldWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TaskEventFieldWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TaskEventFieldUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskEventFieldUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskEventFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema)]).optional()
}).strict();
export const TaskEventFieldUpdateOneWithoutAttachmentsNestedInputObjectSchema: z.ZodType<Prisma.TaskEventFieldUpdateOneWithoutAttachmentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldUpdateOneWithoutAttachmentsNestedInput>;
export const TaskEventFieldUpdateOneWithoutAttachmentsNestedInputObjectZodSchema = makeSchema();
