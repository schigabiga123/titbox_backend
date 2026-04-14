import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectUpdateWithoutTasksInputObjectSchema as ProjectUpdateWithoutTasksInputObjectSchema } from './ProjectUpdateWithoutTasksInput.schema';
import { ProjectUncheckedUpdateWithoutTasksInputObjectSchema as ProjectUncheckedUpdateWithoutTasksInputObjectSchema } from './ProjectUncheckedUpdateWithoutTasksInput.schema';
import { ProjectCreateWithoutTasksInputObjectSchema as ProjectCreateWithoutTasksInputObjectSchema } from './ProjectCreateWithoutTasksInput.schema';
import { ProjectUncheckedCreateWithoutTasksInputObjectSchema as ProjectUncheckedCreateWithoutTasksInputObjectSchema } from './ProjectUncheckedCreateWithoutTasksInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProjectUpdateWithoutTasksInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutTasksInputObjectSchema)]),
  create: z.union([z.lazy(() => ProjectCreateWithoutTasksInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutTasksInputObjectSchema)]),
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional()
}).strict();
export const ProjectUpsertWithoutTasksInputObjectSchema: z.ZodType<Prisma.ProjectUpsertWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpsertWithoutTasksInput>;
export const ProjectUpsertWithoutTasksInputObjectZodSchema = makeSchema();
