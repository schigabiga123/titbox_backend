import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  checked: z.boolean(),
  note: z.string().optional().nullable(),
  data: z.string().optional().nullable()
}).strict();
export const InspectionCreateWithoutTaskInputObjectSchema: z.ZodType<Prisma.InspectionCreateWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionCreateWithoutTaskInput>;
export const InspectionCreateWithoutTaskInputObjectZodSchema = makeSchema();
