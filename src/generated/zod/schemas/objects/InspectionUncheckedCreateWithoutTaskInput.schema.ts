import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  checked: z.boolean(),
  note: z.string().optional().nullable(),
  data: z.string().optional().nullable()
}).strict();
export const InspectionUncheckedCreateWithoutTaskInputObjectSchema: z.ZodType<Prisma.InspectionUncheckedCreateWithoutTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionUncheckedCreateWithoutTaskInput>;
export const InspectionUncheckedCreateWithoutTaskInputObjectZodSchema = makeSchema();
