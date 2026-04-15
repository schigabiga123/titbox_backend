import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldCreateWithoutAttachmentsInputObjectSchema as TaskEventFieldCreateWithoutAttachmentsInputObjectSchema } from './TaskEventFieldCreateWithoutAttachmentsInput.schema';
import { TaskEventFieldUncheckedCreateWithoutAttachmentsInputObjectSchema as TaskEventFieldUncheckedCreateWithoutAttachmentsInputObjectSchema } from './TaskEventFieldUncheckedCreateWithoutAttachmentsInput.schema';
import { TaskEventFieldCreateOrConnectWithoutAttachmentsInputObjectSchema as TaskEventFieldCreateOrConnectWithoutAttachmentsInputObjectSchema } from './TaskEventFieldCreateOrConnectWithoutAttachmentsInput.schema';
import { TaskEventFieldWhereUniqueInputObjectSchema as TaskEventFieldWhereUniqueInputObjectSchema } from './TaskEventFieldWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskEventFieldCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskEventFieldUncheckedCreateWithoutAttachmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskEventFieldCreateOrConnectWithoutAttachmentsInputObjectSchema).optional(),
  connect: z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema).optional()
}).strict();
export const TaskEventFieldCreateNestedOneWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.TaskEventFieldCreateNestedOneWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldCreateNestedOneWithoutAttachmentsInput>;
export const TaskEventFieldCreateNestedOneWithoutAttachmentsInputObjectZodSchema = makeSchema();
