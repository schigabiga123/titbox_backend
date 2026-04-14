import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutSyncLogItemsInputObjectSchema as ProjectCreateWithoutSyncLogItemsInputObjectSchema } from './ProjectCreateWithoutSyncLogItemsInput.schema';
import { ProjectUncheckedCreateWithoutSyncLogItemsInputObjectSchema as ProjectUncheckedCreateWithoutSyncLogItemsInputObjectSchema } from './ProjectUncheckedCreateWithoutSyncLogItemsInput.schema';
import { ProjectCreateOrConnectWithoutSyncLogItemsInputObjectSchema as ProjectCreateOrConnectWithoutSyncLogItemsInputObjectSchema } from './ProjectCreateOrConnectWithoutSyncLogItemsInput.schema';
import { ProjectUpsertWithoutSyncLogItemsInputObjectSchema as ProjectUpsertWithoutSyncLogItemsInputObjectSchema } from './ProjectUpsertWithoutSyncLogItemsInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateToOneWithWhereWithoutSyncLogItemsInputObjectSchema as ProjectUpdateToOneWithWhereWithoutSyncLogItemsInputObjectSchema } from './ProjectUpdateToOneWithWhereWithoutSyncLogItemsInput.schema';
import { ProjectUpdateWithoutSyncLogItemsInputObjectSchema as ProjectUpdateWithoutSyncLogItemsInputObjectSchema } from './ProjectUpdateWithoutSyncLogItemsInput.schema';
import { ProjectUncheckedUpdateWithoutSyncLogItemsInputObjectSchema as ProjectUncheckedUpdateWithoutSyncLogItemsInputObjectSchema } from './ProjectUncheckedUpdateWithoutSyncLogItemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutSyncLogItemsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutSyncLogItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutSyncLogItemsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutSyncLogItemsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ProjectWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ProjectWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProjectUpdateToOneWithWhereWithoutSyncLogItemsInputObjectSchema), z.lazy(() => ProjectUpdateWithoutSyncLogItemsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutSyncLogItemsInputObjectSchema)]).optional()
}).strict();
export const ProjectUpdateOneWithoutSyncLogItemsNestedInputObjectSchema: z.ZodType<Prisma.ProjectUpdateOneWithoutSyncLogItemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateOneWithoutSyncLogItemsNestedInput>;
export const ProjectUpdateOneWithoutSyncLogItemsNestedInputObjectZodSchema = makeSchema();
