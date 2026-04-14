import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  taskId: z.string(),
  key: z.string(),
  checked: z.boolean(),
  note: z.string().optional().nullable(),
  data: z.string().optional().nullable()
}).strict();
export const InspectionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.InspectionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionUncheckedCreateInput>;
export const InspectionUncheckedCreateInputObjectZodSchema = makeSchema();
