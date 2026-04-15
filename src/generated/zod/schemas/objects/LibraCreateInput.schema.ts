import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateNestedOneWithoutLibraInputObjectSchema as TaskCreateNestedOneWithoutLibraInputObjectSchema } from './TaskCreateNestedOneWithoutLibraInput.schema';
import { TaskFieldCreateNestedOneWithoutLibraInputObjectSchema as TaskFieldCreateNestedOneWithoutLibraInputObjectSchema } from './TaskFieldCreateNestedOneWithoutLibraInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  projectId: z.string(),
  szfCode: z.string().optional().nullable(),
  plateNumber: z.string().optional().nullable(),
  assignedUserId: z.string().optional().nullable(),
  amount: z.number().optional().nullable(),
  manuallyLibra: z.string().optional().nullable(),
  manuallyLibraComment: z.string().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutLibraInputObjectSchema),
  taskField: z.lazy(() => TaskFieldCreateNestedOneWithoutLibraInputObjectSchema).optional()
}).strict();
export const LibraCreateInputObjectSchema: z.ZodType<Prisma.LibraCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraCreateInput>;
export const LibraCreateInputObjectZodSchema = makeSchema();
