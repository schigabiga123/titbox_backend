import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './TaskArgs.schema'

const makeSchema = () => z.object({
  task: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional()
}).strict();
export const InspectionIncludeObjectSchema: z.ZodType<Prisma.InspectionInclude> = makeSchema() as unknown as z.ZodType<Prisma.InspectionInclude>;
export const InspectionIncludeObjectZodSchema = makeSchema();
