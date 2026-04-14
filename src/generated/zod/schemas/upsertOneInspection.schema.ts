import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InspectionSelectObjectSchema as InspectionSelectObjectSchema } from './objects/InspectionSelect.schema';
import { InspectionIncludeObjectSchema as InspectionIncludeObjectSchema } from './objects/InspectionInclude.schema';
import { InspectionWhereUniqueInputObjectSchema as InspectionWhereUniqueInputObjectSchema } from './objects/InspectionWhereUniqueInput.schema';
import { InspectionCreateInputObjectSchema as InspectionCreateInputObjectSchema } from './objects/InspectionCreateInput.schema';
import { InspectionUncheckedCreateInputObjectSchema as InspectionUncheckedCreateInputObjectSchema } from './objects/InspectionUncheckedCreateInput.schema';
import { InspectionUpdateInputObjectSchema as InspectionUpdateInputObjectSchema } from './objects/InspectionUpdateInput.schema';
import { InspectionUncheckedUpdateInputObjectSchema as InspectionUncheckedUpdateInputObjectSchema } from './objects/InspectionUncheckedUpdateInput.schema';

export const InspectionUpsertOneSchema: z.ZodType<Prisma.InspectionUpsertArgs> = z.object({ select: InspectionSelectObjectSchema.optional(), include: InspectionIncludeObjectSchema.optional(), where: InspectionWhereUniqueInputObjectSchema, create: z.union([ InspectionCreateInputObjectSchema, InspectionUncheckedCreateInputObjectSchema ]), update: z.union([ InspectionUpdateInputObjectSchema, InspectionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.InspectionUpsertArgs>;

export const InspectionUpsertOneZodSchema = z.object({ select: InspectionSelectObjectSchema.optional(), include: InspectionIncludeObjectSchema.optional(), where: InspectionWhereUniqueInputObjectSchema, create: z.union([ InspectionCreateInputObjectSchema, InspectionUncheckedCreateInputObjectSchema ]), update: z.union([ InspectionUpdateInputObjectSchema, InspectionUncheckedUpdateInputObjectSchema ]) }).strict();