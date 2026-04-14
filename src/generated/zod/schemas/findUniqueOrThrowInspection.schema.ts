import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InspectionSelectObjectSchema as InspectionSelectObjectSchema } from './objects/InspectionSelect.schema';
import { InspectionIncludeObjectSchema as InspectionIncludeObjectSchema } from './objects/InspectionInclude.schema';
import { InspectionWhereUniqueInputObjectSchema as InspectionWhereUniqueInputObjectSchema } from './objects/InspectionWhereUniqueInput.schema';

export const InspectionFindUniqueOrThrowSchema: z.ZodType<Prisma.InspectionFindUniqueOrThrowArgs> = z.object({ select: InspectionSelectObjectSchema.optional(), include: InspectionIncludeObjectSchema.optional(), where: InspectionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InspectionFindUniqueOrThrowArgs>;

export const InspectionFindUniqueOrThrowZodSchema = z.object({ select: InspectionSelectObjectSchema.optional(), include: InspectionIncludeObjectSchema.optional(), where: InspectionWhereUniqueInputObjectSchema }).strict();