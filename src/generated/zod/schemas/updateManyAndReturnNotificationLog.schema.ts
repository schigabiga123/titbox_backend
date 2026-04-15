import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NotificationLogSelectObjectSchema as NotificationLogSelectObjectSchema } from './objects/NotificationLogSelect.schema';
import { NotificationLogUpdateManyMutationInputObjectSchema as NotificationLogUpdateManyMutationInputObjectSchema } from './objects/NotificationLogUpdateManyMutationInput.schema';
import { NotificationLogWhereInputObjectSchema as NotificationLogWhereInputObjectSchema } from './objects/NotificationLogWhereInput.schema';

export const NotificationLogUpdateManyAndReturnSchema: z.ZodType<Prisma.NotificationLogUpdateManyAndReturnArgs> = z.object({ select: NotificationLogSelectObjectSchema.optional(), data: NotificationLogUpdateManyMutationInputObjectSchema, where: NotificationLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NotificationLogUpdateManyAndReturnArgs>;

export const NotificationLogUpdateManyAndReturnZodSchema = z.object({ select: NotificationLogSelectObjectSchema.optional(), data: NotificationLogUpdateManyMutationInputObjectSchema, where: NotificationLogWhereInputObjectSchema.optional() }).strict();