import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PortaChecklistOrderByWithRelationInputObjectSchema as PortaChecklistOrderByWithRelationInputObjectSchema } from './objects/PortaChecklistOrderByWithRelationInput.schema';
import { PortaChecklistWhereInputObjectSchema as PortaChecklistWhereInputObjectSchema } from './objects/PortaChecklistWhereInput.schema';
import { PortaChecklistWhereUniqueInputObjectSchema as PortaChecklistWhereUniqueInputObjectSchema } from './objects/PortaChecklistWhereUniqueInput.schema';
import { PortaChecklistCountAggregateInputObjectSchema as PortaChecklistCountAggregateInputObjectSchema } from './objects/PortaChecklistCountAggregateInput.schema';

export const PortaChecklistCountSchema: z.ZodType<Prisma.PortaChecklistCountArgs> = z.object({ orderBy: z.union([PortaChecklistOrderByWithRelationInputObjectSchema, PortaChecklistOrderByWithRelationInputObjectSchema.array()]).optional(), where: PortaChecklistWhereInputObjectSchema.optional(), cursor: PortaChecklistWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PortaChecklistCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PortaChecklistCountArgs>;

export const PortaChecklistCountZodSchema = z.object({ orderBy: z.union([PortaChecklistOrderByWithRelationInputObjectSchema, PortaChecklistOrderByWithRelationInputObjectSchema.array()]).optional(), where: PortaChecklistWhereInputObjectSchema.optional(), cursor: PortaChecklistWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PortaChecklistCountAggregateInputObjectSchema ]).optional() }).strict();