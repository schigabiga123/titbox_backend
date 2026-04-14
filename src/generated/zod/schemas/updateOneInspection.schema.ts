import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InspectionSelectObjectSchema as InspectionSelectObjectSchema } from './objects/InspectionSelect.schema';
import { InspectionIncludeObjectSchema as InspectionIncludeObjectSchema } from './objects/InspectionInclude.schema';
import { InspectionUpdateInputObjectSchema as InspectionUpdateInputObjectSchema } from './objects/InspectionUpdateInput.schema';
import { InspectionUncheckedUpdateInputObjectSchema as InspectionUncheckedUpdateInputObjectSchema } from './objects/InspectionUncheckedUpdateInput.schema';
import { InspectionWhereUniqueInputObjectSchema as InspectionWhereUniqueInputObjectSchema } from './objects/InspectionWhereUniqueInput.schema';

export const InspectionUpdateOneSchema: z.ZodType<Prisma.InspectionUpdateArgs> = z.object({ select: InspectionSelectObjectSchema.optional(), include: InspectionIncludeObjectSchema.optional(), data: z.union([InspectionUpdateInputObjectSchema, InspectionUncheckedUpdateInputObjectSchema]), where: InspectionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InspectionUpdateArgs>;

export const InspectionUpdateOneZodSchema = z.object({ select: InspectionSelectObjectSchema.optional(), include: InspectionIncludeObjectSchema.optional(), data: z.union([InspectionUpdateInputObjectSchema, InspectionUncheckedUpdateInputObjectSchema]), where: InspectionWhereUniqueInputObjectSchema }).strict();