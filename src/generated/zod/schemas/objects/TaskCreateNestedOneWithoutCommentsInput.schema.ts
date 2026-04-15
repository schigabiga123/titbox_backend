import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutCommentsInputObjectSchema as TaskCreateWithoutCommentsInputObjectSchema } from './TaskCreateWithoutCommentsInput.schema';
import { TaskUncheckedCreateWithoutCommentsInputObjectSchema as TaskUncheckedCreateWithoutCommentsInputObjectSchema } from './TaskUncheckedCreateWithoutCommentsInput.schema';
import { TaskCreateOrConnectWithoutCommentsInputObjectSchema as TaskCreateOrConnectWithoutCommentsInputObjectSchema } from './TaskCreateOrConnectWithoutCommentsInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutCommentsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutCommentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutCommentsInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional()
}).strict();
export const TaskCreateNestedOneWithoutCommentsInputObjectSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutCommentsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateNestedOneWithoutCommentsInput>;
export const TaskCreateNestedOneWithoutCommentsInputObjectZodSchema = makeSchema();
