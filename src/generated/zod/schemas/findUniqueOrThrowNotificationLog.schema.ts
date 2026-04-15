import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NotificationLogSelectObjectSchema as NotificationLogSelectObjectSchema } from './objects/NotificationLogSelect.schema';
import { NotificationLogWhereUniqueInputObjectSchema as NotificationLogWhereUniqueInputObjectSchema } from './objects/NotificationLogWhereUniqueInput.schema';

export const NotificationLogFindUniqueOrThrowSchema: z.ZodType<Prisma.NotificationLogFindUniqueOrThrowArgs> = z.object({ select: NotificationLogSelectObjectSchema.optional(),  where: NotificationLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NotificationLogFindUniqueOrThrowArgs>;

export const NotificationLogFindUniqueOrThrowZodSchema = z.object({ select: NotificationLogSelectObjectSchema.optional(),  where: NotificationLogWhereUniqueInputObjectSchema }).strict();