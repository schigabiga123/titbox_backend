import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LibraOrderByWithRelationInputObjectSchema as LibraOrderByWithRelationInputObjectSchema } from './objects/LibraOrderByWithRelationInput.schema';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './objects/LibraWhereInput.schema';
import { LibraWhereUniqueInputObjectSchema as LibraWhereUniqueInputObjectSchema } from './objects/LibraWhereUniqueInput.schema';
import { LibraCountAggregateInputObjectSchema as LibraCountAggregateInputObjectSchema } from './objects/LibraCountAggregateInput.schema';

export const LibraCountSchema: z.ZodType<Prisma.LibraCountArgs> = z.object({ orderBy: z.union([LibraOrderByWithRelationInputObjectSchema, LibraOrderByWithRelationInputObjectSchema.array()]).optional(), where: LibraWhereInputObjectSchema.optional(), cursor: LibraWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LibraCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.LibraCountArgs>;

export const LibraCountZodSchema = z.object({ orderBy: z.union([LibraOrderByWithRelationInputObjectSchema, LibraOrderByWithRelationInputObjectSchema.array()]).optional(), where: LibraWhereInputObjectSchema.optional(), cursor: LibraWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LibraCountAggregateInputObjectSchema ]).optional() }).strict();