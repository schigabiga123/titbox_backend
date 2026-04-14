import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InspectionScalarWhereInputObjectSchema as InspectionScalarWhereInputObjectSchema } from './InspectionScalarWhereInput.schema';
import { InspectionUpdateManyMutationInputObjectSchema as InspectionUpdateManyMutationInputObjectSchema } from './InspectionUpdateManyMutationInput.schema';
import { InspectionUncheckedUpdateManyWithoutTaskInputObjectSchema as InspectionUncheckedUpdateManyWithoutTaskInputObjectSchema } from './InspectionUncheckedUpdateManyWithoutTaskInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InspectionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => InspectionUpdateManyMutationInputObjectSchema), z.lazy(() => InspectionUncheckedUpdateManyWithoutTaskInputObjectSchema)])
}).strict();
export const InspectionUpdateManyWithWhereWithoutTaskInputObjectSchema: z.ZodType<Prisma.InspectionUpdateManyWithWhereWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionUpdateManyWithWhereWithoutTaskInput>;
export const InspectionUpdateManyWithWhereWithoutTaskInputObjectZodSchema = makeSchema();
