import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InspectionCreateWithoutTaskInputObjectSchema as InspectionCreateWithoutTaskInputObjectSchema } from './InspectionCreateWithoutTaskInput.schema';
import { InspectionUncheckedCreateWithoutTaskInputObjectSchema as InspectionUncheckedCreateWithoutTaskInputObjectSchema } from './InspectionUncheckedCreateWithoutTaskInput.schema';
import { InspectionCreateOrConnectWithoutTaskInputObjectSchema as InspectionCreateOrConnectWithoutTaskInputObjectSchema } from './InspectionCreateOrConnectWithoutTaskInput.schema';
import { InspectionUpsertWithWhereUniqueWithoutTaskInputObjectSchema as InspectionUpsertWithWhereUniqueWithoutTaskInputObjectSchema } from './InspectionUpsertWithWhereUniqueWithoutTaskInput.schema';
import { InspectionCreateManyTaskInputEnvelopeObjectSchema as InspectionCreateManyTaskInputEnvelopeObjectSchema } from './InspectionCreateManyTaskInputEnvelope.schema';
import { InspectionWhereUniqueInputObjectSchema as InspectionWhereUniqueInputObjectSchema } from './InspectionWhereUniqueInput.schema';
import { InspectionUpdateWithWhereUniqueWithoutTaskInputObjectSchema as InspectionUpdateWithWhereUniqueWithoutTaskInputObjectSchema } from './InspectionUpdateWithWhereUniqueWithoutTaskInput.schema';
import { InspectionUpdateManyWithWhereWithoutTaskInputObjectSchema as InspectionUpdateManyWithWhereWithoutTaskInputObjectSchema } from './InspectionUpdateManyWithWhereWithoutTaskInput.schema';
import { InspectionScalarWhereInputObjectSchema as InspectionScalarWhereInputObjectSchema } from './InspectionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InspectionCreateWithoutTaskInputObjectSchema), z.lazy(() => InspectionCreateWithoutTaskInputObjectSchema).array(), z.lazy(() => InspectionUncheckedCreateWithoutTaskInputObjectSchema), z.lazy(() => InspectionUncheckedCreateWithoutTaskInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InspectionCreateOrConnectWithoutTaskInputObjectSchema), z.lazy(() => InspectionCreateOrConnectWithoutTaskInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => InspectionUpsertWithWhereUniqueWithoutTaskInputObjectSchema), z.lazy(() => InspectionUpsertWithWhereUniqueWithoutTaskInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InspectionCreateManyTaskInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => InspectionWhereUniqueInputObjectSchema), z.lazy(() => InspectionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => InspectionWhereUniqueInputObjectSchema), z.lazy(() => InspectionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => InspectionWhereUniqueInputObjectSchema), z.lazy(() => InspectionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => InspectionWhereUniqueInputObjectSchema), z.lazy(() => InspectionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => InspectionUpdateWithWhereUniqueWithoutTaskInputObjectSchema), z.lazy(() => InspectionUpdateWithWhereUniqueWithoutTaskInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => InspectionUpdateManyWithWhereWithoutTaskInputObjectSchema), z.lazy(() => InspectionUpdateManyWithWhereWithoutTaskInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => InspectionScalarWhereInputObjectSchema), z.lazy(() => InspectionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const InspectionUncheckedUpdateManyWithoutTaskNestedInputObjectSchema: z.ZodType<Prisma.InspectionUncheckedUpdateManyWithoutTaskNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionUncheckedUpdateManyWithoutTaskNestedInput>;
export const InspectionUncheckedUpdateManyWithoutTaskNestedInputObjectZodSchema = makeSchema();
