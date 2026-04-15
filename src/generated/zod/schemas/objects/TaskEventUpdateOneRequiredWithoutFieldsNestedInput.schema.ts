import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventCreateWithoutFieldsInputObjectSchema as TaskEventCreateWithoutFieldsInputObjectSchema } from './TaskEventCreateWithoutFieldsInput.schema';
import { TaskEventUncheckedCreateWithoutFieldsInputObjectSchema as TaskEventUncheckedCreateWithoutFieldsInputObjectSchema } from './TaskEventUncheckedCreateWithoutFieldsInput.schema';
import { TaskEventCreateOrConnectWithoutFieldsInputObjectSchema as TaskEventCreateOrConnectWithoutFieldsInputObjectSchema } from './TaskEventCreateOrConnectWithoutFieldsInput.schema';
import { TaskEventUpsertWithoutFieldsInputObjectSchema as TaskEventUpsertWithoutFieldsInputObjectSchema } from './TaskEventUpsertWithoutFieldsInput.schema';
import { TaskEventWhereUniqueInputObjectSchema as TaskEventWhereUniqueInputObjectSchema } from './TaskEventWhereUniqueInput.schema';
import { TaskEventUpdateToOneWithWhereWithoutFieldsInputObjectSchema as TaskEventUpdateToOneWithWhereWithoutFieldsInputObjectSchema } from './TaskEventUpdateToOneWithWhereWithoutFieldsInput.schema';
import { TaskEventUpdateWithoutFieldsInputObjectSchema as TaskEventUpdateWithoutFieldsInputObjectSchema } from './TaskEventUpdateWithoutFieldsInput.schema';
import { TaskEventUncheckedUpdateWithoutFieldsInputObjectSchema as TaskEventUncheckedUpdateWithoutFieldsInputObjectSchema } from './TaskEventUncheckedUpdateWithoutFieldsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskEventCreateWithoutFieldsInputObjectSchema), z.lazy(() => TaskEventUncheckedCreateWithoutFieldsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskEventCreateOrConnectWithoutFieldsInputObjectSchema).optional(),
  upsert: z.lazy(() => TaskEventUpsertWithoutFieldsInputObjectSchema).optional(),
  connect: z.lazy(() => TaskEventWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TaskEventUpdateToOneWithWhereWithoutFieldsInputObjectSchema), z.lazy(() => TaskEventUpdateWithoutFieldsInputObjectSchema), z.lazy(() => TaskEventUncheckedUpdateWithoutFieldsInputObjectSchema)]).optional()
}).strict();
export const TaskEventUpdateOneRequiredWithoutFieldsNestedInputObjectSchema: z.ZodType<Prisma.TaskEventUpdateOneRequiredWithoutFieldsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventUpdateOneRequiredWithoutFieldsNestedInput>;
export const TaskEventUpdateOneRequiredWithoutFieldsNestedInputObjectZodSchema = makeSchema();
