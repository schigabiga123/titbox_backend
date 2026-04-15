import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NotificationLogSelectObjectSchema as NotificationLogSelectObjectSchema } from './objects/NotificationLogSelect.schema';
import { NotificationLogWhereUniqueInputObjectSchema as NotificationLogWhereUniqueInputObjectSchema } from './objects/NotificationLogWhereUniqueInput.schema';
import { NotificationLogCreateInputObjectSchema as NotificationLogCreateInputObjectSchema } from './objects/NotificationLogCreateInput.schema';
import { NotificationLogUncheckedCreateInputObjectSchema as NotificationLogUncheckedCreateInputObjectSchema } from './objects/NotificationLogUncheckedCreateInput.schema';
import { NotificationLogUpdateInputObjectSchema as NotificationLogUpdateInputObjectSchema } from './objects/NotificationLogUpdateInput.schema';
import { NotificationLogUncheckedUpdateInputObjectSchema as NotificationLogUncheckedUpdateInputObjectSchema } from './objects/NotificationLogUncheckedUpdateInput.schema';

export const NotificationLogUpsertOneSchema: z.ZodType<Prisma.NotificationLogUpsertArgs> = z.object({ select: NotificationLogSelectObjectSchema.optional(),  where: NotificationLogWhereUniqueInputObjectSchema, create: z.union([ NotificationLogCreateInputObjectSchema, NotificationLogUncheckedCreateInputObjectSchema ]), update: z.union([ NotificationLogUpdateInputObjectSchema, NotificationLogUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.NotificationLogUpsertArgs>;

export const NotificationLogUpsertOneZodSchema = z.object({ select: NotificationLogSelectObjectSchema.optional(),  where: NotificationLogWhereUniqueInputObjectSchema, create: z.union([ NotificationLogCreateInputObjectSchema, NotificationLogUncheckedCreateInputObjectSchema ]), update: z.union([ NotificationLogUpdateInputObjectSchema, NotificationLogUncheckedUpdateInputObjectSchema ]) }).strict();