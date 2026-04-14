import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskCreateNestedOneWithoutLibraInputObjectSchema as TaskCreateNestedOneWithoutLibraInputObjectSchema } from './TaskCreateNestedOneWithoutLibraInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  projectId: z.string(),
  szfCode: z.string().optional().nullable(),
  plateNumber: z.string().optional().nullable(),
  assignedUserId: z.string().optional().nullable(),
  amount: z.number().optional().nullable(),
  manuallyLibra: z.string().optional().nullable(),
  manuallyLibraComment: z.string().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutLibraInputObjectSchema)
}).strict();
export const LibraCreateWithoutTaskFieldInputObjectSchema: z.ZodType<Prisma.LibraCreateWithoutTaskFieldInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraCreateWithoutTaskFieldInput>;
export const LibraCreateWithoutTaskFieldInputObjectZodSchema = makeSchema();
