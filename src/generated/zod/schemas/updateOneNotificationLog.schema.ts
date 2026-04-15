import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NotificationLogSelectObjectSchema as NotificationLogSelectObjectSchema } from './objects/NotificationLogSelect.schema';
import { NotificationLogUpdateInputObjectSchema as NotificationLogUpdateInputObjectSchema } from './objects/NotificationLogUpdateInput.schema';
import { NotificationLogUncheckedUpdateInputObjectSchema as NotificationLogUncheckedUpdateInputObjectSchema } from './objects/NotificationLogUncheckedUpdateInput.schema';
import { NotificationLogWhereUniqueInputObjectSchema as NotificationLogWhereUniqueInputObjectSchema } from './objects/NotificationLogWhereUniqueInput.schema';

export const NotificationLogUpdateOneSchema: z.ZodType<Prisma.NotificationLogUpdateArgs> = z.object({ select: NotificationLogSelectObjectSchema.optional(),  data: z.union([NotificationLogUpdateInputObjectSchema, NotificationLogUncheckedUpdateInputObjectSchema]), where: NotificationLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NotificationLogUpdateArgs>;

export const NotificationLogUpdateOneZodSchema = z.object({ select: NotificationLogSelectObjectSchema.optional(),  data: z.union([NotificationLogUpdateInputObjectSchema, NotificationLogUncheckedUpdateInputObjectSchema]), where: NotificationLogWhereUniqueInputObjectSchema }).strict();