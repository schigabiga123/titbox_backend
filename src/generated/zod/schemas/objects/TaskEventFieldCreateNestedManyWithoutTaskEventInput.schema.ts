import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskEventFieldCreateWithoutTaskEventInputObjectSchema as TaskEventFieldCreateWithoutTaskEventInputObjectSchema } from './TaskEventFieldCreateWithoutTaskEventInput.schema';
import { TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectSchema as TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectSchema } from './TaskEventFieldUncheckedCreateWithoutTaskEventInput.schema';
import { TaskEventFieldCreateOrConnectWithoutTaskEventInputObjectSchema as TaskEventFieldCreateOrConnectWithoutTaskEventInputObjectSchema } from './TaskEventFieldCreateOrConnectWithoutTaskEventInput.schema';
import { TaskEventFieldCreateManyTaskEventInputEnvelopeObjectSchema as TaskEventFieldCreateManyTaskEventInputEnvelopeObjectSchema } from './TaskEventFieldCreateManyTaskEventInputEnvelope.schema';
import { TaskEventFieldWhereUniqueInputObjectSchema as TaskEventFieldWhereUniqueInputObjectSchema } from './TaskEventFieldWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TaskEventFieldCreateWithoutTaskEventInputObjectSchema), z.lazy(() => TaskEventFieldCreateWithoutTaskEventInputObjectSchema).array(), z.lazy(() => TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectSchema), z.lazy(() => TaskEventFieldUncheckedCreateWithoutTaskEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TaskEventFieldCreateOrConnectWithoutTaskEventInputObjectSchema), z.lazy(() => TaskEventFieldCreateOrConnectWithoutTaskEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TaskEventFieldCreateManyTaskEventInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema), z.lazy(() => TaskEventFieldWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TaskEventFieldCreateNestedManyWithoutTaskEventInputObjectSchema: z.ZodType<Prisma.TaskEventFieldCreateNestedManyWithoutTaskEventInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskEventFieldCreateNestedManyWithoutTaskEventInput>;
export const TaskEventFieldCreateNestedManyWithoutTaskEventInputObjectZodSchema = makeSchema();
