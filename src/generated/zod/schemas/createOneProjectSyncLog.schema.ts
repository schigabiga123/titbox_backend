import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogSelectObjectSchema as ProjectSyncLogSelectObjectSchema } from './objects/ProjectSyncLogSelect.schema';
import { ProjectSyncLogIncludeObjectSchema as ProjectSyncLogIncludeObjectSchema } from './objects/ProjectSyncLogInclude.schema';
import { ProjectSyncLogCreateInputObjectSchema as ProjectSyncLogCreateInputObjectSchema } from './objects/ProjectSyncLogCreateInput.schema';
import { ProjectSyncLogUncheckedCreateInputObjectSchema as ProjectSyncLogUncheckedCreateInputObjectSchema } from './objects/ProjectSyncLogUncheckedCreateInput.schema';

export const ProjectSyncLogCreateOneSchema: z.ZodType<Prisma.ProjectSyncLogCreateArgs> = z.object({ select: ProjectSyncLogSelectObjectSchema.optional(), include: ProjectSyncLogIncludeObjectSchema.optional(), data: z.union([ProjectSyncLogCreateInputObjectSchema, ProjectSyncLogUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogCreateArgs>;

export const ProjectSyncLogCreateOneZodSchema = z.object({ select: ProjectSyncLogSelectObjectSchema.optional(), include: ProjectSyncLogIncludeObjectSchema.optional(), data: z.union([ProjectSyncLogCreateInputObjectSchema, ProjectSyncLogUncheckedCreateInputObjectSchema]) }).strict();