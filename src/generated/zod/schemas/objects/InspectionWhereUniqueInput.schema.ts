import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const InspectionWhereUniqueInputObjectSchema: z.ZodType<Prisma.InspectionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.InspectionWhereUniqueInput>;
export const InspectionWhereUniqueInputObjectZodSchema = makeSchema();
