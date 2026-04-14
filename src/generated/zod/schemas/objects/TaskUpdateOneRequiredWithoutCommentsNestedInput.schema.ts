import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutCommentsInputObjectSchema as TaskCreateWithoutCommentsInputObjectSchema } from './TaskCreateWithoutCommentsInput.schema';
import { TaskUncheckedCreateWithoutCommentsInputObjectSchema as TaskUncheckedCreateWithoutCommentsInputObjectSchema } from './TaskUncheckedCreateWithoutCommentsInput.schema';
import { TaskCreateOrConnectWithoutCommentsInputObjectSchema as TaskCreateOrConnectWithoutCommentsInputObjectSchema } from './TaskCreateOrConnectWithoutCommentsInput.schema';
import { TaskUpsertWithoutCommentsInputObjectSchema as TaskUpsertWithoutCommentsInputObjectSchema } from './TaskUpsertWithoutCommentsInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskUpdateToOneWithWhereWithoutCommentsInputObjectSchema as TaskUpdateToOneWithWhereWithoutCommentsInputObjectSchema } from './TaskUpdateToOneWithWhereWithoutCommentsInput.schema';
import { TaskUpdateWithoutCommentsInputObjectSchema as TaskUpdateWithoutCommentsInputObjectSchema } from './TaskUpdateWithoutCommentsInput.schema';
import { TaskUncheckedUpdateWithoutCommentsInputObjectSchema as TaskUncheckedUpdateWithoutCommentsInputObjectSchema } from './TaskUncheckedUpdateWithoutCommentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutCommentsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutCommentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutCommentsInputObjectSchema).optional(),
  upsert: z.lazy(() => TaskUpsertWithoutCommentsInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TaskUpdateToOneWithWhereWithoutCommentsInputObjectSchema), z.lazy(() => TaskUpdateWithoutCommentsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutCommentsInputObjectSchema)]).optional()
}).strict();
export const TaskUpdateOneRequiredWithoutCommentsNestedInputObjectSchema: z.ZodType<Prisma.TaskUpdateOneRequiredWithoutCommentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateOneRequiredWithoutCommentsNestedInput>;
export const TaskUpdateOneRequiredWithoutCommentsNestedInputObjectZodSchema = makeSchema();
