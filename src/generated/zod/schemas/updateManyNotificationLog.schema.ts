import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NotificationLogUpdateManyMutationInputObjectSchema as NotificationLogUpdateManyMutationInputObjectSchema } from './objects/NotificationLogUpdateManyMutationInput.schema';
import { NotificationLogWhereInputObjectSchema as NotificationLogWhereInputObjectSchema } from './objects/NotificationLogWhereInput.schema';

export const NotificationLogUpdateManySchema: z.ZodType<Prisma.NotificationLogUpdateManyArgs> = z.object({ data: NotificationLogUpdateManyMutationInputObjectSchema, where: NotificationLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NotificationLogUpdateManyArgs>;

export const NotificationLogUpdateManyZodSchema = z.object({ data: NotificationLogUpdateManyMutationInputObjectSchema, where: NotificationLogWhereInputObjectSchema.optional() }).strict();