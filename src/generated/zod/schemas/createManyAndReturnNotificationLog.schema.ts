import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NotificationLogSelectObjectSchema as NotificationLogSelectObjectSchema } from './objects/NotificationLogSelect.schema';
import { NotificationLogCreateManyInputObjectSchema as NotificationLogCreateManyInputObjectSchema } from './objects/NotificationLogCreateManyInput.schema';

export const NotificationLogCreateManyAndReturnSchema: z.ZodType<Prisma.NotificationLogCreateManyAndReturnArgs> = z.object({ select: NotificationLogSelectObjectSchema.optional(), data: z.union([ NotificationLogCreateManyInputObjectSchema, z.array(NotificationLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.NotificationLogCreateManyAndReturnArgs>;

export const NotificationLogCreateManyAndReturnZodSchema = z.object({ select: NotificationLogSelectObjectSchema.optional(), data: z.union([ NotificationLogCreateManyInputObjectSchema, z.array(NotificationLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();