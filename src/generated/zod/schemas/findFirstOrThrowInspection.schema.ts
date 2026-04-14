import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InspectionIncludeObjectSchema as InspectionIncludeObjectSchema } from './objects/InspectionInclude.schema';
import { InspectionOrderByWithRelationInputObjectSchema as InspectionOrderByWithRelationInputObjectSchema } from './objects/InspectionOrderByWithRelationInput.schema';
import { InspectionWhereInputObjectSchema as InspectionWhereInputObjectSchema } from './objects/InspectionWhereInput.schema';
import { InspectionWhereUniqueInputObjectSchema as InspectionWhereUniqueInputObjectSchema } from './objects/InspectionWhereUniqueInput.schema';
import { InspectionScalarFieldEnumSchema } from './enums/InspectionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InspectionFindFirstOrThrowSelectSchema: z.ZodType<Prisma.InspectionSelect> = z.object({
    id: z.boolean().optional(),
    taskId: z.boolean().optional(),
    key: z.boolean().optional(),
    checked: z.boolean().optional(),
    note: z.boolean().optional(),
    data: z.boolean().optional(),
    task: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.InspectionSelect>;

export const InspectionFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    taskId: z.boolean().optional(),
    key: z.boolean().optional(),
    checked: z.boolean().optional(),
    note: z.boolean().optional(),
    data: z.boolean().optional(),
    task: z.boolean().optional()
  }).strict();

export const InspectionFindFirstOrThrowSchema: z.ZodType<Prisma.InspectionFindFirstOrThrowArgs> = z.object({ select: InspectionFindFirstOrThrowSelectSchema.optional(), include: InspectionIncludeObjectSchema.optional(), orderBy: z.union([InspectionOrderByWithRelationInputObjectSchema, InspectionOrderByWithRelationInputObjectSchema.array()]).optional(), where: InspectionWhereInputObjectSchema.optional(), cursor: InspectionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InspectionScalarFieldEnumSchema, InspectionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.InspectionFindFirstOrThrowArgs>;

export const InspectionFindFirstOrThrowZodSchema = z.object({ select: InspectionFindFirstOrThrowSelectSchema.optional(), include: InspectionIncludeObjectSchema.optional(), orderBy: z.union([InspectionOrderByWithRelationInputObjectSchema, InspectionOrderByWithRelationInputObjectSchema.array()]).optional(), where: InspectionWhereInputObjectSchema.optional(), cursor: InspectionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InspectionScalarFieldEnumSchema, InspectionScalarFieldEnumSchema.array()]).optional() }).strict();