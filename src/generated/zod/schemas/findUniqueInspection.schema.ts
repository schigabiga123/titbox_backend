import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InspectionSelectObjectSchema as InspectionSelectObjectSchema } from './objects/InspectionSelect.schema';
import { InspectionIncludeObjectSchema as InspectionIncludeObjectSchema } from './objects/InspectionInclude.schema';
import { InspectionWhereUniqueInputObjectSchema as InspectionWhereUniqueInputObjectSchema } from './objects/InspectionWhereUniqueInput.schema';

export const InspectionFindUniqueSchema: z.ZodType<Prisma.InspectionFindUniqueArgs> = z.object({ select: InspectionSelectObjectSchema.optional(), include: InspectionIncludeObjectSchema.optional(), where: InspectionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InspectionFindUniqueArgs>;

export const InspectionFindUniqueZodSchema = z.object({ select: InspectionSelectObjectSchema.optional(), include: InspectionIncludeObjectSchema.optional(), where: InspectionWhereUniqueInputObjectSchema }).strict();