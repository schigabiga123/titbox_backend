import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskUpdateWithoutCommentsInputObjectSchema as TaskUpdateWithoutCommentsInputObjectSchema } from './TaskUpdateWithoutCommentsInput.schema';
import { TaskUncheckedUpdateWithoutCommentsInputObjectSchema as TaskUncheckedUpdateWithoutCommentsInputObjectSchema } from './TaskUncheckedUpdateWithoutCommentsInput.schema';
import { TaskCreateWithoutCommentsInputObjectSchema as TaskCreateWithoutCommentsInputObjectSchema } from './TaskCreateWithoutCommentsInput.schema';
import { TaskUncheckedCreateWithoutCommentsInputObjectSchema as TaskUncheckedCreateWithoutCommentsInputObjectSchema } from './TaskUncheckedCreateWithoutCommentsInput.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TaskUpdateWithoutCommentsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutCommentsInputObjectSchema)]),
  create: z.union([z.lazy(() => TaskCreateWithoutCommentsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutCommentsInputObjectSchema)]),
  where: z.lazy(() => TaskWhereInputObjectSchema).optional()
}).strict();
export const TaskUpsertWithoutCommentsInputObjectSchema: z.ZodType<Prisma.TaskUpsertWithoutCommentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpsertWithoutCommentsInput>;
export const TaskUpsertWithoutCommentsInputObjectZodSchema = makeSchema();
