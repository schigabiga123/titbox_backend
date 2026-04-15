import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TaskIncludeObjectSchema as TaskIncludeObjectSchema } from './objects/TaskInclude.schema';
import { TaskOrderByWithRelationInputObjectSchema as TaskOrderByWithRelationInputObjectSchema } from './objects/TaskOrderByWithRelationInput.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './objects/TaskWhereInput.schema';
import { TaskWhereUniqueInputObjectSchema as TaskWhereUniqueInputObjectSchema } from './objects/TaskWhereUniqueInput.schema';
import { TaskScalarFieldEnumSchema } from './enums/TaskScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TaskFindFirstSelectSchema: z.ZodType<Prisma.TaskSelect> = z.object({
    id: z.boolean().optional(),
    groupId: z.boolean().optional(),
    projectId: z.boolean().optional(),
    title: z.boolean().optional(),
    desc: z.boolean().optional(),
    status: z.boolean().optional(),
    deadline: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    startReminderSentAt: z.boolean().optional(),
    fullAddress: z.boolean().optional(),
    lat: z.boolean().optional(),
    lng: z.boolean().optional(),
    isPickUp: z.boolean().optional(),
    accepted: z.boolean().optional(),
    hanging: z.boolean().optional(),
    parkingSpot: z.boolean().optional(),
    assignedUserId: z.boolean().optional(),
    assignedUserId2: z.boolean().optional(),
    submittedUserId: z.boolean().optional(),
    project: z.boolean().optional(),
    comments: z.boolean().optional(),
    fields: z.boolean().optional(),
    inspections: z.boolean().optional(),
    portaChecklist: z.boolean().optional(),
    libra: z.boolean().optional(),
    events: z.boolean().optional(),
    startDeadlineReminderLogs: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TaskSelect>;

export const TaskFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    groupId: z.boolean().optional(),
    projectId: z.boolean().optional(),
    title: z.boolean().optional(),
    desc: z.boolean().optional(),
    status: z.boolean().optional(),
    deadline: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    startReminderSentAt: z.boolean().optional(),
    fullAddress: z.boolean().optional(),
    lat: z.boolean().optional(),
    lng: z.boolean().optional(),
    isPickUp: z.boolean().optional(),
    accepted: z.boolean().optional(),
    hanging: z.boolean().optional(),
    parkingSpot: z.boolean().optional(),
    assignedUserId: z.boolean().optional(),
    assignedUserId2: z.boolean().optional(),
    submittedUserId: z.boolean().optional(),
    project: z.boolean().optional(),
    comments: z.boolean().optional(),
    fields: z.boolean().optional(),
    inspections: z.boolean().optional(),
    portaChecklist: z.boolean().optional(),
    libra: z.boolean().optional(),
    events: z.boolean().optional(),
    startDeadlineReminderLogs: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TaskFindFirstSchema: z.ZodType<Prisma.TaskFindFirstArgs> = z.object({ select: TaskFindFirstSelectSchema.optional(), include: TaskIncludeObjectSchema.optional(), orderBy: z.union([TaskOrderByWithRelationInputObjectSchema, TaskOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskWhereInputObjectSchema.optional(), cursor: TaskWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskScalarFieldEnumSchema, TaskScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TaskFindFirstArgs>;

export const TaskFindFirstZodSchema = z.object({ select: TaskFindFirstSelectSchema.optional(), include: TaskIncludeObjectSchema.optional(), orderBy: z.union([TaskOrderByWithRelationInputObjectSchema, TaskOrderByWithRelationInputObjectSchema.array()]).optional(), where: TaskWhereInputObjectSchema.optional(), cursor: TaskWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskScalarFieldEnumSchema, TaskScalarFieldEnumSchema.array()]).optional() }).strict();