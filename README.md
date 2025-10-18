Maria del mar alvarez ibagon
407412

En el diseño del código se implementó una estructura organizada que prioriza la claridad y la mantenibilidad. La arquitectura general fue definida por el docente, y a partir de ella se desarrolló el proyecto siguiendo buenas prácticas de organización y coherencia entre los módulos. Se decidió manejar los errores del servidor mediante respuestas HTTP 500 y los aciertos 204, garantizando una comunicación consistente. Cada bloque de código crítico se encapsuló dentro de try-catch, lo que permite capturar excepciones y evitar que el flujo del programa se interrumpa. Se optó por trabajar con Node.js y Express, ya que tengo mayor experiencia con JavaScript, lo que facilitó la comprensión del flujo interno del servidor y agilizó el desarrollo. Además, se incorporó la librería UUID para generar identificadores únicos automáticamente, evitando colisiones entre registros y preservando la integridad de los datos.

También se definieron modelos explícitos (Task) y un enumerado de estados (TaskStatus) con el propósito de asegurar la integridad y permitir validaciones simples dentro del servicio antes de persistir los cambios. Las decisiones de lanzar errores cuando una tarea no existe o cuando el estado es inválido permiten que las fallas sean claras y fácilmente testeables. El método listOverdue, por su parte, recibe la fecha actual y delega la búsqueda al repositorio, centralizando la lógica temporal y mejorando la testabilidad al permitir simular fechas y repositorios durante las pruebas unitarias. Finalmente, los archivos se nombraron de forma ordenada y se añadieron comentarios explicativos en cada método, tanto para guiar el proceso de desarrollo como para facilitar su comprensión durante la revisión del código.

https://drive.google.com/drive/folders/1OF23agV236MobrKSLXJn8MEUROeHyxXw?usp=sharing


Para ejecutar el proyecto

npm i

npm start
