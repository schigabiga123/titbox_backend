import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProjectSyncLogItemUpdateManyMutationInputObjectSchema as ProjectSyncLogItemUpdateManyMutationInputObjectSchema } from './objects/ProjectSyncLogItemUpdateManyMutationInput.schema';
import { ProjectSyncLogItemWhereInputObjectSchema as ProjectSyncLogItemWhereInputObjectSchema } from './objects/ProjectSyncLogItemWhereInput.schema';

export const ProjectSyncLogItemUpdateManySchema: z.ZodType<Prisma.ProjectSyncLogItemUpdateManyArgs> = z.object({ data: ProjectSyncLogItemUpdateManyMutationInputObjectSchema, where: ProjectSyncLogItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProjectSyncLogItemUpdateManyArgs>;

export const ProjectSyncLogItemUpdateManyZodSchema = z.object({ data: ProjectSyncLogItemUpdateManyMutationInputObjectSchema, where: ProjectSyncLogItemWhereInputObjectSchema.optional() }).strict();