import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InspectionCreateWithoutTaskInputObjectSchema as InspectionCreateWithoutTaskInputObjectSchema } from './InspectionCreateWithoutTaskInput.schema';
import { InspectionUncheckedCreateWithoutTaskInputObjectSchema as InspectionUncheckedCreateWithoutTaskInputObjectSchema } from './InspectionUncheckedCreateWithoutTaskInput.schema';
import { InspectionCreateOrConnectWithoutTaskInputObjectSchema as InspectionCreateOrConnectWithoutTaskInputObjectSchema } from './InspectionCreateOrConnectWithoutTaskInput.schema';
import { InspectionCreateManyTaskInputEnvelopeObjectSchema as InspectionCreateManyTaskInputEnvelopeObjectSchema } from './InspectionCreateManyTaskInputEnvelope.schema';
import { InspectionWhereUniqueInputObjectSchema as InspectionWhereUniqueInputObjectSchema } from './InspectionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InspectionCreateWithoutTaskInputObjectSchema), z.lazy(() => InspectionCreateWithoutTaskInputObjectSchema).array(), z.lazy(() => InspectionUncheckedCreateWithoutTaskInputObjectSchema), z.lazy(() => InspectionUncheckedCreateWithoutTaskInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => InspectionCreateOrConnectWithoutTaskInputObjectSchema), z.lazy(() => InspectionCreateOrConnectWithoutTaskInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => InspectionCreateManyTaskInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => InspectionWhereUniqueInputObjectSchema), z.lazy(() => InspectionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const InspectionCreateNestedManyWithoutTaskInputObjectSchema: z.ZodType<Prisma.InspectionCreateNestedManyWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionCreateNestedManyWithoutTaskInput>;
export const InspectionCreateNestedManyWithoutTaskInputObjectZodSchema = makeSchema();
