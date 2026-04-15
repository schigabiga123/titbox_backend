import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldWhereUniqueInputObjectSchema as TaskEventFieldWhereUniqueInputObjectSchema } from './TaskEventFieldWhereUniqueInput.schema';
import { TaskEventFieldCreateWithoutAttachmentsInputObjectSchema as TaskEventFieldCreateWithoutAttachmentsInputObjectSchema } from './TaskEventFieldCreateWithoutAttachmentsInput.schema';
import { TaskEventFieldUncheckedCreateWithoutAttachmentsInputObjectSchema as TaskEventFieldUncheckedCreateWithoutAttachmentsInputObjectSchema } from './TaskEventFieldUncheckedCreateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskEventFieldCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskEventFieldUncheckedCreateWithoutAttachmentsInputObjectSchema)])
}).strict();
export const TaskEventFieldCreateOrConnectWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.TaskEventFieldCreateOrConnectWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldCreateOrConnectWithoutAttachmentsInput>;
export const TaskEventFieldCreateOrConnectWithoutAttachmentsInputObjectZodSchema = makeSchema();
