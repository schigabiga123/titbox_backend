import { errorHandler, notFoundHandler } from "./middlewares/error.middleware"
import { auditMutations } from "./middlewares/audit.middleware"
import { requireFirebaseAuth } from "./middlewares/firebase-auth.middleware"
import { requireCronSecret } from "./middlewares/cron-auth.middleware"

import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import cronRoutes from "./routes/cron.routes"
import projectRoutes from "./routes/project.routes"
import { swaggerSpec } from "./config/swagger";
import swaggerUi from "swagger-ui-express";

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("API running")
})

app.use("/cron", requireCronSecret, cronRoutes)
app.use("/projects", requireFirebaseAuth, auditMutations, projectRoutes)

app.use(notFoundHandler)
app.use(errorHandler)

const port = Number(process.env.PORT ?? 3000)

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`)
})
