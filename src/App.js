
import './App.css';
import Testimonio from './components/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alumnos del curso de JavaScript</h1>
          <Testimonio 
          nombre='Ana García'
          pais= 'Alemania'
          imagen='3'
          cargo= 'Desarrolladora Web'
          empresa= 'Tech Solutions'
          testimonio='Tomé el curso de Javascript y debo decir que superó mis expectativas. Los instructores estaban muy bien preparados y ofrecieron una gran cantidad de información de manera clara y concisa. Aprendí muchos conceptos nuevos y pude aplicarlos en proyectos reales en mi trabajo. Definitivamente recomendaría este curso a cualquiera que esté interesado en mejorar sus habilidades de programación.'
/>
          <Testimonio 
          nombre='Maria Torres'
          pais= 'Argentina'
          imagen='1'
          cargo= 'Desarrolladora de Software'
          empresa= 'ABC Technologies'
          testimonio='Me encantó el curso de Javascript que tomé. Los instructores eran muy amables y accesibles, y estaban dispuestos a responder cualquier pregunta que tuviera. Aprendí muchos conceptos nuevos y pude aplicarlos en mi trabajo diario. Me gustó especialmente cómo el curso abordó temas de desarrollo web desde una perspectiva de género inclusiva, lo que hizo que me sintiera cómoda y empoderada durante todo el proceso de aprendizaje.'
/>
          <Testimonio 
          nombre='Andrea González'
          pais= 'Uruguay'
          imagen='2'
          cargo= 'Estudiante de Diseño Web'
          empresa= 'Freelance'
          testimonio='Como estudiante de diseño web, quería aprender más sobre cómo agregar interactividad a mis diseños. Tomé el curso de Javascript y debo decir que fue una excelente elección. Aprendí a crear efectos de animación y a manipular el DOM de manera efectiva. Los instructores eran muy pacientes y explicaban todo de manera clara. '
          />
      </div>
    </div>
  );
}

export default App;
