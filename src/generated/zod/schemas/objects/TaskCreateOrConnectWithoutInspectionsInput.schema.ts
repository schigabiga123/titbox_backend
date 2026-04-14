import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema';
import { TaskCreateWithoutInspectionsInputObjectSchema as TaskCreateWithoutInspectionsInputObjectSchema } from './TaskCreateWithoutInspectionsInput.schema';
import { TaskUncheckedCreateWithoutInspectionsInputObjectSchema as TaskUncheckedCreateWithoutInspectionsInputObjectSchema } from './TaskUncheckedCreateWithoutInspectionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TaskCreateWithoutInspectionsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutInspectionsInputObjectSchema)])
}).strict();
export const TaskCreateOrConnectWithoutInspectionsInputObjectSchema: z.ZodType<Prisma.TaskCreateOrConnectWithoutInspectionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateOrConnectWithoutInspectionsInput>;
export const TaskCreateOrConnectWithoutInspectionsInputObjectZodSchema = makeSchema();
