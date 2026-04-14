import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InspectionWhereInputObjectSchema as InspectionWhereInputObjectSchema } from './objects/InspectionWhereInput.schema';

export const InspectionDeleteManySchema: z.ZodType<Prisma.InspectionDeleteManyArgs> = z.object({ where: InspectionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InspectionDeleteManyArgs>;

export const InspectionDeleteManyZodSchema = z.object({ where: InspectionWhereInputObjectSchema.optional() }).strict();