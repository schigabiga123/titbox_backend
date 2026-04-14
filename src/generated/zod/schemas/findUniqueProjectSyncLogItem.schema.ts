import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogItemSelectObjectSchema as ProjectSyncLogItemSelectObjectSchema } from './objects/ProjectSyncLogItemSelect.schema';
import { ProjectSyncLogItemIncludeObjectSchema as ProjectSyncLogItemIncludeObjectSchema } from './objects/ProjectSyncLogItemInclude.schema';
import { ProjectSyncLogItemWhereUniqueInputObjectSchema as ProjectSyncLogItemWhereUniqueInputObjectSchema } from './objects/ProjectSyncLogItemWhereUniqueInput.schema';

export const ProjectSyncLogItemFindUniqueSchema: z.ZodType<Prisma.ProjectSyncLogItemFindUniqueArgs> = z.object({ select: ProjectSyncLogItemSelectObjectSchema.optional(), include: ProjectSyncLogItemIncludeObjectSchema.optional(), where: ProjectSyncLogItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogItemFindUniqueArgs>;

export const ProjectSyncLogItemFindUniqueZodSchema = z.object({ select: ProjectSyncLogItemSelectObjectSchema.optional(), include: ProjectSyncLogItemIncludeObjectSchema.optional(), where: ProjectSyncLogItemWhereUniqueInputObjectSchema }).strict();