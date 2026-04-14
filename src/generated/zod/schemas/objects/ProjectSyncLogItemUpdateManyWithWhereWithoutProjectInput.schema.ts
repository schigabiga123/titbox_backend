import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemScalarWhereInputObjectSchema as ProjectSyncLogItemScalarWhereInputObjectSchema } from './ProjectSyncLogItemScalarWhereInput.schema';
import { ProjectSyncLogItemUpdateManyMutationInputObjectSchema as ProjectSyncLogItemUpdateManyMutationInputObjectSchema } from './ProjectSyncLogItemUpdateManyMutationInput.schema';
import { ProjectSyncLogItemUncheckedUpdateManyWithoutProjectInputObjectSchema as ProjectSyncLogItemUncheckedUpdateManyWithoutProjectInputObjectSchema } from './ProjectSyncLogItemUncheckedUpdateManyWithoutProjectInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectSyncLogItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProjectSyncLogItemUpdateManyMutationInputObjectSchema), z.lazy(() => ProjectSyncLogItemUncheckedUpdateManyWithoutProjectInputObjectSchema)])
}).strict();
export const ProjectSyncLogItemUpdateManyWithWhereWithoutProjectInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemUpdateManyWithWhereWithoutProjectInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemUpdateManyWithWhereWithoutProjectInput>;
export const ProjectSyncLogItemUpdateManyWithWhereWithoutProjectInputObjectZodSchema = makeSchema();
