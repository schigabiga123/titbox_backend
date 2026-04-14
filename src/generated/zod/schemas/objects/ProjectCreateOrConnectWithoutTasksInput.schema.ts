import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutTasksInputObjectSchema as ProjectCreateWithoutTasksInputObjectSchema } from './ProjectCreateWithoutTasksInput.schema';
import { ProjectUncheckedCreateWithoutTasksInputObjectSchema as ProjectUncheckedCreateWithoutTasksInputObjectSchema } from './ProjectUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProjectCreateWithoutTasksInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const ProjectCreateOrConnectWithoutTasksInputObjectSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateOrConnectWithoutTasksInput>;
export const ProjectCreateOrConnectWithoutTasksInputObjectZodSchema = makeSchema();
