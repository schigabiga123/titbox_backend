import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NotificationLogSelectObjectSchema as NotificationLogSelectObjectSchema } from './objects/NotificationLogSelect.schema';
import { NotificationLogCreateInputObjectSchema as NotificationLogCreateInputObjectSchema } from './objects/NotificationLogCreateInput.schema';
import { NotificationLogUncheckedCreateInputObjectSchema as NotificationLogUncheckedCreateInputObjectSchema } from './objects/NotificationLogUncheckedCreateInput.schema';

export const NotificationLogCreateOneSchema: z.ZodType<Prisma.NotificationLogCreateArgs> = z.object({ select: NotificationLogSelectObjectSchema.optional(),  data: z.union([NotificationLogCreateInputObjectSchema, NotificationLogUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.NotificationLogCreateArgs>;

export const NotificationLogCreateOneZodSchema = z.object({ select: NotificationLogSelectObjectSchema.optional(),  data: z.union([NotificationLogCreateInputObjectSchema, NotificationLogUncheckedCreateInputObjectSchema]) }).strict();