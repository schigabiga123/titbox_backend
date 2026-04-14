import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AttachmentOrderByWithRelationInputObjectSchema as AttachmentOrderByWithRelationInputObjectSchema } from './objects/AttachmentOrderByWithRelationInput.schema';
import { AttachmentWhereInputObjectSchema as AttachmentWhereInputObjectSchema } from './objects/AttachmentWhereInput.schema';
import { AttachmentWhereUniqueInputObjectSchema as AttachmentWhereUniqueInputObjectSchema } from './objects/AttachmentWhereUniqueInput.schema';
import { AttachmentCountAggregateInputObjectSchema as AttachmentCountAggregateInputObjectSchema } from './objects/AttachmentCountAggregateInput.schema';

export const AttachmentCountSchema: z.ZodType<Prisma.AttachmentCountArgs> = z.object({ orderBy: z.union([AttachmentOrderByWithRelationInputObjectSchema, AttachmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: AttachmentWhereInputObjectSchema.optional(), cursor: AttachmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AttachmentCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AttachmentCountArgs>;

export const AttachmentCountZodSchema = z.object({ orderBy: z.union([AttachmentOrderByWithRelationInputObjectSchema, AttachmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: AttachmentWhereInputObjectSchema.optional(), cursor: AttachmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AttachmentCountAggregateInputObjectSchema ]).optional() }).strict();