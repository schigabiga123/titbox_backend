import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InspectionUpdateManyMutationInputObjectSchema as InspectionUpdateManyMutationInputObjectSchema } from './objects/InspectionUpdateManyMutationInput.schema';
import { InspectionWhereInputObjectSchema as InspectionWhereInputObjectSchema } from './objects/InspectionWhereInput.schema';

export const InspectionUpdateManySchema: z.ZodType<Prisma.InspectionUpdateManyArgs> = z.object({ data: InspectionUpdateManyMutationInputObjectSchema, where: InspectionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InspectionUpdateManyArgs>;

export const InspectionUpdateManyZodSchema = z.object({ data: InspectionUpdateManyMutationInputObjectSchema, where: InspectionWhereInputObjectSchema.optional() }).strict();