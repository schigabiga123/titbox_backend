import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NotificationLogWhereInputObjectSchema as NotificationLogWhereInputObjectSchema } from './objects/NotificationLogWhereInput.schema';

export const NotificationLogDeleteManySchema: z.ZodType<Prisma.NotificationLogDeleteManyArgs> = z.object({ where: NotificationLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NotificationLogDeleteManyArgs>;

export const NotificationLogDeleteManyZodSchema = z.object({ where: NotificationLogWhereInputObjectSchema.optional() }).strict();