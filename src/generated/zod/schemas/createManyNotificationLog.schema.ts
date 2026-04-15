import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NotificationLogCreateManyInputObjectSchema as NotificationLogCreateManyInputObjectSchema } from './objects/NotificationLogCreateManyInput.schema';

export const NotificationLogCreateManySchema: z.ZodType<Prisma.NotificationLogCreateManyArgs> = z.object({ data: z.union([ NotificationLogCreateManyInputObjectSchema, z.array(NotificationLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.NotificationLogCreateManyArgs>;

export const NotificationLogCreateManyZodSchema = z.object({ data: z.union([ NotificationLogCreateManyInputObjectSchema, z.array(NotificationLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();