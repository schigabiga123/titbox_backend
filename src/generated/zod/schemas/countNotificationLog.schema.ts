import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NotificationLogOrderByWithRelationInputObjectSchema as NotificationLogOrderByWithRelationInputObjectSchema } from './objects/NotificationLogOrderByWithRelationInput.schema';
import { NotificationLogWhereInputObjectSchema as NotificationLogWhereInputObjectSchema } from './objects/NotificationLogWhereInput.schema';
import { NotificationLogWhereUniqueInputObjectSchema as NotificationLogWhereUniqueInputObjectSchema } from './objects/NotificationLogWhereUniqueInput.schema';
import { NotificationLogCountAggregateInputObjectSchema as NotificationLogCountAggregateInputObjectSchema } from './objects/NotificationLogCountAggregateInput.schema';

export const NotificationLogCountSchema: z.ZodType<Prisma.NotificationLogCountArgs> = z.object({ orderBy: z.union([NotificationLogOrderByWithRelationInputObjectSchema, NotificationLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationLogWhereInputObjectSchema.optional(), cursor: NotificationLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), NotificationLogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.NotificationLogCountArgs>;

export const NotificationLogCountZodSchema = z.object({ orderBy: z.union([NotificationLogOrderByWithRelationInputObjectSchema, NotificationLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationLogWhereInputObjectSchema.optional(), cursor: NotificationLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), NotificationLogCountAggregateInputObjectSchema ]).optional() }).strict();