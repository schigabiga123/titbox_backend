import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutPortaChecklistInputObjectSchema as TaskCreateWithoutPortaChecklistInputObjectSchema } from './TaskCreateWithoutPortaChecklistInput.schema';
import { TaskUncheckedCreateWithoutPortaChecklistInputObjectSchema as TaskUncheckedCreateWithoutPortaChecklistInputObjectSchema } from './TaskUncheckedCreateWithoutPortaChecklistInput.schema';
import { TaskCreateOrConnectWithoutPortaChecklistInputObjectSchema as TaskCreateOrConnectWithoutPortaChecklistInputObjectSchema } from './TaskCreateOrConnectWithoutPortaChecklistInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutPortaChecklistInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutPortaChecklistInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutPortaChecklistInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional()
}).strict();
export const TaskCreateNestedOneWithoutPortaChecklistInputObjectSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutPortaChecklistInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateNestedOneWithoutPortaChecklistInput>;
export const TaskCreateNestedOneWithoutPortaChecklistInputObjectZodSchema = makeSchema();
