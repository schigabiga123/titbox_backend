import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogItemSelectObjectSchema as ProjectSyncLogItemSelectObjectSchema } from './objects/ProjectSyncLogItemSelect.schema';
import { ProjectSyncLogItemIncludeObjectSchema as ProjectSyncLogItemIncludeObjectSchema } from './objects/ProjectSyncLogItemInclude.schema';
import { ProjectSyncLogItemCreateInputObjectSchema as ProjectSyncLogItemCreateInputObjectSchema } from './objects/ProjectSyncLogItemCreateInput.schema';
import { ProjectSyncLogItemUncheckedCreateInputObjectSchema as ProjectSyncLogItemUncheckedCreateInputObjectSchema } from './objects/ProjectSyncLogItemUncheckedCreateInput.schema';

export const ProjectSyncLogItemCreateOneSchema: z.ZodType<Prisma.ProjectSyncLogItemCreateArgs> = z.object({ select: ProjectSyncLogItemSelectObjectSchema.optional(), include: ProjectSyncLogItemIncludeObjectSchema.optional(), data: z.union([ProjectSyncLogItemCreateInputObjectSchema, ProjectSyncLogItemUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogItemCreateArgs>;

export const ProjectSyncLogItemCreateOneZodSchema = z.object({ select: ProjectSyncLogItemSelectObjectSchema.optional(), include: ProjectSyncLogItemIncludeObjectSchema.optional(), data: z.union([ProjectSyncLogItemCreateInputObjectSchema, ProjectSyncLogItemUncheckedCreateInputObjectSchema]) }).strict();