import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateWithoutInspectionsInputObjectSchema as TaskCreateWithoutInspectionsInputObjectSchema } from './TaskCreateWithoutInspectionsInput.schema';
import { TaskUncheckedCreateWithoutInspectionsInputObjectSchema as TaskUncheckedCreateWithoutInspectionsInputObjectSchema } from './TaskUncheckedCreateWithoutInspectionsInput.schema';
import { TaskCreateOrConnectWithoutInspectionsInputObjectSchema as TaskCreateOrConnectWithoutInspectionsInputObjectSchema } from './TaskCreateOrConnectWithoutInspectionsInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './TaskWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskCreateWithoutInspectionsInputObjectSchema), z.lazy(() => TaskUncheckedCreateWithoutInspectionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TaskCreateOrConnectWithoutInspectionsInputObjectSchema).optional(),
  connect: z.lazy(() => TaskWhereUniqueInputObjectSchema).optional()
}).strict();
export const TaskCreateNestedOneWithoutInspectionsInputObjectSchema: z.ZodType<Prisma.TaskCreateNestedOneWithoutInspectionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateNestedOneWithoutInspectionsInput>;
export const TaskCreateNestedOneWithoutInspectionsInputObjectZodSchema = makeSchema();
