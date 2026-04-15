import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NotificationLogOrderByWithRelationInputObjectSchema as NotificationLogOrderByWithRelationInputObjectSchema } from './objects/NotificationLogOrderByWithRelationInput.schema';
import { NotificationLogWhereInputObjectSchema as NotificationLogWhereInputObjectSchema } from './objects/NotificationLogWhereInput.schema';
import { NotificationLogWhereUniqueInputObjectSchema as NotificationLogWhereUniqueInputObjectSchema } from './objects/NotificationLogWhereUniqueInput.schema';
import { NotificationLogScalarFieldEnumSchema } from './enums/NotificationLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NotificationLogFindFirstOrThrowSelectSchema: z.ZodType<Prisma.NotificationLogSelect> = z.object({
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

export const NotificationLogFindFirstOrThrowSelectZodSchema = z.object({
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

export const NotificationLogFindFirstOrThrowSchema: z.ZodType<Prisma.NotificationLogFindFirstOrThrowArgs> = z.object({ select: NotificationLogFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([NotificationLogOrderByWithRelationInputObjectSchema, NotificationLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationLogWhereInputObjectSchema.optional(), cursor: NotificationLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NotificationLogScalarFieldEnumSchema, NotificationLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.NotificationLogFindFirstOrThrowArgs>;

export const NotificationLogFindFirstOrThrowZodSchema = z.object({ select: NotificationLogFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([NotificationLogOrderByWithRelationInputObjectSchema, NotificationLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: NotificationLogWhereInputObjectSchema.optional(), cursor: NotificationLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NotificationLogScalarFieldEnumSchema, NotificationLogScalarFieldEnumSchema.array()]).optional() }).strict();