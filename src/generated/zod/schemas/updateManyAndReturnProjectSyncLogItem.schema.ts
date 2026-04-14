import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogItemSelectObjectSchema as ProjectSyncLogItemSelectObjectSchema } from './objects/ProjectSyncLogItemSelect.schema';
import { ProjectSyncLogItemUpdateManyMutationInputObjectSchema as ProjectSyncLogItemUpdateManyMutationInputObjectSchema } from './objects/ProjectSyncLogItemUpdateManyMutationInput.schema';
import { ProjectSyncLogItemWhereInputObjectSchema as ProjectSyncLogItemWhereInputObjectSchema } from './objects/ProjectSyncLogItemWhereInput.schema';

export const ProjectSyncLogItemUpdateManyAndReturnSchema: z.ZodType<Prisma.ProjectSyncLogItemUpdateManyAndReturnArgs> = z.object({ select: ProjectSyncLogItemSelectObjectSchema.optional(), data: ProjectSyncLogItemUpdateManyMutationInputObjectSchema, where: ProjectSyncLogItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogItemUpdateManyAndReturnArgs>;

export const ProjectSyncLogItemUpdateManyAndReturnZodSchema = z.object({ select: ProjectSyncLogItemSelectObjectSchema.optional(), data: ProjectSyncLogItemUpdateManyMutationInputObjectSchema, where: ProjectSyncLogItemWhereInputObjectSchema.optional() }).strict();