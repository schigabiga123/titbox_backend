import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutPortaChecklistInputObjectSchema as TaskCreateWithoutPortaChecklistInputObjectSchema } from './TaskCreateWithoutPortaChecklistInput.schema';
import { TaskUncheckedCreateWithoutPortaChecklistInputObjectSchema as TaskUncheckedCreateWithoutPortaChecklistInputObjectSchema } from './TaskUncheckedCreateWithoutPortaChecklistInput.schema';
import { TaskCreateOrConnectWithoutPortaChecklistInputObjectSchema as TaskCreateOrConnectWithoutPortaChecklistInputObjectSchema } from './TaskCreateOrConnectWithoutPortaChecklistInput.schema';
import { TaskUpsertWithoutPortaChecklistInputObjectSchema as TaskUpsertWithoutPortaChecklistInputObjectSchema } from './TaskUpsertWithoutPortaChecklistInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateToOneWithWhereWithoutPortaChecklistInputObjectSchema as TaskUpdateToOneWithWhereWithoutPortaChecklistInputObjectSchema } from './TaskUpdateToOneWithWhereWithoutPortaChecklistInput.schema';
import { TaskUpdateWithoutPortaChecklistInputObjectSchema as TaskUpdateWithoutPortaChecklistInputObjectSchema } from './TaskUpdateWithoutPortaChecklistInput.schema';
import { TaskUncheckedUpdateWithoutPortaChecklistInputObjectSchema as TaskUncheckedUpdateWithoutPortaChecklistInputObjectSchema } from './TaskUncheckedUpdateWithoutPortaChecklistInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutPortaChecklistInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutPortaChecklistInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutPortaChecklistInputObjectSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutPortaChecklistInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TaskUpdateToOneWithWhereWithoutPortaChecklistInputObjectSchema), z.lazy(() => TaskUpdateWithoutPortaChecklistInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutPortaChecklistInputObjectSchema)]).optional()
}).strict();
export const TaskUpdateOneRequiredWithoutPortaChecklistNestedInputObjectSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutPortaChecklistNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateOneRequiredWithoutPortaChecklistNestedInput>;
export const TaskUpdateOneRequiredWithoutPortaChecklistNestedInputObjectZodSchema = makeSchema();
