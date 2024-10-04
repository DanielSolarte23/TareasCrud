import { Router } from "express";
import {
  mostrarUnaTarea,
  mostrarTareas,
  actualizarTarea,
  eliminarTarea,
  crearTarea,
} from "../controllers/tareas.controller.js";

const router = Router();

router.get("/mostrar", mostrarTareas);
router.get("/mostrar/:id", mostrarUnaTarea);
router.post("/agregar", crearTarea);
router.delete("/eliminar/:id", eliminarTarea);
router.put("/actualizar/:id", actualizarTarea);

export default router;
