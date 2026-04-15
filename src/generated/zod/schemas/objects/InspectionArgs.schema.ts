import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InspectionSelectObjectSchema as InspectionSelectObjectSchema } from './InspectionSelect.schema';
import { InspectionIncludeObjectSchema as InspectionIncludeObjectSchema } from './InspectionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => InspectionSelectObjectSchema).optional(),
  include: z.lazy(() => InspectionIncludeObjectSchema).optional()
}).strict();
export const InspectionArgsObjectSchema = makeSchema();
export const InspectionArgsObjectZodSchema = makeSchema();
