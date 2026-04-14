import * as z from 'zod';
import type { Prisma } from '@prisma/client';
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
  taskField: z.lazy(() => TaskFieldCreateNestedOneWithoutLibraInputObjectSchema).optional()
}).strict();
export const LibraCreateWithoutTaskInputObjectSchema: z.ZodType<Prisma.LibraCreateWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraCreateWithoutTaskInput>;
export const LibraCreateWithoutTaskInputObjectZodSchema = makeSchema();
