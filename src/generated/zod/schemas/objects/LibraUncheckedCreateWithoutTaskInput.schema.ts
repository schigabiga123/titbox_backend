import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  projectId: z.string(),
  szfCode: z.string().optional().nullable(),
  plateNumber: z.string().optional().nullable(),
  assignedUserId: z.string().optional().nullable(),
  amount: z.number().optional().nullable(),
  manuallyLibra: z.string().optional().nullable(),
  manuallyLibraComment: z.string().optional().nullable(),
  taskFieldId: z.string().optional().nullable()
}).strict();
export const LibraUncheckedCreateWithoutTaskInputObjectSchema: z.ZodType<Prisma.LibraUncheckedCreateWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.LibraUncheckedCreateWithoutTaskInput>;
export const LibraUncheckedCreateWithoutTaskInputObjectZodSchema = makeSchema();
