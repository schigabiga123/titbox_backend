import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutSyncLogItemsInputObjectSchema as ProjectCreateWithoutSyncLogItemsInputObjectSchema } from './ProjectCreateWithoutSyncLogItemsInput.schema';
import { ProjectUncheckedCreateWithoutSyncLogItemsInputObjectSchema as ProjectUncheckedCreateWithoutSyncLogItemsInputObjectSchema } from './ProjectUncheckedCreateWithoutSyncLogItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectCreateWithoutSyncLogItemsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutSyncLogItemsInputObjectSchema)])
}).strict();
export const ProjectCreateOrConnectWithoutSyncLogItemsInputObjectSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutSyncLogItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateOrConnectWithoutSyncLogItemsInput>;
export const ProjectCreateOrConnectWithoutSyncLogItemsInputObjectZodSchema = makeSchema();
