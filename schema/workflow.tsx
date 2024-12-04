import { z } from "zod";

export const createWorkflowSchema = z.object({
  name: z.string().max(50),
  Description: z.string().max(80).optional(),
});
