import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutSyncLogItemsInputObjectSchema as ProjectCreateWithoutSyncLogItemsInputObjectSchema } from './ProjectCreateWithoutSyncLogItemsInput.schema';
import { ProjectUncheckedCreateWithoutSyncLogItemsInputObjectSchema as ProjectUncheckedCreateWithoutSyncLogItemsInputObjectSchema } from './ProjectUncheckedCreateWithoutSyncLogItemsInput.schema';
import { ProjectCreateOrConnectWithoutSyncLogItemsInputObjectSchema as ProjectCreateOrConnectWithoutSyncLogItemsInputObjectSchema } from './ProjectCreateOrConnectWithoutSyncLogItemsInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutSyncLogItemsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutSyncLogItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutSyncLogItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProjectCreateNestedOneWithoutSyncLogItemsInputObjectSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutSyncLogItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateNestedOneWithoutSyncLogItemsInput>;
export const ProjectCreateNestedOneWithoutSyncLogItemsInputObjectZodSchema = makeSchema();
