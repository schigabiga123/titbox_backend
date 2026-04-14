import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogSelectObjectSchema as ProjectSyncLogSelectObjectSchema } from './objects/ProjectSyncLogSelect.schema';
import { ProjectSyncLogIncludeObjectSchema as ProjectSyncLogIncludeObjectSchema } from './objects/ProjectSyncLogInclude.schema';
import { ProjectSyncLogWhereUniqueInputObjectSchema as ProjectSyncLogWhereUniqueInputObjectSchema } from './objects/ProjectSyncLogWhereUniqueInput.schema';

export const ProjectSyncLogFindUniqueOrThrowSchema: z.ZodType<Prisma.ProjectSyncLogFindUniqueOrThrowArgs> = z.object({ select: ProjectSyncLogSelectObjectSchema.optional(), include: ProjectSyncLogIncludeObjectSchema.optional(), where: ProjectSyncLogWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogFindUniqueOrThrowArgs>;

export const ProjectSyncLogFindUniqueOrThrowZodSchema = z.object({ select: ProjectSyncLogSelectObjectSchema.optional(), include: ProjectSyncLogIncludeObjectSchema.optional(), where: ProjectSyncLogWhereUniqueInputObjectSchema }).strict();