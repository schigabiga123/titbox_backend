import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutCommentsInputObjectSchema as TaskCreateWithoutCommentsInputObjectSchema } from './TaskCreateWithoutCommentsInput.schema';
import { TaskUncheckedCreateWithoutCommentsInputObjectSchema as TaskUncheckedCreateWithoutCommentsInputObjectSchema } from './TaskUncheckedCreateWithoutCommentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutCommentsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutCommentsInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutCommentsInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutCommentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutCommentsInput>;
export const TaskCreateOrConnectWithoutCommentsInputObjectZodSchema = makeSchema();
