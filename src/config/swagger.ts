import { OpenAPIRegistry, OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

const registry = new OpenAPIRegistry();

const paginationQuerySchema = z.object({
  offset: z
    .coerce
    .number()
    .int()
    .min(0)
    .default(0)
    .openapi({
      description: "Index of the first item (0-based)",
      example: 0,
    }),
  limit: z
    .coerce
    .number()
    .int()
    .min(1)
    .max(100)
    .default(20)
    .openapi({
      description: "Number of items to return (1-100)",
      example: 20,
    }),
});

const paginationMetaSchema = z.object({
  totalCount: z.number().int().nonnegative(),
  offset: z.number().int().nonnegative(),
  limit: z.number().int().positive(),
  returnedCount: z.number().int().nonnegative(),
  currentRange: z
    .object({
      start: z.number().int().nonnegative(),
      end: z.number().int().nonnegative(),
    })
    .nullable(),
  hasNextPage: z.boolean(),
  hasPreviousPage: z.boolean(),
  nextOffset: z.number().int().nonnegative().nullable(),
  previousOffset: z.number().int().nonnegative().nullable(),
});

const paginatedProjectResponseSchema = z.object({
  data: z.array(z.unknown()),
  pagination: paginationMetaSchema,
});

const defaultErrorSchema = z.object({
  error: z.string(),
});

const attachmentSchema = z.object({
  url: z.string().min(1),
  type: z.enum(["photo", "file"]),
});

const taskPatchRequestSchema = z
  .object({
    id: z.string().min(1).optional(),
    groupId: z.string().min(1).optional(),
    projectId: z.string().min(1).optional(),
    title: z.string().min(1).optional(),
    desc: z.string().optional(),
    status: z.string().optional(),
    deadline: z.string().datetime().optional(),
    createdAt: z.string().datetime().optional(),
    fullAddress: z.string().optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    isPickUp: z.boolean().optional(),
    accepted: z.boolean().optional(),
    parkingSpot: z.string().nullable().optional(),
    assignedUserId: z.string().optional(),
    assignedUserId2: z.string().optional(),
    submittedUserId: z.string().optional(),
  })
  .openapi("TaskPatchRequest");

const taskFieldPatchRequestSchema = z
  .object({
    id: z.string().min(1).optional(),
    taskId: z.string().min(1).optional(),
    pocketId: z.string().nullable().optional(),
    name: z.string().min(1).optional(),
    data: z.string().optional(),
    type: z.string().optional(),
    attachments: z.array(attachmentSchema).optional(),
  })
  .openapi("TaskFieldPatchRequest");

const createTaskFieldRequestSchema = z
  .object({
    id: z.string().min(1).optional(),
    pocketId: z.string().nullable().optional(),
    name: z.string().min(1),
    data: z.string().nullable().optional(),
    type: z.string().nullable().optional(),
  })
  .openapi("CreateTaskFieldRequest");

const createCommentRequestSchema = z
  .object({
    id: z.string().min(1).optional(),
    text: z.string().min(1),
    submittedUserId: z.string().min(1).optional(),
    createdAt: z.string().datetime().optional(),
    userIds: z.array(z.string().min(1)).optional(),
    attachments: z.array(attachmentSchema).optional(),
  })
  .openapi("CreateCommentRequest");

const createTaskEventFieldRequestSchema = z.object({
  id: z.string().min(1).optional(),
  name: z.string().min(1),
  data: z.string().nullable().optional(),
  type: z.string().nullable().optional(),
  attachments: z.array(attachmentSchema).optional(),
});

const createTaskEventRequestSchema = z
  .object({
    id: z.string().min(1).optional(),
    name: z.string().nullable().optional(),
    createdAt: z.string().datetime().nullable().optional(),
    fields: z.array(createTaskEventFieldRequestSchema).min(1),
  })
  .openapi("CreateTaskEventRequest");

const inspectionSchema = z.object({
  id: z.string().min(1).optional(),
  key: z.string().min(1),
  checked: z.boolean(),
  note: z.string().nullable().optional(),
  data: z.string().nullable().optional(),
});

const createInspectionsRequestSchema = z
  .array(inspectionSchema)
  .openapi("CreateInspectionsRequest");

const inspectionPatchRequestSchema = z
  .object({
    id: z.string().min(1).optional(),
    taskId: z.string().min(1).optional(),
    key: z.string().min(1).optional(),
    checked: z.boolean().optional(),
    note: z.string().nullable().optional(),
    data: z.string().nullable().optional(),
  })
  .openapi("InspectionPatchRequest");

const portaChecklistSchema = z
  .object({
    id: z.string().min(1).optional(),
    isUserChecked: z.boolean().nullable().optional(),
    isTruckChecked: z.boolean().nullable().optional(),
    isTrailerChecked: z.boolean().nullable().optional(),
    isTraktorChecked: z.boolean().nullable().optional(),
    isBioChecked: z.boolean().nullable().optional(),
    isSzondaChecked: z.boolean().nullable().optional(),
    isStarted: z.boolean().nullable().optional(),
    startedAt: z.string().datetime().nullable().optional(),
  })
  .openapi("PortaChecklistRequest");

const portaChecklistPatchRequestSchema = z
  .object({
    id: z.string().min(1).optional(),
    taskId: z.string().min(1).optional(),
    isUserChecked: z.boolean().nullable().optional(),
    isTruckChecked: z.boolean().nullable().optional(),
    isTrailerChecked: z.boolean().nullable().optional(),
    isTraktorChecked: z.boolean().nullable().optional(),
    isBioChecked: z.boolean().nullable().optional(),
    isSzondaChecked: z.boolean().nullable().optional(),
    isStarted: z.boolean().nullable().optional(),
    startedAt: z.string().datetime().nullable().optional(),
  })
  .openapi("PortaChecklistPatchRequest");

const libraRequestSchema = z
  .object({
    id: z.string().min(1).optional(),
    szfCode: z.string().nullable().optional(),
    plateNumber: z.string().nullable().optional(),
    assignedUserId: z.string().nullable().optional(),
    amount: z.number().nullable().optional(),
    manuallyLibra: z.string().nullable().optional(),
    manuallyLibraComment: z.string().nullable().optional(),
    taskFieldId: z.string().nullable().optional(),
  })
  .openapi("LibraRequest");

registry.registerPath({
  method: "get",
  path: "/projects",
  tags: ["Project"],
  request: {
    query: paginationQuerySchema.extend({
      search: z
        .string()
        .optional()
        .openapi({
          description:
            "JSON string filter. Example: {\"szfCode\":\"SZF-123\",\"orderBy\":\"ASC\",\"task\":{\"pickupAddressContains\":\"Budapest\",\"deliveryAddressContains\":\"Kornye\",\"taskFilter\":\"open\",\"deadlineAfter\":\"2026-03-01T00:00:00.000Z\",\"assignedUserId\":\"user-1\",\"submittedUserId\":\"user-2\",\"status\":\"doing\",\"vontatoDataContains\":\"ABC-123\",\"potkocsiDataContains\":\"XYZ-456\"}}",
          example:
            "{\"szfCode\":\"SZF-123\",\"orderBy\":\"ASC\",\"task\":{\"pickupAddressContains\":\"Budapest\",\"deliveryAddressContains\":\"Kornye\",\"taskFilter\":\"open\",\"deadlineAfter\":\"2026-03-01T00:00:00.000Z\",\"assignedUserId\":\"user-1\",\"submittedUserId\":\"user-2\",\"status\":\"doing\",\"vontatoDataContains\":\"ABC-123\",\"potkocsiDataContains\":\"XYZ-456\"}}",
        }),
    }),
  },
  responses: {
    200: {
      description: "Paginated list of projects",
      content: {
        "application/json": {
          schema: paginatedProjectResponseSchema,
        },
      },
    },
    400: {
      description: "Invalid pagination query param",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
  },
});

registry.registerPath({
  method: "get",
  path: "/projects/{id}",
  tags: ["Project"],
  request: {
    params: z.object({
      id: z.string().min(1),
    }),
  },
  responses: {
    200: {
      description: "Project by id",
      content: {
        "application/json": {
          schema: z.unknown(),
        },
      },
    },
    404: {
      description: "Project not found",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
  },
});

registry.registerPath({
  method: "patch",
  path: "/projects/tasks/{id}",
  tags: ["Project"],
  request: {
    params: z.object({
      id: z.string().min(1),
    }),
    body: {
      content: {
        "application/json": {
          schema: taskPatchRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Patched task",
      content: {
        "application/json": {
          schema: z.unknown(),
        },
      },
    },
    400: {
      description: "Invalid patch payload",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
    404: {
      description: "Task not found",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
  },
});

registry.registerPath({
  method: "patch",
  path: "/projects/fields/{id}",
  tags: ["Project"],
  request: {
    params: z.object({
      id: z.string().min(1),
    }),
    body: {
      content: {
        "application/json": {
          schema: taskFieldPatchRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Patched task field",
      content: {
        "application/json": {
          schema: z.unknown(),
        },
      },
    },
    400: {
      description: "Invalid patch payload",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
    404: {
      description: "Task field not found",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
  },
});

registry.registerPath({
  method: "post",
  path: "/projects/tasks/{id}/comments",
  tags: ["Project"],
  request: {
    params: z.object({
      id: z.string().min(1),
    }),
    body: {
      content: {
        "application/json": {
          schema: createCommentRequestSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Created comment",
      content: {
        "application/json": {
          schema: z.unknown(),
        },
      },
    },
    400: {
      description: "Invalid create comment payload",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
    404: {
      description: "Task not found",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
  },
});

registry.registerPath({
  method: "post",
  path: "/projects/tasks/{id}/events",
  tags: ["Project"],
  request: {
    params: z.object({
      id: z.string().min(1),
    }),
    body: {
      content: {
        "application/json": {
          schema: createTaskEventRequestSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Created task event",
      content: {
        "application/json": {
          schema: z.unknown(),
        },
      },
    },
    400: {
      description: "Invalid create task event payload",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
    404: {
      description: "Task not found",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
  },
});

registry.registerPath({
  method: "post",
  path: "/projects/tasks/{id}/fields",
  tags: ["Project"],
  request: {
    params: z.object({
      id: z.string().min(1),
    }),
    body: {
      content: {
        "application/json": {
          schema: createTaskFieldRequestSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Created task field",
      content: {
        "application/json": {
          schema: z.unknown(),
        },
      },
    },
    400: {
      description: "Invalid create task field payload",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
    404: {
      description: "Task not found",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
  },
});

registry.registerPath({
  method: "post",
  path: "/projects/tasks/{id}/inspections",
  tags: ["Project"],
  request: {
    params: z.object({
      id: z.string().min(1),
    }),
    body: {
      content: {
        "application/json": {
          schema: createInspectionsRequestSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Created inspections",
      content: {
        "application/json": {
          schema: z.unknown(),
        },
      },
    },
    400: {
      description: "Invalid create inspections payload",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
    404: {
      description: "Task not found",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
  },
});

registry.registerPath({
  method: "patch",
  path: "/projects/inspections/{id}",
  tags: ["Project"],
  request: {
    params: z.object({
      id: z.string().min(1),
    }),
    body: {
      content: {
        "application/json": {
          schema: inspectionPatchRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Patched inspection",
      content: {
        "application/json": {
          schema: z.unknown(),
        },
      },
    },
    400: {
      description: "Invalid patch payload",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
    404: {
      description: "Inspection not found",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
  },
});

registry.registerPath({
  method: "post",
  path: "/projects/tasks/{id}/porta-checklist",
  tags: ["Project"],
  request: {
    params: z.object({
      id: z.string().min(1),
    }),
    body: {
      content: {
        "application/json": {
          schema: portaChecklistSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Created porta checklist",
      content: {
        "application/json": {
          schema: z.unknown(),
        },
      },
    },
    400: {
      description: "Invalid create porta checklist payload",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
    404: {
      description: "Task not found",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
  },
});

registry.registerPath({
  method: "post",
  path: "/projects/tasks/{id}/libra",
  tags: ["Project"],
  request: {
    params: z.object({
      id: z.string().min(1),
    }),
    body: {
      content: {
        "application/json": {
          schema: libraRequestSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Created libra",
      content: {
        "application/json": {
          schema: z.unknown(),
        },
      },
    },
    400: {
      description: "Invalid create libra payload",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
    404: {
      description: "Task not found",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
  },
});

registry.registerPath({
  method: "patch",
  path: "/projects/porta-checklists/{id}",
  tags: ["Project"],
  request: {
    params: z.object({
      id: z.string().min(1),
    }),
    body: {
      content: {
        "application/json": {
          schema: portaChecklistPatchRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Patched porta checklist",
      content: {
        "application/json": {
          schema: z.unknown(),
        },
      },
    },
    400: {
      description: "Invalid patch payload",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
    404: {
      description: "Porta checklist not found",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
  },
});

registry.registerPath({
  method: "delete",
  path: "/projects/attachments/{id}",
  tags: ["Project"],
  request: {
    params: z.object({
      id: z.string().min(1),
    }),
  },
  responses: {
    200: {
      description: "Deleted attachment",
      content: {
        "application/json": {
          schema: z.unknown(),
        },
      },
    },
    404: {
      description: "Attachment not found",
      content: {
        "application/json": {
          schema: defaultErrorSchema,
        },
      },
    },
  },
});

const generator = new OpenApiGeneratorV3(registry.definitions);

export const swaggerSpec = generator.generateDocument({
  openapi: "3.0.0",
  info: {
    title: "My API",
    version: "1.0.0",
  },
});
