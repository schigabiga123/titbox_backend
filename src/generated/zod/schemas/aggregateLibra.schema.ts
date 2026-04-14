import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LibraOrderByWithRelationInputObjectSchema as LibraOrderByWithRelationInputObjectSchema } from './objects/LibraOrderByWithRelationInput.schema';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './objects/LibraWhereInput.schema';
import { LibraWhereUniqueInputObjectSchema as LibraWhereUniqueInputObjectSchema } from './objects/LibraWhereUniqueInput.schema';
import { LibraCountAggregateInputObjectSchema as LibraCountAggregateInputObjectSchema } from './objects/LibraCountAggregateInput.schema';
import { LibraMinAggregateInputObjectSchema as LibraMinAggregateInputObjectSchema } from './objects/LibraMinAggregateInput.schema';
import { LibraMaxAggregateInputObjectSchema as LibraMaxAggregateInputObjectSchema } from './objects/LibraMaxAggregateInput.schema';
import { LibraAvgAggregateInputObjectSchema as LibraAvgAggregateInputObjectSchema } from './objects/LibraAvgAggregateInput.schema';
import { LibraSumAggregateInputObjectSchema as LibraSumAggregateInputObjectSchema } from './objects/LibraSumAggregateInput.schema';

export const LibraAggregateSchema: z.ZodType<Prisma.LibraAggregateArgs> = z.object({ orderBy: z.union([LibraOrderByWithRelationInputObjectSchema, LibraOrderByWithRelationInputObjectSchema.array()]).optional(), where: LibraWhereInputObjectSchema.optional(), cursor: LibraWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), LibraCountAggregateInputObjectSchema ]).optional(), _min: LibraMinAggregateInputObjectSchema.optional(), _max: LibraMaxAggregateInputObjectSchema.optional(), _avg: LibraAvgAggregateInputObjectSchema.optional(), _sum: LibraSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LibraAggregateArgs>;

export const LibraAggregateZodSchema = z.object({ orderBy: z.union([LibraOrderByWithRelationInputObjectSchema, LibraOrderByWithRelationInputObjectSchema.array()]).optional(), where: LibraWhereInputObjectSchema.optional(), cursor: LibraWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), LibraCountAggregateInputObjectSchema ]).optional(), _min: LibraMinAggregateInputObjectSchema.optional(), _max: LibraMaxAggregateInputObjectSchema.optional(), _avg: LibraAvgAggregateInputObjectSchema.optional(), _sum: LibraSumAggregateInputObjectSchema.optional() }).strict();