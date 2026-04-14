import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InspectionCreateManyTaskInputObjectSchema as InspectionCreateManyTaskInputObjectSchema } from './InspectionCreateManyTaskInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => InspectionCreateManyTaskInputObjectSchema), z.lazy(() => InspectionCreateManyTaskInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const InspectionCreateManyTaskInputEnvelopeObjectSchema: z.ZodType<Prisma.InspectionCreateManyTaskInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.InspectionCreateManyTaskInputEnvelope>;
export const InspectionCreateManyTaskInputEnvelopeObjectZodSchema = makeSchema();
