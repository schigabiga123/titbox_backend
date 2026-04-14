import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InspectionSelectObjectSchema as InspectionSelectObjectSchema } from './objects/InspectionSelect.schema';
import { InspectionUpdateManyMutationInputObjectSchema as InspectionUpdateManyMutationInputObjectSchema } from './objects/InspectionUpdateManyMutationInput.schema';
import { InspectionWhereInputObjectSchema as InspectionWhereInputObjectSchema } from './objects/InspectionWhereInput.schema';

export const InspectionUpdateManyAndReturnSchema: z.ZodType<Prisma.InspectionUpdateManyAndReturnArgs> = z.object({ select: InspectionSelectObjectSchema.optional(), data: InspectionUpdateManyMutationInputObjectSchema, where: InspectionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InspectionUpdateManyAndReturnArgs>;

export const InspectionUpdateManyAndReturnZodSchema = z.object({ select: InspectionSelectObjectSchema.optional(), data: InspectionUpdateManyMutationInputObjectSchema, where: InspectionWhereInputObjectSchema.optional() }).strict();