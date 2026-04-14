import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema';
import { TaskUpdateWithoutCommentsInputObjectSchema as TaskUpdateWithoutCommentsInputObjectSchema } from './TaskUpdateWithoutCommentsInput.schema';
import { TaskUncheckedUpdateWithoutCommentsInputObjectSchema as TaskUncheckedUpdateWithoutCommentsInputObjectSchema } from './TaskUncheckedUpdateWithoutCommentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TaskUpdateWithoutCommentsInputObjectSchema), z.lazy(() => TaskUncheckedUpdateWithoutCommentsInputObjectSchema)])
}).strict();
export const TaskUpdateToOneWithWhereWithoutCommentsInputObjectSchema: z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutCommentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateToOneWithWhereWithoutCommentsInput>;
export const TaskUpdateToOneWithWhereWithoutCommentsInputObjectZodSchema = makeSchema();
