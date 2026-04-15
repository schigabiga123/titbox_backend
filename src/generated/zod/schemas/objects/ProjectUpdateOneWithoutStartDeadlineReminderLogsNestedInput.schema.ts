import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectCreateWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectCreateWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectCreateOrConnectWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectUpsertWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectUpsertWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectUpsertWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectWhereInputObjectSchema as ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';
import { ProjectWhereUniqueInputObjectSchema as ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectUpdateWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectUpdateWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectUpdateWithoutStartDeadlineReminderLogsInput.schema';
import { ProjectUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema as ProjectUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema } from './ProjectUncheckedUpdateWithoutStartDeadlineReminderLogsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProjectCreateWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => ProjectUncheckedCreateWithoutStartDeadlineReminderLogsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutStartDeadlineReminderLogsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutStartDeadlineReminderLogsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ProjectWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ProjectWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProjectUpdateToOneWithWhereWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => ProjectUpdateWithoutStartDeadlineReminderLogsInputObjectSchema), z.lazy(() => ProjectUncheckedUpdateWithoutStartDeadlineReminderLogsInputObjectSchema)]).optional()
}).strict();
export const ProjectUpdateOneWithoutStartDeadlineReminderLogsNestedInputObjectSchema: z.ZodType<Prisma.ProjectUpdateOneWithoutStartDeadlineReminderLogsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProjectUpdateOneWithoutStartDeadlineReminderLogsNestedInput>;
export const ProjectUpdateOneWithoutStartDeadlineReminderLogsNestedInputObjectZodSchema = makeSchema();
