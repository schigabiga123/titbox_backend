import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogItemSelectObjectSchema as ProjectSyncLogItemSelectObjectSchema } from './objects/ProjectSyncLogItemSelect.schema';
import { ProjectSyncLogItemIncludeObjectSchema as ProjectSyncLogItemIncludeObjectSchema } from './objects/ProjectSyncLogItemInclude.schema';
import { ProjectSyncLogItemWhereUniqueInputObjectSchema as ProjectSyncLogItemWhereUniqueInputObjectSchema } from './objects/ProjectSyncLogItemWhereUniqueInput.schema';
import { ProjectSyncLogItemCreateInputObjectSchema as ProjectSyncLogItemCreateInputObjectSchema } from './objects/ProjectSyncLogItemCreateInput.schema';
import { ProjectSyncLogItemUncheckedCreateInputObjectSchema as ProjectSyncLogItemUncheckedCreateInputObjectSchema } from './objects/ProjectSyncLogItemUncheckedCreateInput.schema';
import { ProjectSyncLogItemUpdateInputObjectSchema as ProjectSyncLogItemUpdateInputObjectSchema } from './objects/ProjectSyncLogItemUpdateInput.schema';
import { ProjectSyncLogItemUncheckedUpdateInputObjectSchema as ProjectSyncLogItemUncheckedUpdateInputObjectSchema } from './objects/ProjectSyncLogItemUncheckedUpdateInput.schema';

export const ProjectSyncLogItemUpsertOneSchema: z.ZodType<Prisma.ProjectSyncLogItemUpsertArgs> = z.object({ select: ProjectSyncLogItemSelectObjectSchema.optional(), include: ProjectSyncLogItemIncludeObjectSchema.optional(), where: ProjectSyncLogItemWhereUniqueInputObjectSchema, create: z.union([ ProjectSyncLogItemCreateInputObjectSchema, ProjectSyncLogItemUncheckedCreateInputObjectSchema ]), update: z.union([ ProjectSyncLogItemUpdateInputObjectSchema, ProjectSyncLogItemUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogItemUpsertArgs>;

export const ProjectSyncLogItemUpsertOneZodSchema = z.object({ select: ProjectSyncLogItemSelectObjectSchema.optional(), include: ProjectSyncLogItemIncludeObjectSchema.optional(), where: ProjectSyncLogItemWhereUniqueInputObjectSchema, create: z.union([ ProjectSyncLogItemCreateInputObjectSchema, ProjectSyncLogItemUncheckedCreateInputObjectSchema ]), update: z.union([ ProjectSyncLogItemUpdateInputObjectSchema, ProjectSyncLogItemUncheckedUpdateInputObjectSchema ]) }).strict();