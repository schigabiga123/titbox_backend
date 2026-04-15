import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectUpdateWithoutSyncLogItemsInputObjectSchema as ProjectUpdateWithoutSyncLogItemsInputObjectSchema } from './ProjectUpdateWithoutSyncLogItemsInput.schema';
import { ProjectUncheckedUpdateWithoutSyncLogItemsInputObjectSchema as ProjectUncheckedUpdateWithoutSyncLogItemsInputObjectSchema } from './ProjectUncheckedUpdateWithoutSyncLogItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProjectUpdateWithoutSyncLogItemsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutSyncLogItemsInputObjectSchema)])
}).strict();
export const ProjectUpdateToOneWithWhereWithoutSyncLogItemsInputObjectSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutSyncLogItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutSyncLogItemsInput>;
export const ProjectUpdateToOneWithWhereWithoutSyncLogItemsInputObjectZodSchema = makeSchema();
