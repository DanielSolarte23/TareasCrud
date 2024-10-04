import  Tarea  from "../models/tareas.model.js";

export const mostrarTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find()
        res.json(tareas)
    } catch (error) {
        return res.status(500).json({ message: "no hay tareas" })
    }
}
export const crearTarea = async (req, res) => {
    try {
        const { titulo, descripcion, fecha } = req.body;
        const nuevaTarea = new Tarea({
            titulo,
            descripcion,
            fecha,
        })
        const guardarTarea = await nuevaTarea.save()
        res.json(guardarTarea)
    } catch (error) {
        return res.status(500).json({ message: "Error al guardar tarea" })
    }
}
export const mostrarUnaTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.id)
        if (!tarea) return res.status(404).json({ mensaje: "Tarea no encontrada" })
        res.json(tarea)
    } catch (error) {
        return res.status(404).json({ message: "Tarea no encontrada" })
        console.log(error);
    }
};

export const eliminarTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndDelete(req.params.id)
        if (!tarea) return res.status(404).json({ mensaje: "Tarea no encontrada" })
        return res.sendStatus(204)
    } catch (error) {
        return res.status(404).json({ message: "Tarea no encontrada" })
        console.log(error);
    }
}

export const actualizarTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        if (!tarea) return res.status(404).json({ mensaje: "Tarea no encontrada" })
        res.json(tarea)
    } catch (error) {
        return res.status(404).json({ message: "Tarea no encontrada" })
    }
}