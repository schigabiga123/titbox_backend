import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './TaskEventWhereUniqueInput.schema';
import { TaskEventCreateWithoutFieldsInputObjectSchema as TaskEventCreateWithoutFieldsInputObjectSchema } from './TaskEventCreateWithoutFieldsInput.schema';
import { TaskEventUncheckedCreateWithoutFieldsInputObjectSchema as TaskEventUncheckedCreateWithoutFieldsInputObjectSchema } from './TaskEventUncheckedCreateWithoutFieldsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskEventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskEventCreateWithoutFieldsInputObjectSchema), z.lazy(() => TaskEventUncheckedCreateWithoutFieldsInputObjectSchema)])
}).strict();
export const TaskEventCreateOrConnectWithoutFieldsInputObjectSchema: z.ZodType<Prisma.TaskEventCreateOrConnectWithoutFieldsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventCreateOrConnectWithoutFieldsInput>;
export const TaskEventCreateOrConnectWithoutFieldsInputObjectZodSchema = makeSchema();
