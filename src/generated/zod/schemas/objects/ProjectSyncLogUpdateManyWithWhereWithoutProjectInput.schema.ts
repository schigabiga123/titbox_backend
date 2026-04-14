import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogScalarWhereInputObjectSchema as ProjectSyncLogScalarWhereInputObjectSchema } from './ProjectSyncLogScalarWhereInput.schema';
import { ProjectSyncLogUpdateManyMutationInputObjectSchema as ProjectSyncLogUpdateManyMutationInputObjectSchema } from './ProjectSyncLogUpdateManyMutationInput.schema';
import { ProjectSyncLogUncheckedUpdateManyWithoutProjectInputObjectSchema as ProjectSyncLogUncheckedUpdateManyWithoutProjectInputObjectSchema } from './ProjectSyncLogUncheckedUpdateManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectSyncLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProjectSyncLogUpdateManyMutationInputObjectSchema), z.lazy(() => ProjectSyncLogUncheckedUpdateManyWithoutProjectInputObjectSchema)])
}).strict();
export const ProjectSyncLogUpdateManyWithWhereWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogUpdateManyWithWhereWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogUpdateManyWithWhereWithoutProjectInput>;
export const ProjectSyncLogUpdateManyWithWhereWithoutProjectInputObjectZodSchema = makeSchema();
