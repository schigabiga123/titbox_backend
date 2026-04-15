import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectSyncLogItemScalarWhereInputObjectSchema as ProjectSyncLogItemScalarWhereInputObjectSchema } from './ProjectSyncLogItemScalarWhereInput.schema';
import { ProjectSyncLogItemUpdateManyMutationInputObjectSchema as ProjectSyncLogItemUpdateManyMutationInputObjectSchema } from './ProjectSyncLogItemUpdateManyMutationInput.schema';
import { ProjectSyncLogItemUncheckedUpdateManyWithoutSyncLogInputObjectSchema as ProjectSyncLogItemUncheckedUpdateManyWithoutSyncLogInputObjectSchema } from './ProjectSyncLogItemUncheckedUpdateManyWithoutSyncLogInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectSyncLogItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProjectSyncLogItemUpdateManyMutationInputObjectSchema), z.lazy(() => ProjectSyncLogItemUncheckedUpdateManyWithoutSyncLogInputObjectSchema)])
}).strict();
export const ProjectSyncLogItemUpdateManyWithWhereWithoutSyncLogInputObjectSchema: z.ZodType<Prisma.ProjectSyncLogItemUpdateManyWithWhereWithoutSyncLogInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectSyncLogItemUpdateManyWithWhereWithoutSyncLogInput>;
export const ProjectSyncLogItemUpdateManyWithWhereWithoutSyncLogInputObjectZodSchema = makeSchema();
