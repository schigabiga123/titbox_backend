import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectUpdateWithoutTasksInputObjectSchema as ProjectUpdateWithoutTasksInputObjectSchema } from './ProjectUpdateWithoutTasksInput.schema';
import { ProjectUncheckedUpdateWithoutTasksInputObjectSchema as ProjectUncheckedUpdateWithoutTasksInputObjectSchema } from './ProjectUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProjectUpdateWithoutTasksInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutTasksInputObjectSchema)])
}).strict();
export const ProjectUpdateToOneWithWhereWithoutTasksInputObjectSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutTasksInput>;
export const ProjectUpdateToOneWithWhereWithoutTasksInputObjectZodSchema = makeSchema();
