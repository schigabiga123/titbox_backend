import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './TaskFieldWhereUniqueInput.schema';
import { TaskFieldCreateWithoutAttachmentsInputObjectSchema as TaskFieldCreateWithoutAttachmentsInputObjectSchema } from './TaskFieldCreateWithoutAttachmentsInput.schema';
import { TaskFieldUncheckedCreateWithoutAttachmentsInputObjectSchema as TaskFieldUncheckedCreateWithoutAttachmentsInputObjectSchema } from './TaskFieldUncheckedCreateWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskFieldWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskFieldCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskFieldUncheckedCreateWithoutAttachmentsInputObjectSchema)])
}).strict();
export const TaskFieldCreateOrConnectWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.TaskFieldCreateOrConnectWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldCreateOrConnectWithoutAttachmentsInput>;
export const TaskFieldCreateOrConnectWithoutAttachmentsInputObjectZodSchema = makeSchema();
