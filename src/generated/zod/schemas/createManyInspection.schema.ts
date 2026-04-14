import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InspectionCreateManyInputObjectSchema as InspectionCreateManyInputObjectSchema } from './objects/InspectionCreateManyInput.schema';

export const InspectionCreateManySchema: z.ZodType<Prisma.InspectionCreateManyArgs> = z.object({ data: z.union([ InspectionCreateManyInputObjectSchema, z.array(InspectionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.InspectionCreateManyArgs>;

export const InspectionCreateManyZodSchema = z.object({ data: z.union([ InspectionCreateManyInputObjectSchema, z.array(InspectionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();