import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskFieldCreateWithoutAttachmentsInputObjectSchema as TaskFieldCreateWithoutAttachmentsInputObjectSchema } from './TaskFieldCreateWithoutAttachmentsInput.schema';
import { TaskFieldUncheckedCreateWithoutAttachmentsInputObjectSchema as TaskFieldUncheckedCreateWithoutAttachmentsInputObjectSchema } from './TaskFieldUncheckedCreateWithoutAttachmentsInput.schema';
import { TaskFieldCreateOrConnectWithoutAttachmentsInputObjectSchema as TaskFieldCreateOrConnectWithoutAttachmentsInputObjectSchema } from './TaskFieldCreateOrConnectWithoutAttachmentsInput.schema';
import { TaskFieldWhereUniqueInputObjectSchema as TaskFieldWhereUniqueInputObjectSchema } from './TaskFieldWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskFieldCreateWithoutAttachmentsInputObjectSchema), z.lazy(() => TaskFieldUncheckedCreateWithoutAttachmentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskFieldCreateOrConnectWithoutAttachmentsInputObjectSchema).optional(),
  connect: z.lazy(() => TaskFieldWhereUniqueInputObjectSchema).optional()
}).strict();
export const TaskFieldCreateNestedOneWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.TaskFieldCreateNestedOneWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskFieldCreateNestedOneWithoutAttachmentsInput>;
export const TaskFieldCreateNestedOneWithoutAttachmentsInputObjectZodSchema = makeSchema();
