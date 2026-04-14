import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogItemSelectObjectSchema as ProjectSyncLogItemSelectObjectSchema } from './objects/ProjectSyncLogItemSelect.schema';
import { ProjectSyncLogItemIncludeObjectSchema as ProjectSyncLogItemIncludeObjectSchema } from './objects/ProjectSyncLogItemInclude.schema';
import { ProjectSyncLogItemUpdateInputObjectSchema as ProjectSyncLogItemUpdateInputObjectSchema } from './objects/ProjectSyncLogItemUpdateInput.schema';
import { ProjectSyncLogItemUncheckedUpdateInputObjectSchema as ProjectSyncLogItemUncheckedUpdateInputObjectSchema } from './objects/ProjectSyncLogItemUncheckedUpdateInput.schema';
import { ProjectSyncLogItemWhereUniqueInputObjectSchema as ProjectSyncLogItemWhereUniqueInputObjectSchema } from './objects/ProjectSyncLogItemWhereUniqueInput.schema';

export const ProjectSyncLogItemUpdateOneSchema: z.ZodType<Prisma.ProjectSyncLogItemUpdateArgs> = z.object({ select: ProjectSyncLogItemSelectObjectSchema.optional(), include: ProjectSyncLogItemIncludeObjectSchema.optional(), data: z.union([ProjectSyncLogItemUpdateInputObjectSchema, ProjectSyncLogItemUncheckedUpdateInputObjectSchema]), where: ProjectSyncLogItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogItemUpdateArgs>;

export const ProjectSyncLogItemUpdateOneZodSchema = z.object({ select: ProjectSyncLogItemSelectObjectSchema.optional(), include: ProjectSyncLogItemIncludeObjectSchema.optional(), data: z.union([ProjectSyncLogItemUpdateInputObjectSchema, ProjectSyncLogItemUncheckedUpdateInputObjectSchema]), where: ProjectSyncLogItemWhereUniqueInputObjectSchema }).strict();