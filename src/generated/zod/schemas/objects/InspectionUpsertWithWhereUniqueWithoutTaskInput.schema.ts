import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InspectionWhereUniqueInputObjectSchema as InspectionWhereUniqueInputObjectSchema } from './InspectionWhereUniqueInput.schema';
import { InspectionUpdateWithoutTaskInputObjectSchema as InspectionUpdateWithoutTaskInputObjectSchema } from './InspectionUpdateWithoutTaskInput.schema';
import { InspectionUncheckedUpdateWithoutTaskInputObjectSchema as InspectionUncheckedUpdateWithoutTaskInputObjectSchema } from './InspectionUncheckedUpdateWithoutTaskInput.schema';
import { InspectionCreateWithoutTaskInputObjectSchema as InspectionCreateWithoutTaskInputObjectSchema } from './InspectionCreateWithoutTaskInput.schema';
import { InspectionUncheckedCreateWithoutTaskInputObjectSchema as InspectionUncheckedCreateWithoutTaskInputObjectSchema } from './InspectionUncheckedCreateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InspectionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => InspectionUpdateWithoutTaskInputObjectSchema), z.lazy(() => InspectionUncheckedUpdateWithoutTaskInputObjectSchema)]),
  create: z.union([z.lazy(() => InspectionCreateWithoutTaskInputObjectSchema), z.lazy(() => InspectionUncheckedCreateWithoutTaskInputObjectSchema)])
}).strict();
export const InspectionUpsertWithWhereUniqueWithoutTaskInputObjectSchema: z.ZodType<Prisma.InspectionUpsertWithWhereUniqueWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionUpsertWithWhereUniqueWithoutTaskInput>;
export const InspectionUpsertWithWhereUniqueWithoutTaskInputObjectZodSchema = makeSchema();
