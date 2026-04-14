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
export const InspectionCreateManyInputObjectSchema: z.ZodType<Prisma.InspectionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionCreateManyInput>;
export const InspectionCreateManyInputObjectZodSchema = makeSchema();
