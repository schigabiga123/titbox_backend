import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateNestedOneWithoutPortaChecklistInputObjectSchema as TaskCreateNestedOneWithoutPortaChecklistInputObjectSchema } from './TaskCreateNestedOneWithoutPortaChecklistInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  isUserChecked: z.boolean().optional().nullable(),
  isTruckChecked: z.boolean().optional().nullable(),
  isTrailerChecked: z.boolean().optional().nullable(),
  isTraktorChecked: z.boolean().optional().nullable(),
  isBioChecked: z.boolean().optional().nullable(),
  isSzondaChecked: z.boolean().optional().nullable(),
  isStarted: z.boolean().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutPortaChecklistInputObjectSchema)
}).strict();
export const PortaChecklistCreateInputObjectSchema: z.ZodType<Prisma.PortaChecklistCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PortaChecklistCreateInput>;
export const PortaChecklistCreateInputObjectZodSchema = makeSchema();
