import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NotificationLogSelectObjectSchema as NotificationLogSelectObjectSchema } from './objects/NotificationLogSelect.schema';
import { NotificationLogWhereUniqueInputObjectSchema as NotificationLogWhereUniqueInputObjectSchema } from './objects/NotificationLogWhereUniqueInput.schema';

export const NotificationLogDeleteOneSchema: z.ZodType<Prisma.NotificationLogDeleteArgs> = z.object({ select: NotificationLogSelectObjectSchema.optional(),  where: NotificationLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NotificationLogDeleteArgs>;

export const NotificationLogDeleteOneZodSchema = z.object({ select: NotificationLogSelectObjectSchema.optional(),  where: NotificationLogWhereUniqueInputObjectSchema }).strict();