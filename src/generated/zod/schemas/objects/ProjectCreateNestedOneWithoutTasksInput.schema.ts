import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutTasksInputObjectSchema as ProjectCreateWithoutTasksInputObjectSchema } from './ProjectCreateWithoutTasksInput.schema';
import { ProjectUncheckedCreateWithoutTasksInputObjectSchema as ProjectUncheckedCreateWithoutTasksInputObjectSchema } from './ProjectUncheckedCreateWithoutTasksInput.schema';
import { ProjectCreateOrConnectWithoutTasksInputObjectSchema as ProjectCreateOrConnectWithoutTasksInputObjectSchema } from './ProjectCreateOrConnectWithoutTasksInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutTasksInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProjectCreateNestedOneWithoutTasksInputObjectSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectCreateNestedOneWithoutTasksInput>;
export const ProjectCreateNestedOneWithoutTasksInputObjectZodSchema = makeSchema();
