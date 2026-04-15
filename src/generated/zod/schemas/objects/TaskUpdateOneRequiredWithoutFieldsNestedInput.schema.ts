import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutFieldsInputObjectSchema as TaskCreateWithoutFieldsInputObjectSchema } from './TaskCreateWithoutFieldsInput.schema';
import { TaskUncheckedCreateWithoutFieldsInputObjectSchema as TaskUncheckedCreateWithoutFieldsInputObjectSchema } from './TaskUncheckedCreateWithoutFieldsInput.schema';
import { TaskCreateOrConnectWithoutFieldsInputObjectSchema as TaskCreateOrConnectWithoutFieldsInputObjectSchema } from './TaskCreateOrConnectWithoutFieldsInput.schema';
import { TaskUpsertWithoutFieldsInputObjectSchema as TaskUpsertWithoutFieldsInputObjectSchema } from './TaskUpsertWithoutFieldsInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateToOneWithWhereWithoutFieldsInputObjectSchema as TaskUpdateToOneWithWhereWithoutFieldsInputObjectSchema } from './TaskUpdateToOneWithWhereWithoutFieldsInput.schema';
import { TaskUpdateWithoutFieldsInputObjectSchema as TaskUpdateWithoutFieldsInputObjectSchema } from './TaskUpdateWithoutFieldsInput.schema';
import { TaskUncheckedUpdateWithoutFieldsInputObjectSchema as TaskUncheckedUpdateWithoutFieldsInputObjectSchema } from './TaskUncheckedUpdateWithoutFieldsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutFieldsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutFieldsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutFieldsInputObjectSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutFieldsInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TaskUpdateToOneWithWhereWithoutFieldsInputObjectSchema), z.lazy(() => TaskUpdateWithoutFieldsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutFieldsInputObjectSchema)]).optional()
}).strict();
export const TaskUpdateOneRequiredWithoutFieldsNestedInputObjectSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutFieldsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateOneRequiredWithoutFieldsNestedInput>;
export const TaskUpdateOneRequiredWithoutFieldsNestedInputObjectZodSchema = makeSchema();
