import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LibraWhereInputObjectSchema as LibraWhereInputObjectSchema } from './objects/LibraWhereInput.schema';
import { LibraOrderByWithAggregationInputObjectSchema as LibraOrderByWithAggregationInputObjectSchema } from './objects/LibraOrderByWithAggregationInput.schema';
import { LibraScalarWhereWithAggregatesInputObjectSchema as LibraScalarWhereWithAggregatesInputObjectSchema } from './objects/LibraScalarWhereWithAggregatesInput.schema';
import { LibraScalarFieldEnumSchema } from './enums/LibraScalarFieldEnum.schema';
import { LibraCountAggregateInputObjectSchema as LibraCountAggregateInputObjectSchema } from './objects/LibraCountAggregateInput.schema';
import { LibraMinAggregateInputObjectSchema as LibraMinAggregateInputObjectSchema } from './objects/LibraMinAggregateInput.schema';
import { LibraMaxAggregateInputObjectSchema as LibraMaxAggregateInputObjectSchema } from './objects/LibraMaxAggregateInput.schema';
import { LibraAvgAggregateInputObjectSchema as LibraAvgAggregateInputObjectSchema } from './objects/LibraAvgAggregateInput.schema';
import { LibraSumAggregateInputObjectSchema as LibraSumAggregateInputObjectSchema } from './objects/LibraSumAggregateInput.schema';

export const LibraGroupBySchema: z.ZodType<Prisma.LibraGroupByArgs> = z.object({ where: LibraWhereInputObjectSchema.optional(), orderBy: z.union([LibraOrderByWithAggregationInputObjectSchema, LibraOrderByWithAggregationInputObjectSchema.array()]).optional(), having: LibraScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(LibraScalarFieldEnumSchema), _count: z.union([ z.literal(true), LibraCountAggregateInputObjectSchema ]).optional(), _min: LibraMinAggregateInputObjectSchema.optional(), _max: LibraMaxAggregateInputObjectSchema.optional(), _avg: LibraAvgAggregateInputObjectSchema.optional(), _sum: LibraSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LibraGroupByArgs>;

export const LibraGroupByZodSchema = z.object({ where: LibraWhereInputObjectSchema.optional(), orderBy: z.union([LibraOrderByWithAggregationInputObjectSchema, LibraOrderByWithAggregationInputObjectSchema.array()]).optional(), having: LibraScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(LibraScalarFieldEnumSchema), _count: z.union([ z.literal(true), LibraCountAggregateInputObjectSchema ]).optional(), _min: LibraMinAggregateInputObjectSchema.optional(), _max: LibraMaxAggregateInputObjectSchema.optional(), _avg: LibraAvgAggregateInputObjectSchema.optional(), _sum: LibraSumAggregateInputObjectSchema.optional() }).strict();