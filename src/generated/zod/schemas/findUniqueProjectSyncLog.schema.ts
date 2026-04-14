import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogSelectObjectSchema as ProjectSyncLogSelectObjectSchema } from './objects/ProjectSyncLogSelect.schema';
import { ProjectSyncLogIncludeObjectSchema as ProjectSyncLogIncludeObjectSchema } from './objects/ProjectSyncLogInclude.schema';
import { ProjectSyncLogWhereUniqueInputObjectSchema as ProjectSyncLogWhereUniqueInputObjectSchema } from './objects/ProjectSyncLogWhereUniqueInput.schema';

export const ProjectSyncLogFindUniqueSchema: z.ZodType<Prisma.ProjectSyncLogFindUniqueArgs> = z.object({ select: ProjectSyncLogSelectObjectSchema.optional(), include: ProjectSyncLogIncludeObjectSchema.optional(), where: ProjectSyncLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogFindUniqueArgs>;

export const ProjectSyncLogFindUniqueZodSchema = z.object({ select: ProjectSyncLogSelectObjectSchema.optional(), include: ProjectSyncLogIncludeObjectSchema.optional(), where: ProjectSyncLogWhereUniqueInputObjectSchema }).strict();