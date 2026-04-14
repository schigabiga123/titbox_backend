import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldCreateWithoutAttachmentsInputObjectSchema as TaskFieldCreateWithoutAttachmentsInputObjectSchema } from './TaskFieldCreateWithoutAttachmentsInput.schema';
import { TaskFieldUncheckedCreateWithoutAttachmentsInputObjectSchema as TaskFieldUncheckedCreateWithoutAttachmentsInputObjectSchema } from './TaskFieldUncheckedCreateWithoutAttachmentsInput.schema';
import { TaskFieldCreateOrConnectWithoutAttachmentsInputObjectSchema as TaskFieldCreateOrConnectWithoutAttachmentsInputObjectSchema } from './TaskFieldCreateOrConnectWithoutAttachmentsInput.schema';
import { TaskFieldUpsertWithoutAttachmentsInputObjectSchema as TaskFieldUpsertWithoutAttachmentsInputObjectSchema } from './TaskFieldUpsertWithoutAttachmentsInput.schema';
import { TaskFieldWhereInputObjectSchema as TaskFieldWhereInputObjectSchema } from './TaskFieldWhereInput.schema';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './TaskFieldWhereUniqueInput.schema';
import { TaskFieldUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema as TaskFieldUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema } from './TaskFieldUpdateToOneWithWhereWithoutAttachmentsInput.schema';
import { TaskFieldUpdateWithoutAttachmentsInputObjectSchema as TaskFieldUpdateWithoutAttachmentsInputObjectSchema } from './TaskFieldUpdateWithoutAttachmentsInput.schema';
import { TaskFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema as TaskFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema } from './TaskFieldUncheckedUpdateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskFieldCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskFieldUncheckedCreateWithoutAttachmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskFieldCreateOrConnectWithoutAttachmentsInputObjectSchema).optional(),
  upsert: z.lazy(() => TaskFieldUpsertWithoutAttachmentsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TaskFieldWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TaskFieldWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TaskFieldWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TaskFieldUpdateToOneWithWhereWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskFieldUpdateWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskFieldUncheckedUpdateWithoutAttachmentsInputObjectSchema)]).optional()
}).strict();
export const TaskFieldUpdateOneWithoutAttachmentsNestedInputObjectSchema: z.ZodType<Prisma.TaskFieldUpdateOneWithoutAttachmentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldUpdateOneWithoutAttachmentsNestedInput>;
export const TaskFieldUpdateOneWithoutAttachmentsNestedInputObjectZodSchema = makeSchema();
