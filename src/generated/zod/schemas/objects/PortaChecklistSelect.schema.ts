import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './TaskArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  taskId: z.boolean().optional(),
  isUserChecked: z.boolean().optional(),
  isTruckChecked: z.boolean().optional(),
  isTrailerChecked: z.boolean().optional(),
  isTraktorChecked: z.boolean().optional(),
  isBioChecked: z.boolean().optional(),
  isSzondaChecked: z.boolean().optional(),
  isStarted: z.boolean().optional(),
  startedAt: z.boolean().optional(),
  task: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional()
}).strict();
export const PortaChecklistSelectObjectSchema: z.ZodType<Prisma.PortaChecklistSelect> = makeSchema() as unknown as z.ZodType<Prisma.PortaChecklistSelect>;
export const PortaChecklistSelectObjectZodSchema = makeSchema();
