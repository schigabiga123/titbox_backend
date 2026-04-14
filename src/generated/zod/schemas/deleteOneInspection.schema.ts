import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InspectionSelectObjectSchema as InspectionSelectObjectSchema } from './objects/InspectionSelect.schema';
import { InspectionIncludeObjectSchema as InspectionIncludeObjectSchema } from './objects/InspectionInclude.schema';
import { InspectionWhereUniqueInputObjectSchema as InspectionWhereUniqueInputObjectSchema } from './objects/InspectionWhereUniqueInput.schema';

export const InspectionDeleteOneSchema: z.ZodType<Prisma.InspectionDeleteArgs> = z.object({ select: InspectionSelectObjectSchema.optional(), include: InspectionIncludeObjectSchema.optional(), where: InspectionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InspectionDeleteArgs>;

export const InspectionDeleteOneZodSchema = z.object({ select: InspectionSelectObjectSchema.optional(), include: InspectionIncludeObjectSchema.optional(), where: InspectionWhereUniqueInputObjectSchema }).strict();