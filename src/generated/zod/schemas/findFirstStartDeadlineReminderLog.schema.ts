import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { StartDeadlineReminderLogIncludeObjectSchema as StartDeadlineReminderLogIncludeObjectSchema } from './objects/StartDeadlineReminderLogInclude.schema';
import { StartDeadlineReminderLogOrderByWithRelationInputObjectSchema as StartDeadlineReminderLogOrderByWithRelationInputObjectSchema } from './objects/StartDeadlineReminderLogOrderByWithRelationInput.schema';
import { StartDeadlineReminderLogWhereInputObjectSchema as StartDeadlineReminderLogWhereInputObjectSchema } from './objects/StartDeadlineReminderLogWhereInput.schema';
import { StartDeadlineReminderLogWhereUniqueInputObjectSchema as StartDeadlineReminderLogWhereUniqueInputObjectSchema } from './objects/StartDeadlineReminderLogWhereUniqueInput.schema';
import { StartDeadlineReminderLogScalarFieldEnumSchema } from './enums/StartDeadlineReminderLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StartDeadlineReminderLogFindFirstSelectSchema: z.ZodType<Prisma.StartDeadlineReminderLogSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    sentAt: z.boolean().optional(),
    taskId: z.boolean().optional(),
    projectId: z.boolean().optional(),
    userId: z.boolean().optional(),
    recipientRole: z.boolean().optional(),
    task: z.boolean().optional(),
    project: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogSelect>;

export const StartDeadlineReminderLogFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    sentAt: z.boolean().optional(),
    taskId: z.boolean().optional(),
    projectId: z.boolean().optional(),
    userId: z.boolean().optional(),
    recipientRole: z.boolean().optional(),
    task: z.boolean().optional(),
    project: z.boolean().optional()
  }).strict();

export const StartDeadlineReminderLogFindFirstSchema: z.ZodType<Prisma.StartDeadlineReminderLogFindFirstArgs> = z.object({ select: StartDeadlineReminderLogFindFirstSelectSchema.optional(), include: StartDeadlineReminderLogIncludeObjectSchema.optional(), orderBy: z.union([StartDeadlineReminderLogOrderByWithRelationInputObjectSchema, StartDeadlineReminderLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: StartDeadlineReminderLogWhereInputObjectSchema.optional(), cursor: StartDeadlineReminderLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StartDeadlineReminderLogScalarFieldEnumSchema, StartDeadlineReminderLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StartDeadlineReminderLogFindFirstArgs>;

export const StartDeadlineReminderLogFindFirstZodSchema = z.object({ select: StartDeadlineReminderLogFindFirstSelectSchema.optional(), include: StartDeadlineReminderLogIncludeObjectSchema.optional(), orderBy: z.union([StartDeadlineReminderLogOrderByWithRelationInputObjectSchema, StartDeadlineReminderLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: StartDeadlineReminderLogWhereInputObjectSchema.optional(), cursor: StartDeadlineReminderLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StartDeadlineReminderLogScalarFieldEnumSchema, StartDeadlineReminderLogScalarFieldEnumSchema.array()]).optional() }).strict();