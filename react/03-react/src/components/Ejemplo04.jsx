export function Ejemplo04() {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Mi Lista de Tareas</h2>

  <form className="flex items-center gap-2 mb-4">
    <input
      type="text"
      placeholder="Escribe una tarea..."
      className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
    >
      Añadir
    </button>
  </form>

  <ul className="space-y-2">
    <li className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg">
      <span className="text-gray-700">Aprender Tailwind CSS</span>
      <button className="text-red-500 hover:text-red-700">✖</button>
    </li>
    <li className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg">
      <span className="text-gray-700">Construir una ToDo App</span>
      <button className="text-red-500 hover:text-red-700">✖</button>
    </li>
  </ul>
  
</div>

    )
}