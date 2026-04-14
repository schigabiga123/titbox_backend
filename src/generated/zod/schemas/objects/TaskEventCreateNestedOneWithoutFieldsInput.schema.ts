import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventCreateWithoutFieldsInputObjectSchema as TaskEventCreateWithoutFieldsInputObjectSchema } from './TaskEventCreateWithoutFieldsInput.schema';
import { TaskEventUncheckedCreateWithoutFieldsInputObjectSchema as TaskEventUncheckedCreateWithoutFieldsInputObjectSchema } from './TaskEventUncheckedCreateWithoutFieldsInput.schema';
import { TaskEventCreateOrConnectWithoutFieldsInputObjectSchema as TaskEventCreateOrConnectWithoutFieldsInputObjectSchema } from './TaskEventCreateOrConnectWithoutFieldsInput.schema';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './TaskEventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskEventCreateWithoutFieldsInputObjectSchema), z.lazy(() => TaskEventUncheckedCreateWithoutFieldsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskEventCreateOrConnectWithoutFieldsInputObjectSchema).optional(),
  connect: z.lazy(() => TaskEventWhereUniqueInputObjectSchema).optional()
}).strict();
export const TaskEventCreateNestedOneWithoutFieldsInputObjectSchema: z.ZodType<Prisma.TaskEventCreateNestedOneWithoutFieldsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventCreateNestedOneWithoutFieldsInput>;
export const TaskEventCreateNestedOneWithoutFieldsInputObjectZodSchema = makeSchema();
