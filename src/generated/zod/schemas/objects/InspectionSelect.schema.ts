import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './TaskArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  taskId: z.boolean().optional(),
  key: z.boolean().optional(),
  checked: z.boolean().optional(),
  note: z.boolean().optional(),
  data: z.boolean().optional(),
  task: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional()
}).strict();
export const InspectionSelectObjectSchema: z.ZodType<Prisma.InspectionSelect> = makeSchema() as unknown as z.ZodType<Prisma.InspectionSelect>;
export const InspectionSelectObjectZodSchema = makeSchema();
