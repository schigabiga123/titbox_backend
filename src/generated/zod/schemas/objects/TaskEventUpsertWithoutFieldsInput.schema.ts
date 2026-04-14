import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventUpdateWithoutFieldsInputObjectSchema as TaskEventUpdateWithoutFieldsInputObjectSchema } from './TaskEventUpdateWithoutFieldsInput.schema';
import { TaskEventUncheckedUpdateWithoutFieldsInputObjectSchema as TaskEventUncheckedUpdateWithoutFieldsInputObjectSchema } from './TaskEventUncheckedUpdateWithoutFieldsInput.schema';
import { TaskEventCreateWithoutFieldsInputObjectSchema as TaskEventCreateWithoutFieldsInputObjectSchema } from './TaskEventCreateWithoutFieldsInput.schema';
import { TaskEventUncheckedCreateWithoutFieldsInputObjectSchema as TaskEventUncheckedCreateWithoutFieldsInputObjectSchema } from './TaskEventUncheckedCreateWithoutFieldsInput.schema';
import { TaskEventWhereInputObjectSchema as TaskEventWhereInputObjectSchema } from './TaskEventWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TaskEventUpdateWithoutFieldsInputObjectSchema), z.lazy(() => TaskEventUncheckedUpdateWithoutFieldsInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskEventCreateWithoutFieldsInputObjectSchema), z.lazy(() => TaskEventUncheckedCreateWithoutFieldsInputObjectSchema)]),
  where: z.lazy(() => TaskEventWhereInputObjectSchema).optional()
}).strict();
export const TaskEventUpsertWithoutFieldsInputObjectSchema: z.ZodType<Prisma.TaskEventUpsertWithoutFieldsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventUpsertWithoutFieldsInput>;
export const TaskEventUpsertWithoutFieldsInputObjectZodSchema = makeSchema();
