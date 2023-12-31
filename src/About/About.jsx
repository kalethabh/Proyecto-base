function About(){
const developers = [
  { name: 'Kaleth Benjumea Hernandez', role: 'Desarrollador Frontend/Backend' },
  { name: 'Harlem Hernandez Rodriguez', role: 'Desarrollador Backend' },
  { name: 'Camila', role: 'Diseñadora UX/UI' },
];

return (
        <div className="flex justify-center mt-4">
    <div className="bg-white p-6 rounded-lg shadow-md  h-[100rem] w-[80em]">

      <h1 className="text-3xl font-bold mb-4">Acerca de nuestra organización sin fines de lucro</h1>
      <p className="text-gray-700 text-lg">
        Somos una organización sin fines de lucro comprometida con la mejora de la comunidad y la causa que defendemos. Nuestra misión es mejorar la calidad de vida de las personas y promover el bienestar en todas las áreas de la sociedad.
      </p>
      <p className="text-gray-700 text-lg mt-4">
        Trabajamos incansablemente para lograr un impacto positivo en la vida de las personas a través de nuestros proyectos y programas. Creemos en la importancia de la educación, la igualdad, la sostenibilidad y el apoyo a quienes más lo necesitan.
      </p>
      <p className="text-gray-700 text-lg mt-4">
        Nuestra organización ha estado bastante activa, durante todo este tiempo hemos logrado impactar positivamente a miles de personas en la comunidad. Estamos comprometidos con la transparencia y la rendición de cuentas en todo lo que hacemos.
      </p>
      <h1 className="mt-6 font-extrabold">DESARROLLADORES</h1>
      <ul className="list-disc list-inside mt-2">
        {developers.map((developer, index) => (
            <li key={index} className="text-gray-700 text-lg">{developer.name} - {developer.role}</li>
            ))}
      </ul>
      <p className="text-gray-700 text-lg mt-4">
        Tu apoyo y participación son fundamentales para lograr nuestros objetivos. ¡Únete a nosotros en nuestra misión y juntos haremos del mundo un lugar mejor!
      </p>
    </div>
            </div>
  );
}

export default About