import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutInspectionsInputObjectSchema as TaskCreateWithoutInspectionsInputObjectSchema } from './TaskCreateWithoutInspectionsInput.schema';
import { TaskUncheckedCreateWithoutInspectionsInputObjectSchema as TaskUncheckedCreateWithoutInspectionsInputObjectSchema } from './TaskUncheckedCreateWithoutInspectionsInput.schema';
import { TaskCreateOrConnectWithoutInspectionsInputObjectSchema as TaskCreateOrConnectWithoutInspectionsInputObjectSchema } from './TaskCreateOrConnectWithoutInspectionsInput.schema';
import { TaskUpsertWithoutInspectionsInputObjectSchema as TaskUpsertWithoutInspectionsInputObjectSchema } from './TaskUpsertWithoutInspectionsInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateToOneWithWhereWithoutInspectionsInputObjectSchema as TaskUpdateToOneWithWhereWithoutInspectionsInputObjectSchema } from './TaskUpdateToOneWithWhereWithoutInspectionsInput.schema';
import { TaskUpdateWithoutInspectionsInputObjectSchema as TaskUpdateWithoutInspectionsInputObjectSchema } from './TaskUpdateWithoutInspectionsInput.schema';
import { TaskUncheckedUpdateWithoutInspectionsInputObjectSchema as TaskUncheckedUpdateWithoutInspectionsInputObjectSchema } from './TaskUncheckedUpdateWithoutInspectionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutInspectionsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutInspectionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutInspectionsInputObjectSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutInspectionsInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TaskUpdateToOneWithWhereWithoutInspectionsInputObjectSchema), z.lazy(() => TaskUpdateWithoutInspectionsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutInspectionsInputObjectSchema)]).optional()
}).strict();
export const TaskUpdateOneRequiredWithoutInspectionsNestedInputObjectSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutInspectionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateOneRequiredWithoutInspectionsNestedInput>;
export const TaskUpdateOneRequiredWithoutInspectionsNestedInputObjectZodSchema = makeSchema();
