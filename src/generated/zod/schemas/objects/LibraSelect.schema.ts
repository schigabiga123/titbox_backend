import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './TaskArgs.schema';
import { TaskFieldArgsObjectSchema as TaskFieldArgsObjectSchema } from './TaskFieldArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  projectId: z.boolean().optional(),
  taskId: z.boolean().optional(),
  szfCode: z.boolean().optional(),
  plateNumber: z.boolean().optional(),
  assignedUserId: z.boolean().optional(),
  amount: z.boolean().optional(),
  manuallyLibra: z.boolean().optional(),
  manuallyLibraComment: z.boolean().optional(),
  taskFieldId: z.boolean().optional(),
  task: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional(),
  taskField: z.union([z.boolean(), z.lazy(() => TaskFieldArgsObjectSchema)]).optional()
}).strict();
export const LibraSelectObjectSchema: z.ZodType<Prisma.LibraSelect> = makeSchema() as unknown as z.ZodType<Prisma.LibraSelect>;
export const LibraSelectObjectZodSchema = makeSchema();
