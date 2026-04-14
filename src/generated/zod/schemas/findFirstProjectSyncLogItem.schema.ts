import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogItemIncludeObjectSchema as ProjectSyncLogItemIncludeObjectSchema } from './objects/ProjectSyncLogItemInclude.schema';
import { ProjectSyncLogItemOrderByWithRelationInputObjectSchema as ProjectSyncLogItemOrderByWithRelationInputObjectSchema } from './objects/ProjectSyncLogItemOrderByWithRelationInput.schema';
import { ProjectSyncLogItemWhereInputObjectSchema as ProjectSyncLogItemWhereInputObjectSchema } from './objects/ProjectSyncLogItemWhereInput.schema';
import { ProjectSyncLogItemWhereUniqueInputObjectSchema as ProjectSyncLogItemWhereUniqueInputObjectSchema } from './objects/ProjectSyncLogItemWhereUniqueInput.schema';
import { ProjectSyncLogItemScalarFieldEnumSchema } from './enums/ProjectSyncLogItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectSyncLogItemFindFirstSelectSchema: z.ZodType<Prisma.ProjectSyncLogItemSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    syncLogId: z.boolean().optional(),
    projectId: z.boolean().optional(),
    pocketProjectId: z.boolean().optional(),
    projectTitle: z.boolean().optional(),
    success: z.boolean().optional(),
    skipped: z.boolean().optional(),
    skippedReason: z.boolean().optional(),
    createdProjects: z.boolean().optional(),
    updatedProjects: z.boolean().optional(),
    createdTasks: z.boolean().optional(),
    updatedTasks: z.boolean().optional(),
    updatedTaskFields: z.boolean().optional(),
    skippedTaskSync: z.boolean().optional(),
    errorMessage: z.boolean().optional(),
    changeDetails: z.boolean().optional(),
    syncLog: z.boolean().optional(),
    project: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogItemSelect>;

export const ProjectSyncLogItemFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    syncLogId: z.boolean().optional(),
    projectId: z.boolean().optional(),
    pocketProjectId: z.boolean().optional(),
    projectTitle: z.boolean().optional(),
    success: z.boolean().optional(),
    skipped: z.boolean().optional(),
    skippedReason: z.boolean().optional(),
    createdProjects: z.boolean().optional(),
    updatedProjects: z.boolean().optional(),
    createdTasks: z.boolean().optional(),
    updatedTasks: z.boolean().optional(),
    updatedTaskFields: z.boolean().optional(),
    skippedTaskSync: z.boolean().optional(),
    errorMessage: z.boolean().optional(),
    changeDetails: z.boolean().optional(),
    syncLog: z.boolean().optional(),
    project: z.boolean().optional()
  }).strict();

export const ProjectSyncLogItemFindFirstSchema: z.ZodType<Prisma.ProjectSyncLogItemFindFirstArgs> = z.object({ select: ProjectSyncLogItemFindFirstSelectSchema.optional(), include: ProjectSyncLogItemIncludeObjectSchema.optional(), orderBy: z.union([ProjectSyncLogItemOrderByWithRelationInputObjectSchema, ProjectSyncLogItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectSyncLogItemWhereInputObjectSchema.optional(), cursor: ProjectSyncLogItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectSyncLogItemScalarFieldEnumSchema, ProjectSyncLogItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogItemFindFirstArgs>;

export const ProjectSyncLogItemFindFirstZodSchema = z.object({ select: ProjectSyncLogItemFindFirstSelectSchema.optional(), include: ProjectSyncLogItemIncludeObjectSchema.optional(), orderBy: z.union([ProjectSyncLogItemOrderByWithRelationInputObjectSchema, ProjectSyncLogItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProjectSyncLogItemWhereInputObjectSchema.optional(), cursor: ProjectSyncLogItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProjectSyncLogItemScalarFieldEnumSchema, ProjectSyncLogItemScalarFieldEnumSchema.array()]).optional() }).strict();