import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutTasksInputObjectSchema as ProjectCreateWithoutTasksInputObjectSchema } from './ProjectCreateWithoutTasksInput.schema';
import { ProjectUncheckedCreateWithoutTasksInputObjectSchema as ProjectUncheckedCreateWithoutTasksInputObjectSchema } from './ProjectUncheckedCreateWithoutTasksInput.schema';
import { ProjectCreateOrConnectWithoutTasksInputObjectSchema as ProjectCreateOrConnectWithoutTasksInputObjectSchema } from './ProjectCreateOrConnectWithoutTasksInput.schema';
import { ProjectUpsertWithoutTasksInputObjectSchema as ProjectUpsertWithoutTasksInputObjectSchema } from './ProjectUpsertWithoutTasksInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateToOneWithWhereWithoutTasksInputObjectSchema as ProjectUpdateToOneWithWhereWithoutTasksInputObjectSchema } from './ProjectUpdateToOneWithWhereWithoutTasksInput.schema';
import { ProjectUpdateWithoutTasksInputObjectSchema as ProjectUpdateWithoutTasksInputObjectSchema } from './ProjectUpdateWithoutTasksInput.schema';
import { ProjectUncheckedUpdateWithoutTasksInputObjectSchema as ProjectUncheckedUpdateWithoutTasksInputObjectSchema } from './ProjectUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutTasksInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutTasksInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProjectUpdateToOneWithWhereWithoutTasksInputObjectSchema), z.lazy(() => ProjectUpdateWithoutTasksInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutTasksInputObjectSchema)]).optional()
}).strict();
export const ProjectUpdateOneRequiredWithoutTasksNestedInputObjectSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput>;
export const ProjectUpdateOneRequiredWithoutTasksNestedInputObjectZodSchema = makeSchema();
