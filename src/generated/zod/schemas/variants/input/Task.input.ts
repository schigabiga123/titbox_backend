import * as z from 'zod';
// prettier-ignore
export const TaskInputSchema = z.object({
    id: z.string(),
    groupId: z.string(),
    projectId: z.string(),
    title: z.string(),
    desc: z.string().optional().nullable(),
    status: z.string().optional().nullable(),
    deadline: z.date().optional().nullable(),
    createdAt: z.date().optional().nullable(),
    startReminderSentAt: z.date().optional().nullable(),
    fullAddress: z.string().optional().nullable(),
    lat: z.number().optional().nullable(),
    lng: z.number().optional().nullable(),
    isPickUp: z.boolean().optional().nullable(),
    accepted: z.boolean().optional().nullable(),
    hanging: z.boolean().optional().nullable(),
    parkingSpot: z.string().optional().nullable(),
    assignedUserId: z.string().optional().nullable(),
    assignedUserId2: z.string().optional().nullable(),
    submittedUserId: z.string().optional().nullable(),
    project: z.unknown(),
    comments: z.array(z.unknown()),
    fields: z.array(z.unknown()),
    inspections: z.array(z.unknown()),
    portaChecklist: z.unknown().optional().nullable(),
    libra: z.unknown().optional().nullable(),
    events: z.array(z.unknown()),
    startDeadlineReminderLogs: z.array(z.unknown())
}).strict();

export type TaskInputType = z.infer<typeof TaskInputSchema>;
