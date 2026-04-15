import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NotificationLogOrderByWithRelationInputObjectSchema as NotificationLogOrderByWithRelationInputObjectSchema } from './objects/NotificationLogOrderByWithRelationInput.schema';
import { NotificationLogWhereInputObjectSchema as NotificationLogWhereInputObjectSchema } from './objects/NotificationLogWhereInput.schema';
import { NotificationLogWhereUniqueInputObjectSchema as NotificationLogWhereUniqueInputObjectSchema } from './objects/NotificationLogWhereUniqueInput.schema';
import { NotificationLogScalarFieldEnumSchema } from './enums/NotificationLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NotificationLogFindFirstSelectSchema: z.ZodType<Prisma.NotificationLogSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    notification: z.boolean().optional(),
    taskId: z.boolean().optional(),
    subTaskId: z.boolean().optional(),
    commentId: z.boolean().optional(),
    finished: z.boolean().optional(),
    deadline: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.NotificationLogSelect>;

export const NotificationLogFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    notification: z.boolean().optional(),
    taskId: z.boolean().optional(),
    subTaskId: z.boolean().optional(),
    commentId: z.boolean().optional(),
    finished: z.boolean().optional(),
    deadline: z.boolean().optional()
  }).strict();

export const NotificationLogFindFirstSchema: z.ZodType<Prisma.NotificationLogFindFirstArgs> = z.object({ select: NotificationLogFindFirstSelectSchema.optional(),  orderBy: z.union([NotificationLogOrderByWithRelationInputObjectSchema, NotificationLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationLogWhereInputObjectSchema.optional(), cursor: NotificationLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NotificationLogScalarFieldEnumSchema, NotificationLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.NotificationLogFindFirstArgs>;

export const NotificationLogFindFirstZodSchema = z.object({ select: NotificationLogFindFirstSelectSchema.optional(),  orderBy: z.union([NotificationLogOrderByWithRelationInputObjectSchema, NotificationLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationLogWhereInputObjectSchema.optional(), cursor: NotificationLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NotificationLogScalarFieldEnumSchema, NotificationLogScalarFieldEnumSchema.array()]).optional() }).strict();