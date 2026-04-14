import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InspectionSelectObjectSchema as InspectionSelectObjectSchema } from './objects/InspectionSelect.schema';
import { InspectionCreateManyInputObjectSchema as InspectionCreateManyInputObjectSchema } from './objects/InspectionCreateManyInput.schema';

export const InspectionCreateManyAndReturnSchema: z.ZodType<Prisma.InspectionCreateManyAndReturnArgs> = z.object({ select: InspectionSelectObjectSchema.optional(), data: z.union([ InspectionCreateManyInputObjectSchema, z.array(InspectionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.InspectionCreateManyAndReturnArgs>;

export const InspectionCreateManyAndReturnZodSchema = z.object({ select: InspectionSelectObjectSchema.optional(), data: z.union([ InspectionCreateManyInputObjectSchema, z.array(InspectionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();