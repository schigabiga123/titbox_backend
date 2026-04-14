import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InspectionWhereUniqueInputObjectSchema as InspectionWhereUniqueInputObjectSchema } from './InspectionWhereUniqueInput.schema';
import { InspectionUpdateWithoutTaskInputObjectSchema as InspectionUpdateWithoutTaskInputObjectSchema } from './InspectionUpdateWithoutTaskInput.schema';
import { InspectionUncheckedUpdateWithoutTaskInputObjectSchema as InspectionUncheckedUpdateWithoutTaskInputObjectSchema } from './InspectionUncheckedUpdateWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InspectionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => InspectionUpdateWithoutTaskInputObjectSchema), z.lazy(() => InspectionUncheckedUpdateWithoutTaskInputObjectSchema)])
}).strict();
export const InspectionUpdateWithWhereUniqueWithoutTaskInputObjectSchema: z.ZodType<Prisma.InspectionUpdateWithWhereUniqueWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionUpdateWithWhereUniqueWithoutTaskInput>;
export const InspectionUpdateWithWhereUniqueWithoutTaskInputObjectZodSchema = makeSchema();
