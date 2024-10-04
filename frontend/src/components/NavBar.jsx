import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex w-full h-1/6 border border-red-500 justify-between px-10 text-3xl py-10">
      <div className="border border-red-500">
        <h1>Logo</h1>
      </div>
      <ul className="flex  gap-16">
        <li>
          <Link to="mostrar">Mostrar Tareas</Link>
        </li>
        <li>
          <Link to="agregar">Agregar Tarea</Link>
        </li>
      </ul>
    </nav>
  );
}
