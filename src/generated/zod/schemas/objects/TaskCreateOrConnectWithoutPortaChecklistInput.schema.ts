import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutPortaChecklistInputObjectSchema as TaskCreateWithoutPortaChecklistInputObjectSchema } from './TaskCreateWithoutPortaChecklistInput.schema';
import { TaskUncheckedCreateWithoutPortaChecklistInputObjectSchema as TaskUncheckedCreateWithoutPortaChecklistInputObjectSchema } from './TaskUncheckedCreateWithoutPortaChecklistInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutPortaChecklistInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutPortaChecklistInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutPortaChecklistInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutPortaChecklistInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutPortaChecklistInput>;
export const TaskCreateOrConnectWithoutPortaChecklistInputObjectZodSchema = makeSchema();
