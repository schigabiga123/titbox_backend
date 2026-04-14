import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InspectionSelectObjectSchema as InspectionSelectObjectSchema } from './objects/InspectionSelect.schema';
import { InspectionIncludeObjectSchema as InspectionIncludeObjectSchema } from './objects/InspectionInclude.schema';
import { InspectionCreateInputObjectSchema as InspectionCreateInputObjectSchema } from './objects/InspectionCreateInput.schema';
import { InspectionUncheckedCreateInputObjectSchema as InspectionUncheckedCreateInputObjectSchema } from './objects/InspectionUncheckedCreateInput.schema';

export const InspectionCreateOneSchema: z.ZodType<Prisma.InspectionCreateArgs> = z.object({ select: InspectionSelectObjectSchema.optional(), include: InspectionIncludeObjectSchema.optional(), data: z.union([InspectionCreateInputObjectSchema, InspectionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.InspectionCreateArgs>;

export const InspectionCreateOneZodSchema = z.object({ select: InspectionSelectObjectSchema.optional(), include: InspectionIncludeObjectSchema.optional(), data: z.union([InspectionCreateInputObjectSchema, InspectionUncheckedCreateInputObjectSchema]) }).strict();