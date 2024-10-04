export default function NuevaTarea() {
  return (
    <>
    <form action="">
        <div className="border border-red-600 flex flex-col justify-center px-32 gap-5">
            <input className="border px-5 py-5" type="text" placeholder="Titulo"/>
            <textarea className="border px-5" name="descripcion" id="" placeholder="Descripcion"></textarea>
            <button className="bg-lime-600 text-white">Agregar Tarea</button>
        </div>
    </form>
    </>
  )
}
