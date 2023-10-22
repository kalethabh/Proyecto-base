function Voluntarios() {
  return (
    <div className="flex justify-center mt-10">
            <form action="https://harlemhernandez.pythonanywhere.com/create-voluntario" method="POST" id="formulario_voluntario" className="w-96 bg-white p-4 rounded-lg shadow-md">
                <h1 className="text-2xl mb-4">Ingrese el Voluntario</h1>
                <div className="mb-4">
                <label htmlFor="ID" className="block text-gray-600">ID</label>
                <input type="text" id="ID" name="ID" className="w-full border-2 border-gray-300 p-2 rounded-md" />
                </div>
                <div className="mb-4">
                <label htmlFor="Nombre" className="block text-gray-600">Nombre</label>
                <input type="text" id="Nombre" name="Nombre" className="w-full border-2 border-gray-300 p-2 rounded-md" />
                </div>
                <div className="mb-4">
                <label htmlFor="Apellido" className="block text-gray-600">Apellido</label>
                <input type="text" id="Apellido" name="Apellido" className="w-full border-2 border-gray-300 p-2 rounded-md" />
                </div>
                <div className="mb-4">
                <label htmlFor="Telefono" className="block text-gray-600">Teléfono</label>
                <input type="text" id="Telefono" name="Telefono" className="w-full border-2 border-gray-300 p-2 rounded-md" />
                </div>
                <div className="mb-4">
                <label htmlFor="Intereses" className="block text-gray-600">Intereses</label>
                <input type="text" id="Intereses" name="Intereses" className="w-full border-2 border-gray-300 p-2 rounded-md h-20" />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
            </form>
    </div>
  );
}

export default Voluntarios;
