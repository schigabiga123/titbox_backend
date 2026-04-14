import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InspectionWhereUniqueInputObjectSchema as InspectionWhereUniqueInputObjectSchema } from './InspectionWhereUniqueInput.schema';
import { InspectionCreateWithoutTaskInputObjectSchema as InspectionCreateWithoutTaskInputObjectSchema } from './InspectionCreateWithoutTaskInput.schema';
import { InspectionUncheckedCreateWithoutTaskInputObjectSchema as InspectionUncheckedCreateWithoutTaskInputObjectSchema } from './InspectionUncheckedCreateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InspectionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InspectionCreateWithoutTaskInputObjectSchema), z.lazy(() => InspectionUncheckedCreateWithoutTaskInputObjectSchema)])
}).strict();
export const InspectionCreateOrConnectWithoutTaskInputObjectSchema: z.ZodType<Prisma.InspectionCreateOrConnectWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionCreateOrConnectWithoutTaskInput>;
export const InspectionCreateOrConnectWithoutTaskInputObjectZodSchema = makeSchema();
