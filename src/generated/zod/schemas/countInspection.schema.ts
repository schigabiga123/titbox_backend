import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { InspectionOrderByWithRelationInputObjectSchema as InspectionOrderByWithRelationInputObjectSchema } from './objects/InspectionOrderByWithRelationInput.schema';
import { InspectionWhereInputObjectSchema as InspectionWhereInputObjectSchema } from './objects/InspectionWhereInput.schema';
import { InspectionWhereUniqueInputObjectSchema as InspectionWhereUniqueInputObjectSchema } from './objects/InspectionWhereUniqueInput.schema';
import { InspectionCountAggregateInputObjectSchema as InspectionCountAggregateInputObjectSchema } from './objects/InspectionCountAggregateInput.schema';

export const InspectionCountSchema: z.ZodType<Prisma.InspectionCountArgs> = z.object({ orderBy: z.union([InspectionOrderByWithRelationInputObjectSchema, InspectionOrderByWithRelationInputObjectSchema.array()]).optional(), where: InspectionWhereInputObjectSchema.optional(), cursor: InspectionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), InspectionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.InspectionCountArgs>;

export const InspectionCountZodSchema = z.object({ orderBy: z.union([InspectionOrderByWithRelationInputObjectSchema, InspectionOrderByWithRelationInputObjectSchema.array()]).optional(), where: InspectionWhereInputObjectSchema.optional(), cursor: InspectionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), InspectionCountAggregateInputObjectSchema ]).optional() }).strict();