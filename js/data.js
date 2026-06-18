/* data.js — Contenido completo del Taller de IA en Investigación en Salud
   Fuentes: Para_la_Página_con_el_taller.docx + informe_completo_taller_IA_investigacion_salud.docx
   Separación 2A/2B y 3A/3B según instrucciones del prompt principal. */

/* ── Helpers HTML reutilizables ── */
function tabla(headers, rows) {
  const ths = headers.map(h => `<th>${h}</th>`).join('');
  const trs = rows.map(r => '<tr>' + r.map(c => `<td>${c}</td>`).join('') + '</tr>').join('');
  return `<div class="table-wrap"><table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
}
function prompt(label, texto, clase) {
  return `<div class="prompt-block${clase ? ' ' + clase : ''}"><div class="prompt-label">${label}</div><div class="prompt-text">${texto}</div></div>`;
}
function codigo(lang, texto) {
  return `<div class="code-block"><div class="code-header">${lang}</div><pre>${texto}</pre></div>`;
}
function checklist(key, items) {
  const lis = items.map(it => `<li class="checklist-item"><input type="checkbox"><label>${it}</label></li>`).join('');
  return `<div class="checklist-container" data-key="${key}">
    <div class="checklist-header">
      <span class="checklist-progress">0 / ${items.length} completados</span>
      <button class="btn-reset-checklist">Reiniciar</button>
    </div>
    <div class="progress-bar-wrap"><div class="progress-bar" style="width:0%"></div></div>
    <ul class="checklist-items">${lis}</ul>
  </div>`;
}
function card(titulo, cuerpo, badge) {
  const b = badge ? `<span class="time-badge">${badge}</span>` : '';
  return `<div class="card"><div class="card-header dorado">${titulo}${b}</div><div class="card-body">${cuerpo}</div></div>`;
}

/* ════════════════════════════════════════════════════════
   APP_DATA — estructura principal
   ════════════════════════════════════════════════════════ */
const APP_DATA = {
  sessions: [

/* ══════════════ 0. INICIO ══════════════ */
{
  id: 'inicio',
  menuTitle: 'Inicio',
  tabs: [{
    id: 'inicio-main',
    title: 'Presentación del taller',
    content: `
<div class="inicio-hero">
  <div class="logos-row">
    <img src="assets/logo-fucs-dark.png" alt="Universidad FUCS">
    <img src="assets/logo-profundamente-dark.png" alt="Laboratorio ProfundaMente">
  </div>
  <h1>Introducción a la IA con aplicación a la investigación clínica y epidemiológica</h1>
  <p>Taller práctico en sesiones guiadas · Programa GLORIA · FUCS / Laboratorio ProfundaMente</p>
</div>

${card('Presentación general y propósito central', `
<p>Este taller consolida la planeación pedagógica completa de aplicaciones prácticas de la IA en investigación en salud, estructurado en cuatro sesiones prácticas. Se orienta a desarrollar competencias aplicadas en el uso crítico, transparente y reproducible de herramientas de inteligencia artificial generativa en investigación, docencia y comunicación académica en ciencias de la salud.</p>
<p>La propuesta formativa se basa en una progresión de complejidad: desde la interacción básica con chatbots y la construcción de prompts, hasta la lectura asistida por fuentes, la creación de asistentes personalizados, la investigación profunda, la escritura académica asistida y el análisis reproducible de bases de datos en Python.</p>
<div class="info-section dorado">
  <strong>Propósito central:</strong> Formar participantes capaces de integrar IA generativa en tareas reales de investigación en salud, manteniendo criterios de trazabilidad, verificación, ética, reproducibilidad y responsabilidad académica.
</div>
`)}

${card('Objetivo general', `
<p>Desarrollar competencias prácticas para utilizar herramientas de inteligencia artificial generativa en la formulación, análisis, síntesis, escritura, visualización y modelamiento de información científica en salud, mediante actividades guiadas, productos verificables y reflexión crítica sobre sus limitaciones.</p>
<h3>Objetivos específicos</h3>
<ol class="objetivo-lista">
  <li>Comprender el funcionamiento general de los chatbots y la importancia de escoger el modelo o herramienta adecuada según la tarea.</li>
  <li>Diseñar prompts robustos incorporando rol, contexto, tarea, restricciones, criterios de calidad y formato de salida.</li>
  <li>Utilizar NotebookLM para trabajar con fuentes documentales, formular preguntas referenciadas y generar recursos de estudio.</li>
  <li>Diseñar GPT personalizados o Gems para automatizar flujos académicos repetitivos en salud.</li>
  <li>Realizar investigación profunda asistida por IA, evaluando críticamente la pertinencia y trazabilidad de las fuentes.</li>
  <li>Emplear IA como apoyo en la planificación, redacción, revisión y adaptación de textos académicos.</li>
  <li>Ejecutar un flujo reproducible de ciencia de datos en Google Colab usando Python, desde la carga de una base hasta modelos predictivos iniciales.</li>
  <li>Reconocer riesgos de uso: alucinaciones, sesgo, fuga de información, errores de interpretación, dependencia excesiva y falta de validación.</li>
</ol>
`)}

${card('Perfil de participantes', `
<p>El taller está dirigido a docentes, estudiantes, residentes, investigadores y profesionales de ciencias de la salud interesados en incorporar herramientas de IA generativa a procesos de investigación, aprendizaje, análisis de información y producción académica.</p>
`)}

${card('Duración y organización', tabla(
  ['Sesión','Duración','Eje formativo','Producto principal'],
  [
    ['1','2 horas','Uso práctico de chatbots, prompts, formatos de salida e infografía metodológica','Tabla metodológica y prompt de infografía de un artículo'],
    ['2A','1 hora','NotebookLM para lectura y síntesis basada en fuentes','Cuaderno con fuentes, consultas referenciadas y producto de estudio'],
    ['2B','1 hora','GPT personalizados o Gems','Asistente personalizado diseñado y probado'],
    ['3A','1 hora','Investigación profunda asistida por IA','Informe documentado y matriz crítica de fuentes'],
    ['3B','1 hora','Escritura asistida por IA','Borrador académico revisado y declaración de uso de IA'],
    ['4','2 horas','Análisis de bases de datos con chatbot y Python reproducible','Cuaderno Colab con análisis y modelos predictivos'],
  ]
))}

${card('Enfoque pedagógico transversal', `
<p>El diseño instruccional se fundamenta en aprendizaje activo, aprendizaje basado en productos, práctica guiada y reflexión crítica. Cada sesión combina una introducción breve con actividades progresivas y productos concretos, de modo que los participantes no solo observen el uso de herramientas, sino que construyan artefactos aplicables a sus propios proyectos.</p>
<h3>Principios pedagógicos</h3>
${tabla(
  ['Principio','Aplicación en el taller'],
  [
    ['Aprender haciendo','Cada bloque produce un resultado parcial: prompt, tabla, informe, asistente, borrador, modelo o visualización.'],
    ['Progresión de complejidad','Las tareas avanzan desde consultas simples hasta flujos de trabajo reproducibles y productos académicos integrados.'],
    ['Verificación humana','Toda salida de IA debe contrastarse con fuentes, documentos, datos o criterios metodológicos.'],
    ['Transparencia','Se promueve documentar prompts, decisiones, fuentes, limitaciones y uso de IA.'],
    ['Transferencia','Los participantes trabajan con temas, artículos o bases de datos relevantes para su contexto académico.'],
    ['Responsabilidad ética','Se evita el uso de datos sensibles sin autorización y se enfatiza que la IA no sustituye juicio clínico ni metodológico.'],
  ]
)}
<h3>Ciclo metodológico común</h3>
<ol>
  <li><strong>Contextualización:</strong> el facilitador presenta el problema, la herramienta y el producto esperado.</li>
  <li><strong>Demostración:</strong> se muestra una tarea breve con un ejemplo del área de salud.</li>
  <li><strong>Práctica guiada:</strong> los estudiantes replican el flujo con su propio tema, fuente o base de datos.</li>
  <li><strong>Iteración:</strong> se solicita a la IA una mejora, revisión crítica o cambio de formato.</li>
  <li><strong>Verificación:</strong> se contrastan respuestas con fuentes, datos o criterios metodológicos.</li>
  <li><strong>Socialización:</strong> se comparte un producto, un hallazgo y una limitación.</li>
  <li><strong>Transferencia:</strong> se define cómo continuar el producto después del taller.</li>
</ol>
`)}

${card('Mapa curricular de sesiones y productos', tabla(
  ['Sesión','Competencia central','Herramientas','Evidencias de aprendizaje'],
  [
    ['1','Interactuar con chatbots y transformar artículos en productos metodológicos visuales','ChatGPT u otro chatbot, generación de imágenes, canvas/proyectos','Prompt maestro, tabla metodológica, resumen, prompt de infografía'],
    ['2A','Leer, sintetizar y producir recursos desde fuentes documentales','NotebookLM','Cuaderno, fuentes, respuestas referenciadas, informe, tabla, mapa o cuestionario'],
    ['2B','Diseñar asistentes especializados para tareas académicas repetitivas','ChatGPT GPTs, GPT Store, Gemini Gems','Propósito, instrucciones, capacidades, prueba y forma de compartir'],
    ['3A','Realizar investigación profunda documentada y evaluar fuentes','Deep Research en ChatGPT/Gemini u otras herramientas autorizadas','Pregunta delimitada, informe, matriz crítica, síntesis y vacíos'],
    ['3B','Planear, redactar, revisar y adaptar textos académicos con IA','Chatbot, Canvas o herramienta de escritura asistida','Esquema, borrador, revisión, versión adaptada y declaración de uso de IA'],
    ['4','Analizar bases de datos en salud de forma reproducible con Python','Google Colab, Python, chatbot, scikit-learn, XGBoost, LightGBM','Notebook funcional, descriptivos, modelos, métricas e interpretación crítica'],
  ]
))}

${card('Evaluación del aprendizaje', `
<h3>Evidencias mínimas por sesión</h3>
${tabla(
  ['Sesión','Evidencias mínimas'],
  [
    ['1','Prompt maestro, tabla metodológica, resumen o ficha, prompt de infografía y comentario crítico.'],
    ['2A','Cuaderno NotebookLM, fuentes cargadas, tres respuestas referenciadas y producto de estudio.'],
    ['2B','Nombre y propósito del GPT/Gem, instrucciones, capacidades seleccionadas, prueba y ajuste.'],
    ['3A','Pregunta delimitada, informe de investigación profunda, matriz crítica y síntesis de 250 palabras.'],
    ['3B','Esquema, borrador, versión revisada, formato adaptado y declaración de uso de IA.'],
    ['4','Notebook Colab, descriptivos, modelos, métricas e interpretación crítica.'],
  ]
)}
<h3>Rúbrica global</h3>
${tabla(
  ['Criterio','Excelente','Aceptable','Requiere mejora'],
  [
    ['Pertinencia','El producto responde claramente al objetivo y al contexto de salud.','Responde parcialmente al objetivo.','No se ajusta al objetivo o carece de contexto.'],
    ['Trazabilidad','Las afirmaciones se vinculan a fuentes, datos o decisiones explícitas.','Hay trazabilidad parcial.','No se puede verificar el origen de la información.'],
    ['Uso de IA','Los prompts son claros, iterativos y documentados.','Los prompts son comprensibles pero poco refinados.','El uso de IA es genérico o no documentado.'],
    ['Rigor metodológico','Reconoce límites, sesgos y necesidades de verificación.','Reconoce algunas limitaciones.','Interpreta sin cautela o con sobreafirmaciones.'],
    ['Producto académico','Claro, completo, organizado y reutilizable.','Funcional pero con problemas de claridad o estructura.','Incompleto o difícil de utilizar.'],
    ['Reflexión crítica','Identifica utilidad, riesgos y acciones de mejora.','Reflexión breve con algunos elementos críticos.','No hay reflexión o es meramente descriptiva.'],
  ]
)}
`)}
`
  }]
},

/* ══════════════ 1. SESIÓN 1 ══════════════ */
{
  id: 'sesion-1',
  menuTitle: 'Sesión 1 · Del chatbot a la infografía metodológica',
  numLabel: '1',
  tabs: [
    {
      id: 's1-req',
      title: 'Requisitos de la sesión',
      content: `
${card('Preparación previa del estudiante', `
<p>Cada estudiante deberá llevar a la sesión:</p>
<ol>
  <li><strong>Un artículo científico en PDF</strong>, preferiblemente relacionado con su línea de interés.</li>
  <li>El artículo debe tener una sección metodológica clara.</li>
  <li>Idealmente debe ser un artículo original, no una revisión narrativa.</li>
  <li>Puede ser clínico, epidemiológico, educativo, cualitativo, de ciencias básicas, salud pública, inteligencia artificial en salud, educación médica u otra área afín.</li>
</ol>
<h3>Criterios sugeridos para escoger el artículo</h3>
${tabla(
  ['Elemento','Pregunta orientadora'],
  [
    ['Problema de investigación','¿Qué problema aborda?'],
    ['Objetivo','¿Qué pretendía evaluar o describir?'],
    ['Diseño','¿Qué tipo de estudio se realizó?'],
    ['Población','¿Quiénes fueron incluidos?'],
    ['Muestra','¿Cuántos participantes, casos, imágenes, historias clínicas o registros se analizaron?'],
    ['Variables','¿Qué variables principales se midieron?'],
    ['Procedimiento','¿Qué pasos siguieron los investigadores?'],
    ['Análisis','¿Qué métodos estadísticos, cualitativos o computacionales usaron?'],
    ['Consideraciones éticas','¿El artículo menciona aprobación ética, consentimiento o manejo de datos?'],
  ]
)}
`)}
${card('Cuentas y plataformas necesarias', `
<ul>
  <li>Cuenta activa en <strong>ChatGPT</strong> (versión gratuita o Plus) o en <strong>Gemini</strong>.</li>
  <li>Navegador web actualizado con acceso a internet.</li>
  <li>El artículo científico en PDF listo para cargar o copiar.</li>
</ul>
`)}
`
    },
    {
      id: 's1-obj',
      title: 'Objetivos y resultados',
      content: `
${card('Objetivo general de la sesión', `
<p>Capacitar a los estudiantes en el uso progresivo de herramientas de IA generativa para analizar, estructurar y representar visualmente la metodología de un artículo científico en salud.</p>
`)}
${card('Resultados de aprendizaje', `
<p>Al finalizar la sesión, cada estudiante estará en capacidad de:</p>
<ol class="objetivo-lista">
  <li>Interactuar con un chatbot de manera más estratégica.</li>
  <li>Seleccionar el modelo o modo de IA más apropiado según la tarea.</li>
  <li>Formular prompts con contexto, rol, tarea, restricciones y formato de salida.</li>
  <li>Extraer de un artículo científico los elementos metodológicos principales.</li>
  <li>Transformar la información metodológica en tablas, resúmenes y esquemas.</li>
  <li>Usar iteraciones sucesivas para mejorar la precisión de la respuesta.</li>
  <li>Diseñar un prompt para generar una infografía metodológica basada en un artículo.</li>
  <li>Reconocer limitaciones y riesgos de usar IA para interpretar literatura científica.</li>
</ol>
`)}
${card('Estructura de la sesión', tabla(
  ['Tiempo','Bloque','Actividad','Producto'],
  [
    ['0:00–0:15','Presentación inicial','Marco conceptual de IA generativa en investigación','Comprensión general'],
    ['0:15–0:30','Chatbot y modelo','Cómo conversar con la IA y escoger modelo','Primer prompt exploratorio'],
    ['0:30–0:55','Prompt efectivo','Construcción progresiva del prompt','Prompt maestro'],
    ['0:55–1:15','Extracción metodológica','Análisis del artículo individual','Tabla metodológica'],
    ['1:15–1:30','Formatos de salida','Tabla, resumen, HTML, Excel o documento','Salidas estructuradas'],
    ['1:30–1:43','Hilos, biblioteca, proyectos, canvas y skills','Organización del trabajo académico','Estrategia de continuidad'],
    ['1:43–1:57','Infografía metodológica','Prompt visual basado en el artículo','Prompt de infografía'],
    ['1:57–2:00','Cierre','Socialización rápida y tarea posterior','Compromiso de mejora'],
  ]
))}
`
    },
    {
      id: 's1-b1',
      title: 'Bloque 1. Presentación inicial',
      badge: '0:00–0:15 · 15 min',
      content: `
${card('Propósito', `
<p>Dar un marco conceptual breve sobre cómo la IA generativa puede apoyar tareas reales de investigación en salud, especialmente la lectura, organización y comunicación visual de artículos científicos.</p>
`, '0:00–0:15')}
${card('Estructura sugerida de la presentación', tabla(
  ['Diapositiva','Tema','Mensaje central'],
  [
    ['1','Título de la sesión','La IA como asistente para comprender y comunicar investigación'],
    ['2','De chatbot a colaborador académico','La IA no solo responde preguntas; ayuda a estructurar procesos'],
    ['3','Qué puede hacer en investigación','Resumir, comparar, organizar, criticar, transformar y visualizar'],
    ['4','Qué no debe hacer sola','No reemplaza lectura crítica, verificación ni juicio experto'],
    ['5','La importancia del contexto','Un buen prompt depende del objetivo, audiencia, artículo y formato'],
    ['6','Progresión de tareas','De una pregunta simple a una infografía metodológica'],
    ['7','Riesgos frecuentes','Alucinaciones, errores metodológicos, simplificación excesiva'],
    ['8','Producto de la sesión','Cada estudiante trabajará con su propio artículo'],
  ]
))}
`
    },
    {
      id: 's1-b2',
      title: 'Bloque 2. Chatbot y modelo',
      badge: '0:15–0:30 · 15 min',
      content: `
${card('Actividad inicial', `
<p>Cada estudiante abre su artículo y realiza una primera interacción simple:</p>
${prompt('Prompt inicial (básico)', '"Resume este artículo en cinco puntos."')}
<p>Luego se compara con una instrucción más precisa:</p>
${prompt('Prompt contextualizado', '"Actúa como profesor de metodología de investigación en salud. Analiza este artículo y resume únicamente su componente metodológico. Identifica diseño, población, muestra, variables principales, procedimiento, análisis estadístico y consideraciones éticas. Presenta la respuesta en una tabla."')}
`, '0:15–0:30')}
${card('Discusión', `
<p>Se enfatiza que el chatbot puede cambiar radicalmente su utilidad según:</p>
<ul>
  <li>El modelo escogido.</li>
  <li>El contexto entregado.</li>
  <li>La precisión de la tarea.</li>
  <li>El formato solicitado.</li>
  <li>La calidad del artículo o archivo cargado.</li>
  <li>La verificación posterior por parte del estudiante.</li>
</ul>
`)}
`
    },
    {
      id: 's1-b3',
      title: 'Bloque 3. Construcción progresiva del prompt',
      badge: '0:30–0:55 · 25 min',
      content: `
${card('Objetivo del bloque', `
<p>Construir un prompt robusto que permita analizar la metodología del artículo seleccionado.</p>
`, '0:30–0:55')}
${prompt('Prompt base (deficiente)', '"Explícame la metodología de este artículo."')}
${prompt('Prompt mejorado', `Actúa como asesor metodológico en investigación en salud. Voy a trabajar con un artículo científico y necesito comprender su metodología para convertirla después en una infografía académica. Extrae los siguientes elementos: objetivo del estudio, diseño metodológico, población, criterios de inclusión y exclusión, muestra, fuente de datos, variables principales, procedimiento, análisis estadístico o cualitativo, consideraciones éticas y principales limitaciones metodológicas. Presenta la respuesta en una tabla clara, usando lenguaje académico pero comprensible para estudiantes de ciencias de la salud.`)}
${prompt('Prompt avanzado con control de calidad', `Actúa como revisor metodológico. Analiza la sección de métodos de este artículo. No inventes información que no esté explícita. Si un elemento no aparece, escribe "No reportado en el texto disponible". Distingue entre información explícita, inferencias razonables y aspectos que requieren verificación por lectura directa. Organiza la respuesta en una tabla con las columnas: elemento metodológico, información identificada, evidencia textual o sección del artículo, nivel de certeza y observaciones críticas.`, 'maestro')}
<div class="info-section dorado">
  <strong>Producto del bloque:</strong> Cada estudiante debe obtener su <strong>prompt maestro de extracción metodológica</strong>.
</div>
`
    },
    {
      id: 's1-b4',
      title: 'Bloque 4. Extracción metodológica',
      badge: '0:55–1:15 · 20 min',
      content: `
${card('Actividad individual', `
<p>Cada estudiante usa su prompt maestro sobre el artículo escogido.</p>
`, '0:55–1:15')}
${card('Tabla esperada de extracción', tabla(
  ['Elemento metodológico','Información identificada','Nivel de certeza','Observaciones'],
  [
    ['Objetivo','','',''],
    ['Diseño','','',''],
    ['Población','','',''],
    ['Muestra','','',''],
    ['Criterios de inclusión','','',''],
    ['Criterios de exclusión','','',''],
    ['Variables principales','','',''],
    ['Procedimiento','','',''],
    ['Análisis','','',''],
    ['Ética','','',''],
    ['Limitaciones','','',''],
  ]
))}
${card('Instrucción crítica', `
<p>Después de recibir la tabla, el estudiante debe pedir una revisión:</p>
${prompt('Prompt de revisión crítica', '"Revisa críticamente la tabla anterior. Señala posibles errores, ambigüedades o elementos que debo verificar directamente en el artículo antes de usarlos en una infografía."')}
<p>Esto ayuda a introducir la idea de que la IA debe usarse como <strong>asistente</strong>, no como autoridad final.</p>
`)}
`
    },
    {
      id: 's1-b5',
      title: 'Bloque 5. Formatos de salida',
      badge: '1:15–1:30 · 15 min',
      content: `
${card('Objetivo', `
<p>Transformar la extracción metodológica en distintos productos reutilizables. Cada estudiante debe solicitar al menos dos de las siguientes salidas:</p>
`, '1:15–1:30')}
${prompt('A. Tabla sintética para Excel', '"Convierte la información metodológica en una tabla compatible con Excel. Usa columnas breves: componente, descripción, fuente en el artículo, observación."')}
${prompt('B. Resumen metodológico narrativo', '"Redacta un resumen metodológico de máximo 180 palabras, adecuado para explicar este artículo en una presentación académica."')}
${prompt('C. Esquema para diapositiva', '"Convierte la metodología en una diapositiva textual con máximo cinco bloques: diseño, población, intervención o exposición, desenlaces y análisis."')}
${prompt('D. HTML simple', '"Genera un fragmento HTML simple para presentar la metodología del artículo, usando encabezados, listas cortas y una tabla."')}
${prompt('E. Ficha metodológica (documento breve)', '"Redacta una ficha metodológica del artículo con los apartados: referencia, objetivo, diseño, población, variables, análisis, fortalezas y limitaciones."')}
`
    },
    {
      id: 's1-b6',
      title: 'Bloque 6. Hilos, biblioteca, proyectos, canvas y skills',
      badge: '1:30–1:43 · 13 min',
      content: `
${card('Mensaje central', `
<p>El análisis de un artículo no debe quedar como una conversación aislada. Puede convertirse en un flujo de trabajo organizado.</p>
`, '1:30–1:43')}
${card('Aplicaciones prácticas', tabla(
  ['Herramienta','Uso dentro del taller'],
  [
    ['Hilo o conversación','Mantener el trabajo de un artículo o tema específico'],
    ['Biblioteca','Recuperar documentos cargados y reutilizarlos'],
    ['Proyecto','Agrupar artículos, instrucciones y productos sobre una línea de investigación'],
    ['Canvas','Redactar o editar una ficha metodológica, protocolo o resumen largo'],
    ['Skills','Automatizar tareas repetitivas, como extracción metodológica o creación de fichas de artículos'],
  ]
))}
${card('Ejercicio breve', `
<p>Cada estudiante formula una instrucción para continuidad:</p>
${prompt('Prompt de continuidad', '"En este proyecto, cada vez que cargue un artículo, quiero que primero extraigas la metodología, luego identifiques fortalezas y limitaciones, y finalmente propongas un prompt para una infografía académica."')}
`)}
`
    },
    {
      id: 's1-b7',
      title: 'Bloque 7. Infografía metodológica',
      badge: '1:43–1:57 · 14 min',
      content: `
${card('Objetivo', `
<p>Convertir el análisis metodológico del artículo en un prompt visual.</p>
`, '1:43–1:57')}
${prompt('Prompt base', '"Crea una infografía sobre la metodología de este artículo."')}
${prompt('Prompt mejorado', '"Genera una infografía académica en español que represente visualmente la metodología del artículo analizado. Debe incluir los siguientes bloques: objetivo, diseño del estudio, población o muestra, procedimiento, variables o desenlaces principales y análisis. Usa un estilo limpio, sobrio e institucional. Evita exceso de texto. Organiza la información como un flujo de izquierda a derecha."')}
${prompt('Prompt avanzado adaptable', `Genera una infografía académica en español, estilo limpio e institucional, basada en la metodología del artículo. La infografía debe mostrar el proceso del estudio en una secuencia lógica. Incluye: 1) pregunta u objetivo del estudio, 2) diseño metodológico, 3) población/muestra, 4) intervención, exposición o fuente de datos, 5) variables o desenlaces principales, 6) análisis realizado y 7) mensaje metodológico final. Usa íconos relacionados con salud, investigación y análisis de datos. Mantén texto breve y legible. No incluyas datos que no estén en la tabla metodológica verificada.`, 'maestro')}
${card('Criterios de revisión de la infografía', tabla(
  ['Criterio','Pregunta'],
  [
    ['Fidelidad','¿La infografía representa correctamente el método del artículo?'],
    ['Claridad','¿Se entiende el diseño del estudio?'],
    ['Síntesis','¿Evita exceso de texto?'],
    ['Secuencia','¿El flujo metodológico es lógico?'],
    ['Audiencia','¿Sería comprensible para estudiantes o investigadores?'],
    ['Precisión','¿Evita información no reportada?'],
    ['Estética','¿Tiene una jerarquía visual clara?'],
  ]
))}
`
    },
    {
      id: 's1-b8',
      title: 'Bloque 8. Cierre',
      badge: '1:57–2:00 · 3 min',
      content: `
${card('Productos mínimos al salir', `
<p>Cada estudiante debe salir con tres elementos mínimos:</p>
<ol>
  <li><strong>Tabla metodológica del artículo.</strong></li>
  <li><strong>Resumen breve de la metodología.</strong></li>
  <li><strong>Prompt para generar una infografía metodológica.</strong></li>
</ol>
`, '1:57–2:00')}
${card('Recomendación pedagógica', `
<p>La sesión puede organizarse como un <strong>laboratorio guiado</strong>, no como una clase magistral. La presentación inicial debe limitarse a orientar el uso responsable de la IA y mostrar el flujo de trabajo.</p>
<p>La lógica de progresión sería:</p>
<div class="info-section">
  <strong>Artículo científico → extracción metodológica → tabla verificada → resumen → esquema visual → prompt de infografía → infografía metodológica.</strong>
</div>
`)}
`
    },
    {
      id: 's1-producto',
      title: 'Producto final',
      content: `
${card('Producto final esperado de la Sesión 1', `
${checklist('s1-productos', [
  'Artículo base seleccionado por el estudiante',
  'Prompt maestro: instrucción robusta para extraer metodología',
  'Tabla metodológica: síntesis estructurada del método',
  'Revisión crítica: verificación de errores o ambigüedades',
  'Salida transformada: tabla, resumen, HTML, documento o esquema',
  'Prompt visual: prompt para generar la infografía',
  'Plan de continuidad: hilo, proyecto, canvas o skill recomendado',
])}
`)}
`
    },
    {
      id: 's1-tarea',
      title: 'Tarea posterior',
      content: `
${card('Tarea posterior sugerida', `
<p>Para la siguiente sesión, cada estudiante deberá entregar:</p>
<ol>
  <li>Artículo seleccionado en PDF.</li>
  <li>Tabla metodológica revisada.</li>
  <li>Prompt final de infografía.</li>
  <li>Imagen o boceto de la infografía metodológica.</li>
  <li>Comentario crítico de máximo 150 palabras sobre qué corrigió manualmente después de usar IA.</li>
</ol>
`)}
`
    }
  ]
},

/* ══════════════ 2. SESIÓN 2A — NotebookLM ══════════════ */
{
  id: 'sesion-2a',
  menuTitle: 'Sesión 2A · NotebookLM para lectura y síntesis',
  numLabel: '2A',
  tabs: [
    {
      id: 's2a-req',
      title: 'Requisitos de la sesión',
      content: `
${card('Preparación previa', `
<ul>
  <li>Cuenta de <strong>Google</strong> activa (para acceder a NotebookLM).</li>
  <li>Al menos un <strong>artículo científico en PDF</strong> relacionado con el tema de interés.</li>
  <li>Una <strong>fuente complementaria</strong>: otro artículo, guía clínica, sitio web institucional o video de YouTube.</li>
  <li>Acceso a <a href="https://notebooklm.google.com" target="_blank" rel="noopener">notebooklm.google.com</a> verificado con antelación.</li>
</ul>
`)}
${card('Formatos de fuente admitidos por NotebookLM', tabla(
  ['Tipo de fuente','Uso sugerido en salud'],
  [
    ['PDF','Artículos científicos, guías, capítulos'],
    ['Sitio web','Recursos institucionales o normativos'],
    ['YouTube','Conferencias, clases, seminarios'],
    ['Audio','Entrevistas, clases grabadas'],
    ['Google Docs','Documentos colaborativos'],
    ['Google Slides','Presentaciones docentes'],
    ['Google Sheets','Matrices, tablas o datos resumidos'],
    ['Imágenes','Figuras, esquemas, capturas'],
  ]
))}
`
    },
    {
      id: 's2a-obj',
      title: 'Objetivos y resultados',
      content: `
${card('Objetivo del componente', `
<p>Utilizar NotebookLM como entorno de lectura, análisis y producción académica basada en fuentes documentales.</p>
<p>NotebookLM permite agregar fuentes desde archivos, Google Drive, sitios web, videos de YouTube, audio, texto copiado y otros formatos. Al usar NotebookLM, el modelo utiliza las fuentes añadidas al cuaderno para responder preguntas o completar solicitudes.</p>
`)}
${card('Resultados de aprendizaje', `
<ol class="objetivo-lista">
  <li>Crear un cuaderno en NotebookLM y cargar fuentes académicas.</li>
  <li>Realizar consultas basadas en documentos y verificar la referenciación.</li>
  <li>Generar productos de estudio o comunicación desde NotebookLM.</li>
  <li>Reconocer las fortalezas y limitaciones de NotebookLM para investigación y docencia.</li>
</ol>
`)}
${card('Estructura del componente (Sesión 2A)', tabla(
  ['Tiempo','Actividad','Producto'],
  [
    ['0:00–0:05','Introducción: marco conceptual general','Comprensión del flujo'],
    ['0:05–0:15','Acceso, creación de cuaderno y organización','Cuaderno creado'],
    ['0:15–0:30','Carga o búsqueda de fuentes','Fuentes incorporadas'],
    ['0:30–0:45','Chat con referencias','Respuestas verificadas'],
    ['0:45–1:00','Productos de estudio y comunicación','Informe, tabla o recurso visual'],
  ]
))}
`
    },
    {
      id: 's2a-b1',
      title: 'Bloque 1. Acceso y creación del cuaderno',
      badge: '0:05–0:15 · 10 min',
      content: `
${card('Actividades', `
<ol>
  <li>Ingresar a NotebookLM con una cuenta de Google.</li>
  <li>Crear un nuevo cuaderno.</li>
  <li>Nombrar el cuaderno según el tema de trabajo.</li>
  <li>Definir el propósito académico del cuaderno.</li>
</ol>
`, '0:05–0:15')}
${card('Ejemplos de nombres de cuaderno', tabla(
  ['Tema','Nombre sugerido'],
  [
    ['Artículos sobre IA en salud','IA en salud - revisión de fuentes'],
    ['Guía clínica','Guía clínica diabetes - síntesis docente'],
    ['Clase universitaria','Clase sepsis - recursos de estudio'],
    ['Proyecto de investigación','Protocolo tutor IA - revisión documental'],
  ]
))}
${prompt('Prompt inicial sugerido', `Actúa como asistente académico. A partir de las fuentes que cargaré en este cuaderno, ayúdame a organizar el tema central, los conceptos clave y los posibles productos de estudio o investigación que puedo generar.`)}
<div class="info-section"><strong>Producto esperado:</strong> Cuaderno creado, nombrado y orientado a un propósito académico específico.</div>
`
    },
    {
      id: 's2a-b2',
      title: 'Bloque 2. Carga y búsqueda de documentos',
      badge: '0:15–0:30 · 15 min',
      content: `
${card('Actividades', `
<ol>
  <li>Subir al menos un artículo científico en PDF.</li>
  <li>Añadir una segunda fuente complementaria.</li>
  <li>Explorar las opciones de búsqueda o descubrimiento de fuentes.</li>
  <li>Verificar que las fuentes aparecen en el panel correspondiente.</li>
  <li>Renombrar o identificar las fuentes si es necesario.</li>
</ol>
`, '0:15–0:30')}
${prompt('Prompt para primera síntesis', `Resume brevemente cada fuente cargada. Indica el tema central, el tipo de documento, su posible utilidad académica y las preguntas que podría responder.`)}
<div class="info-section"><strong>Producto esperado:</strong> Cuaderno con al menos dos fuentes cargadas y una primera síntesis de su contenido.</div>
`
    },
    {
      id: 's2a-b3',
      title: 'Bloque 3. Chat y referenciación',
      badge: '0:30–0:45 · 15 min',
      content: `
${card('Actividades: tres tipos de preguntas', `
<h3>A. Pregunta descriptiva</h3>
${prompt('','¿Cuál es el objetivo principal de las fuentes cargadas?')}
<h3>B. Pregunta analítica</h3>
${prompt('','Compara las fuentes cargadas en términos de objetivo, enfoque, hallazgos principales y limitaciones.')}
<h3>C. Pregunta crítica</h3>
${prompt('','Identifica vacíos, contradicciones, limitaciones o aspectos que deberían verificarse directamente en los documentos.')}
`, '0:30–0:45')}
${card('Énfasis metodológico', `
<p>El estudiante debe revisar:</p>
<ol>
  <li>Si la respuesta se basa realmente en las fuentes.</li>
  <li>Si las referencias corresponden al fragmento citado.</li>
  <li>Si la herramienta integra adecuadamente varias fuentes.</li>
  <li>Si hay afirmaciones que no están respaldadas.</li>
  <li>Si la síntesis simplifica en exceso el documento.</li>
</ol>
`)}
${prompt('Prompt de control de calidad', `Responde únicamente con base en las fuentes cargadas. Para cada afirmación importante, indica la fuente correspondiente. Si la información no está disponible, escribe: "No identificado en las fuentes cargadas".`, 'maestro')}
`
    },
    {
      id: 's2a-b4',
      title: 'Bloque 4. Productos de estudio',
      badge: '0:45–1:00 · 15 min',
      content: `
${card('Opciones de producto', tabla(
  ['Producto','Uso académico'],
  [
    ['Informe','Síntesis para lectura o revisión'],
    ['Tabla de datos','Matriz de extracción'],
    ['Mapa mental','Organización conceptual'],
    ['Tarjetas didácticas','Estudio activo'],
    ['Cuestionario','Evaluación formativa'],
    ['Infografía','Comunicación visual'],
    ['Presentación','Apoyo docente'],
    ['Audio overview','Síntesis auditiva'],
    ['Video overview','Explicación visual de fuentes'],
  ]
), '0:45–1:00')}
${prompt('Informe académico', `Genera un informe académico breve a partir de las fuentes cargadas. Incluye contexto, objetivo, ideas principales, hallazgos relevantes, limitaciones y posibles aplicaciones en salud.`)}
${prompt('Tabla de extracción', `Construye una tabla de extracción con las columnas: fuente, objetivo, metodología o enfoque, hallazgos principales, implicaciones, limitaciones y observaciones críticas.`)}
${prompt('Mapa mental', `Genera un mapa mental del tema central. Organiza conceptos principales, subcategorías, relaciones, aplicaciones y limitaciones.`)}
${prompt('Tarjetas didácticas', `Genera tarjetas didácticas con pregunta breve y respuesta precisa. Prioriza conceptos clave, definiciones, criterios, hallazgos y limitaciones.`)}
${prompt('Cuestionario', `Crea un cuestionario de diez preguntas de selección múltiple. Incluye respuesta correcta, explicación breve y sustento en las fuentes.`)}
${prompt('Infografía', `Genera una infografía académica basada en las fuentes. Organiza la información en cinco bloques: contexto, problema, evidencia principal, aplicaciones en salud y limitaciones.`)}
`
    },
    {
      id: 's2a-producto',
      title: 'Producto final',
      content: `
${card('Productos mínimos del componente NotebookLM', `
${checklist('s2a-productos', [
  'Cuaderno creado con nombre y propósito definidos',
  'Al menos dos fuentes cargadas y pertinentes',
  'Pregunta descriptiva respondida y verificada con las fuentes',
  'Pregunta analítica respondida y verificada',
  'Pregunta crítica respondida y verificada',
  'Al menos dos productos generados (informe, tabla, mapa, cuestionario, presentación o infografía)',
  'Revisión crítica: verificación de fidelidad a las fuentes',
])}
`)}
`
    },
    {
      id: 's2a-tarea',
      title: 'Tarea posterior',
      content: `
${card('Tarea posterior sugerida', `
<ol>
  <li>Captura o enlace del cuaderno en NotebookLM.</li>
  <li>Lista de fuentes utilizadas.</li>
  <li>Una respuesta referenciada generada por NotebookLM.</li>
  <li>Un producto generado en NotebookLM: informe, tabla, mapa mental, cuestionario, presentación, infografía, audio o video overview.</li>
</ol>
`)}
`
    }
  ]
},

/* ══════════════ 3. SESIÓN 2B — GPT/Gems ══════════════ */
{
  id: 'sesion-2b',
  menuTitle: 'Sesión 2B · GPT personalizados y Gems',
  numLabel: '2B',
  tabs: [
    {
      id: 's2b-req',
      title: 'Requisitos de la sesión',
      content: `
${card('Preparación previa', `
<ul>
  <li>Cuenta activa en <strong>ChatGPT</strong> (preferiblemente Plus para acceso a GPT Store y creación de GPTs) o en <strong>Gemini</strong>.</li>
  <li>Idea clara de <strong>una tarea repetitiva</strong> de investigación, docencia o aprendizaje que podría automatizarse con un asistente.</li>
  <li>Verificar que la función de creación de GPTs o Gems esté habilitada en la cuenta.</li>
</ul>
`)}
`
    },
    {
      id: 's2b-obj',
      title: 'Objetivos y resultados',
      content: `
${card('Objetivo del componente', `
<p>Diseñar, crear, probar y compartir un asistente personalizado orientado a una tarea académica o investigativa en salud.</p>
<p>Los GPT personalizados en ChatGPT permiten configurar versiones de ChatGPT para un propósito específico, combinando instrucciones, conocimiento y capacidades seleccionadas. En Gemini, las Gems permiten crear asistentes personalizados con instrucciones específicas.</p>
`)}
${card('Resultados de aprendizaje', `
<ol class="objetivo-lista">
  <li>Acceder a ChatGPT o Gemini y explorar GPT personalizados o Gems.</li>
  <li>Identificar asistentes disponibles en GPT Store o Gems prediseñados.</li>
  <li>Diseñar un asistente personalizado con propósito académico en salud.</li>
  <li>Formular instrucciones robustas utilizando metaprompts.</li>
  <li>Incorporar recursos adicionales según la plataforma disponible.</li>
  <li>Probar, ajustar, desplegar y compartir un asistente personalizado.</li>
</ol>
`)}
${card('Estructura del componente (Sesión 2B)', tabla(
  ['Tiempo','Actividad','Producto'],
  [
    ['1:00–1:10','Acceso a plataforma y exploración inicial','Plataforma seleccionada'],
    ['1:10–1:20','Revisión de GPT Store, GPTs disponibles o Gems prediseñadas','Ejemplos analizados'],
    ['1:20–1:40','Diseño del asistente: propósito, instrucciones, límites','Borrador funcional'],
    ['1:40–1:50','Recursos adicionales y capacidades','Matriz de capacidades'],
    ['1:50–1:55','Prueba, ajuste, despliegue y compartir','Asistente probado'],
    ['1:55–2:00','Cierre y socialización','Plan de continuidad'],
  ]
))}
`
    },
    {
      id: 's2b-b1',
      title: 'Bloque 1. Acceso a la plataforma',
      badge: '1:00–1:10 · 10 min',
      content: `
${card('Opción A. ChatGPT', `
<ol>
  <li>Ingresar a ChatGPT.</li>
  <li>Revisar la sección de GPTs.</li>
  <li>Explorar GPTs disponibles.</li>
  <li>Identificar la opción para crear un GPT personalizado.</li>
  <li>Revisar los campos principales: nombre, descripción, instrucciones, conocimiento, capacidades y acciones.</li>
</ol>
`, '1:00–1:10')}
${card('Opción B. Gemini', `
<ol>
  <li>Ingresar a Gemini.</li>
  <li>Revisar la sección de Gems.</li>
  <li>Explorar Gems prediseñadas.</li>
  <li>Identificar la opción de crear una nueva Gem.</li>
  <li>Revisar el espacio para instrucciones y configuración.</li>
</ol>
`)}
<div class="info-section"><strong>Producto esperado:</strong> Cada estudiante habrá seleccionado la plataforma con la que trabajará.</div>
`
    },
    {
      id: 's2b-b2',
      title: 'Bloque 2. Exploración de GPT Store / Gems',
      badge: '1:10–1:20 · 10 min',
      content: `
${card('Objetivo y actividades', `
<p>Analizar ejemplos existentes antes de crear un asistente propio.</p>
<ol>
  <li>Buscar asistentes relacionados con investigación en salud, escritura académica, revisión metodológica, docencia médica, análisis de artículos y preparación de clases.</li>
  <li>Identificar qué hacen bien.</li>
  <li>Reconocer limitaciones.</li>
  <li>Definir una oportunidad de mejora para crear un asistente propio.</li>
</ol>
`, '1:10–1:20')}
${card('Tabla de análisis rápido', tabla(
  ['Asistente revisado','Propósito','Fortalezas','Limitaciones','Idea para mejorar'],
  [['','','','','']]
))}
${card('Ejemplos de asistentes para crear', tabla(
  ['Asistente','Propósito'],
  [
    ['Tutor de metodología','Explicar diseños de investigación'],
    ['Revisor de artículos','Extraer objetivo, método, resultados y limitaciones'],
    ['Generador de preguntas PICO','Formular preguntas clínicas'],
    ['Asistente para protocolos','Apoyar redacción de investigación'],
    ['Evaluador de sesgos','Revisar validez interna'],
    ['Tutor de estadística','Explicar análisis y pruebas'],
    ['Diseñador de materiales docentes','Convertir documentos en recursos de clase'],
    ['Asistente de análisis de datos','Guiar análisis en Python o R'],
  ]
))}
`
    },
    {
      id: 's2b-b3',
      title: 'Bloque 3. Diseño del asistente personalizado',
      badge: '1:20–1:40 · 20 min',
      content: `
${card('Elementos que debe definir el estudiante', tabla(
  ['Elemento','Pregunta orientadora'],
  [
    ['Nombre','¿Cómo se llamará el asistente?'],
    ['Propósito','¿Qué tarea resolverá?'],
    ['Usuario objetivo','¿Para quién está diseñado?'],
    ['Alcance','¿Qué puede hacer?'],
    ['Límites','¿Qué no debe hacer?'],
    ['Estilo','¿Cómo debe comunicarse?'],
    ['Flujo de trabajo','¿Qué pasos debe seguir?'],
    ['Recursos','¿Qué documentos o herramientas usará?'],
    ['Salida esperada','¿Qué formato debe entregar?'],
    ['Seguridad','¿Qué advertencias debe incluir?'],
  ]
), '1:20–1:40')}
<h3 style="margin:16px 0 8px;color:var(--azul-marino)">Metaprompt para generar instrucciones</h3>
<p style="margin-bottom:8px">El estudiante puede pedir a un chatbot que le ayude a construir las instrucciones del GPT o Gem. Esto enseña el concepto de <strong>metaprompt</strong>: un prompt que ayuda a crear otro prompt o un sistema de instrucciones.</p>
${prompt('Metaprompt base', `Actúa como diseñador experto de asistentes de IA para educación e investigación en salud. Ayúdame a crear las instrucciones de un GPT personalizado o Gem.

El asistente se llamará: [nombre].
Su propósito será: [propósito].
Los usuarios serán: [tipo de usuario].
Las tareas principales serán: [lista de tareas].
Debe evitar: [límites].
Debe responder con estilo: [tono y nivel].
Debe producir salidas en formato: [tabla, informe, lista de chequeo, preguntas, etc.].

Genera:
1. Una descripción breve del asistente.
2. Instrucciones completas para configurar el GPT o Gem.
3. Reglas de comportamiento.
4. Flujo de trabajo recomendado.
5. Ejemplos de conversación inicial.
6. Criterios para evaluar si responde bien.`, 'maestro')}
<h3 style="margin:16px 0 8px;color:var(--azul-marino)">Plantilla de instrucciones para GPT personalizado o Gem</h3>
${prompt('Plantilla de instrucciones completa', `Eres un asistente especializado en [tema] para usuarios de ciencias de la salud.

Propósito:
Ayudar a [tipo de usuario] a [tarea principal] de manera estructurada, académica y verificable.

Perfil del usuario:
Tus usuarios son [estudiantes, docentes, investigadores, residentes, clínicos], con nivel [básico/intermedio/avanzado].

Tareas principales:
1. [Tarea 1]
2. [Tarea 2]
3. [Tarea 3]
4. [Tarea 4]

Flujo de trabajo:
Cuando el usuario solicite ayuda, sigue estos pasos:
1. Identifica el objetivo de la consulta.
2. Solicita o usa el contexto disponible.
3. Organiza la información de forma estructurada.
4. Explica el razonamiento de manera clara y verificable.
5. Presenta la salida en el formato solicitado.
6. Señala limitaciones o aspectos que requieren verificación.

Estilo de respuesta:
Usa tono formal, académico y claro. Evita afirmaciones no sustentadas. No inventes referencias. Distingue entre información explícita, inferencia razonable y recomendación.

Límites:
No reemplazas el juicio clínico, metodológico ni docente. No debes emitir recomendaciones clínicas individuales sin contexto suficiente. Si falta información crítica, indícalo.

Formato de salida:
Usa tablas, listas de chequeo, resúmenes estructurados o guías paso a paso cuando sea útil.

Cierre:
Finaliza con una recomendación práctica o siguiente paso verificable.`)}
`
    },
    {
      id: 's2b-b4',
      title: 'Bloque 4. Recursos y capacidades',
      badge: '1:40–1:50 · 10 min',
      content: `
${card('Capacidades en GPT personalizados', tabla(
  ['Recurso o capacidad','Uso académico'],
  [
    ['Documentos o conocimiento','Guías, rúbricas, protocolos, artículos base'],
    ['Búsqueda web','Actualización de información pública'],
    ['Análisis de datos','Exploración de bases, tablas, gráficos'],
    ['Generación de imágenes','Infografías, esquemas o recursos visuales'],
    ['Canvas/lienzo','Redacción y edición de documentos o código'],
    ['Acciones o apps','Flujos avanzados e integraciones'],
  ]
), '1:40–1:50')}
${card('Capacidades en Gems (Gemini)', tabla(
  ['Recurso o capacidad','Uso académico'],
  [
    ['Instrucciones de Gem','Definir rol, tareas, estilo y límites'],
    ['Canvas','Crear o editar documentos, presentaciones o código'],
    ['Documentos de Google','Trabajo con materiales académicos'],
    ['Imágenes','Recursos visuales o didácticos'],
    ['Aplicaciones conectadas','Uso potencial de ecosistema Google'],
    ['Audio overview o recursos de aprendizaje','Conversión de contenido a formatos de estudio'],
  ]
))}
${card('Ejercicio: Matriz de capacidades', tabla(
  ['Capacidad','¿La necesita mi asistente?','Justificación'],
  [
    ['Documentos','Sí/No',''],
    ['Búsqueda web','Sí/No',''],
    ['Análisis de datos','Sí/No',''],
    ['Imagen','Sí/No',''],
    ['Lienzo/Canvas','Sí/No',''],
    ['Compartir','Sí/No',''],
  ]
))}
`
    },
    {
      id: 's2b-b5',
      title: 'Bloque 5. Prueba, ajuste y compartir',
      badge: '1:50–1:55 · 5 min',
      content: `
${card('Actividades', `
<ol>
  <li>Probar el asistente con una consulta real.</li>
  <li>Evaluar si sigue las instrucciones.</li>
  <li>Ajustar instrucciones si responde de forma vaga, extensa o poco verificable.</li>
  <li>Definir si será privado, compartido por enlace, compartido con grupo o publicado.</li>
  <li>Revisar privacidad y uso de documentos antes de compartir.</li>
</ol>
`, '1:50–1:55')}
${prompt('Prueba mínima del asistente', `Voy a darte un artículo o tema de investigación. Extrae objetivo, diseño, población, variables principales, desenlace, limitaciones y posibles usos docentes. Presenta la respuesta en una tabla y señala qué información requeriría verificación.`)}
${card('Lista de verificación rápida', tabla(
  ['Criterio','Sí/No'],
  [
    ['El asistente entiende su propósito',''],
    ['Usa tono académico',''],
    ['Sigue el flujo indicado',''],
    ['Produce el formato solicitado',''],
    ['Reconoce límites',''],
    ['No inventa datos',''],
    ['Sugiere verificación',''],
    ['Es útil para la tarea definida',''],
  ]
))}
`
    },
    {
      id: 's2b-b6',
      title: 'Bloque 6. Cierre de sesión',
      badge: '1:55–2:00 · 5 min',
      content: `
${card('Socialización final', `
<p>Cada estudiante comparte:</p>
<ol>
  <li>Nombre del asistente creado.</li>
  <li>Propósito.</li>
  <li>Plataforma usada: ChatGPT o Gemini.</li>
  <li>Una capacidad adicional seleccionada.</li>
  <li>Una prueba realizada.</li>
  <li>Un ajuste que haría antes de compartirlo.</li>
</ol>
`, '1:55–2:00')}
`
    },
    {
      id: 's2b-producto',
      title: 'Producto final',
      content: `
${card('Productos finales de la Sesión 2 (2A + 2B)', `
${checklist('s2b-productos', [
  'Cuaderno NotebookLM con fuentes cargadas (2A)',
  'Tres preguntas referenciadas y verificadas en NotebookLM (2A)',
  'Un producto de estudio o comunicación generado en NotebookLM (2A)',
  'Propósito del asistente personalizado definido (2B)',
  'Instrucciones del GPT/Gem redactadas (2B)',
  'Capacidades seleccionadas y justificadas (2B)',
  'Prueba inicial realizada con consulta real (2B)',
  'Decisión preliminar de compartir o mantener privado (2B)',
])}
`)}
`
    },
    {
      id: 's2b-tarea',
      title: 'Tarea posterior',
      content: `
${card('Tarea posterior sugerida', `
<ol>
  <li>Captura o enlace del cuaderno en NotebookLM.</li>
  <li>Lista de fuentes utilizadas.</li>
  <li>Una respuesta referenciada generada por NotebookLM.</li>
  <li>Un producto generado en NotebookLM.</li>
  <li>Nombre y propósito del GPT personalizado o Gem.</li>
  <li>Instrucciones finales del asistente.</li>
  <li>Evidencia de una prueba realizada.</li>
  <li>Reflexión breve, máximo 250 palabras: <strong>¿Qué diferencia encontré entre usar NotebookLM para trabajar con fuentes y crear un GPT personalizado o Gem para una tarea repetitiva?</strong></li>
</ol>
`)}
`
    }
  ]
},

/* ══════════════ 4. SESIÓN 3A — Investigación profunda ══════════════ */
{
  id: 'sesion-3a',
  menuTitle: 'Sesión 3A · Investigación profunda asistida por IA',
  numLabel: '3A',
  tabs: [
    {
      id: 's3a-req',
      title: 'Requisitos de la sesión',
      content: `
${card('Preparación previa', `
<ul>
  <li>Acceso a <strong>ChatGPT con Deep Research</strong> habilitado, o a <strong>Gemini Deep Research</strong>.</li>
  <li>Tema de investigación en salud o docencia previamente identificado.</li>
  <li>Criterios de alcance definidos: población, contexto, período y tipos de fuente prioritarios.</li>
</ul>
`)}
`
    },
    {
      id: 's3a-obj',
      title: 'Objetivos y resultados',
      content: `
${card('Objetivo del componente', `
<p>Guiar a los estudiantes en el uso de herramientas de investigación profunda para explorar un tema académico en salud, generar una síntesis documentada y evaluar críticamente la calidad de las fuentes.</p>
`)}
${card('Competencias específicas', tabla(
  ['Competencia','Evidencia'],
  [
    ['Formulación de pregunta investigable','Pregunta o tema delimitado'],
    ['Definición de alcance','Población, contexto, período, tipo de evidencia'],
    ['Uso de investigación profunda','Informe generado'],
    ['Evaluación de fuentes','Matriz crítica'],
    ['Síntesis académica','Conclusiones preliminares'],
    ['Identificación de vacíos','Preguntas pendientes'],
  ]
))}
${card('Estructura del componente (Sesión 3A)', tabla(
  ['Tiempo','Actividad','Producto'],
  [
    ['0:00–0:05','Introducción conceptual: diferencia entre búsqueda e investigación profunda','Criterios diferenciales'],
    ['0:05–0:15','Formulación de pregunta y alcance','Pregunta refinada'],
    ['0:15–0:30','Ejecución de investigación profunda','Informe documentado'],
    ['0:30–0:45','Revisión de fuentes y matriz crítica','Tabla de evaluación'],
    ['0:45–0:55','Síntesis de hallazgos y vacíos','Resumen de 250 palabras'],
    ['0:55–1:00','Cierre del componente','Producto listo para escritura'],
  ]
))}
`
    },
    {
      id: 's3a-a1',
      title: 'Actividad 1. Introducción conceptual',
      badge: '0:00–0:05 · 5 min',
      content: `
${card('Mensaje central', `
<p>La investigación profunda no es simplemente "buscar en internet". Su valor está en combinar:</p>
<ul>
  <li>Pregunta bien delimitada.</li>
  <li>Búsqueda amplia y trazable.</li>
  <li>Selección de fuentes.</li>
  <li>Síntesis estructurada.</li>
  <li>Revisión crítica.</li>
  <li>Identificación de vacíos.</li>
</ul>
`, '0:00–0:05')}
${card('Comparación de estrategias', tabla(
  ['Estrategia','Uso','Limitación'],
  [
    ['Búsqueda rápida','Encontrar información puntual','Puede ser superficial'],
    ['Base bibliográfica','Revisión académica formal','Requiere estrategia estructurada'],
    ['Investigación profunda con IA','Síntesis documentada inicial','Debe verificarse y no reemplaza revisión sistemática'],
  ]
))}
`
    },
    {
      id: 's3a-a2',
      title: 'Actividad 2. Formulación de pregunta y alcance',
      badge: '0:05–0:15 · 10 min',
      content: `
${card('Ejemplos de temas', `
<ul>
  <li>Uso de IA generativa en educación médica.</li>
  <li>Modelos predictivos para diagnóstico clínico.</li>
  <li>Telemedicina en enfermedades crónicas.</li>
  <li>IA en patología digital.</li>
  <li>Factores asociados a COVID-19.</li>
  <li>Analítica del aprendizaje en ciencias de la salud.</li>
  <li>Tutor virtual para mejorar historias clínicas.</li>
  <li>Uso de LLM en escritura científica.</li>
</ul>
`, '0:05–0:15')}
${card('Plantilla para delimitar el tema', tabla(
  ['Elemento','Pregunta orientadora','Ejemplo'],
  [
    ['Tema','¿Sobre qué quiero investigar?','IA generativa en educación médica'],
    ['Población','¿En quiénes?','Estudiantes de medicina'],
    ['Contexto','¿Dónde o en qué escenario?','Educación clínica'],
    ['Intervención/exposición','¿Qué tecnología o estrategia?','Tutor virtual basado en IA'],
    ['Desenlace','¿Qué resultado interesa?','Calidad de historias clínicas'],
    ['Tipo de evidencia','¿Qué fuentes necesito?','Estudios empíricos, revisiones, guías'],
    ['Período','¿Qué rango temporal?','Últimos 5 años'],
  ]
))}
${prompt('Prompt para delimitar el tema', `Actúa como asesor de investigación en salud. Ayúdame a convertir este tema en una pregunta de investigación profunda.

Tema: [escribir tema].

Define:
1. Pregunta principal.
2. Subpreguntas.
3. Alcance.
4. Conceptos clave.
5. Sinónimos y términos de búsqueda.
6. Tipos de fuentes prioritarias.
7. Criterios de inclusión y exclusión de fuentes.`)}
`
    },
    {
      id: 's3a-a3',
      title: 'Actividad 3. Ejecución de investigación profunda',
      badge: '0:15–0:30 · 15 min',
      content: `
${card('Herramientas disponibles', `
<ul>
  <li>ChatGPT con investigación profunda (Deep Research).</li>
  <li>Gemini Deep Research.</li>
  <li>NotebookLM con funciones de investigación, si están disponibles.</li>
  <li>Otra herramienta institucional autorizada.</li>
</ul>
`, '0:15–0:30')}
${prompt('Prompt principal para investigación profunda', `Realiza una investigación profunda sobre el siguiente tema en salud:

[Tema delimitado]

Pregunta principal:
[Pregunta]

Subpreguntas:
1. [Subpregunta 1]
2. [Subpregunta 2]
3. [Subpregunta 3]

Alcance:
- Población:
- Contexto:
- Período:
- Tipo de evidencia:
- Idiomas:
- Exclusiones:

Entrega un informe estructurado con:
1. Resumen ejecutivo.
2. Antecedentes.
3. Principales hallazgos.
4. Comparación entre estudios o fuentes.
5. Vacíos de conocimiento.
6. Implicaciones para investigación o docencia en salud.
7. Limitaciones de la evidencia encontrada.
8. Referencias o fuentes consultadas.`, 'maestro')}
${prompt('Variación: revisión metodológica', `Realiza una investigación profunda centrada en métodos de investigación sobre este tema. Prioriza estudios empíricos y revisiones. Extrae diseño, población, variables, desenlaces, métodos analíticos, principales resultados y limitaciones.`)}
`
    },
    {
      id: 's3a-a4',
      title: 'Actividad 4. Revisión crítica de fuentes',
      badge: '0:30–0:45 · 15 min',
      content: `
${card('Objetivo', `
<p>Evitar aceptar el informe de IA como producto final sin verificación.</p>
`, '0:30–0:45')}
${card('Matriz de evaluación de fuentes', tabla(
  ['Fuente','Tipo','Año','Pertinencia','Calidad percibida','Hallazgo clave','Limitaciones','¿Usar en escritura?'],
  [['','Artículo / guía / web / informe','','Alta / media / baja','Alta / media / baja','','','Sí / No']]
))}
${prompt('Prompt para revisión crítica de fuentes', `Revisa críticamente las fuentes incluidas en el informe. Organízalas en una tabla con: fuente, tipo de documento, año, pertinencia para la pregunta, principal aporte, posibles limitaciones y recomendación sobre si debe usarse en un texto académico.`)}
${card('Criterios de evaluación', tabla(
  ['Criterio','Pregunta'],
  [
    ['Pertinencia','¿La fuente responde la pregunta?'],
    ['Actualidad','¿Es suficientemente reciente para el tema?'],
    ['Autoridad','¿Proviene de una revista, institución o grupo confiable?'],
    ['Método','¿Presenta datos, revisión o solo opinión?'],
    ['Coherencia','¿Sus hallazgos coinciden con otras fuentes?'],
    ['Trazabilidad','¿Se puede verificar fácilmente?'],
  ]
))}
`
    },
    {
      id: 's3a-a5',
      title: 'Actividad 5. Síntesis de hallazgos y vacíos',
      badge: '0:45–0:55 · 10 min',
      content: `
${card('Síntesis final', ``, '0:45–0:55')}
${prompt('Prompt de síntesis académica', `A partir del informe y la matriz de fuentes, redacta una síntesis académica de máximo 250 palabras. Incluye:

1. Qué se sabe actualmente.
2. Qué evidencia parece más sólida.
3. Qué vacíos persisten.
4. Qué implicaciones tiene para investigación en salud.
5. Qué precauciones deben tenerse al interpretar esta evidencia.`)}
<div class="info-section dorado"><strong>Producto:</strong> Síntesis breve que servirá como insumo para el componente de escritura asistida (Sesión 3B).</div>
`
    },
    {
      id: 's3a-cierre',
      title: 'Cierre del componente',
      badge: '0:55–1:00 · 5 min',
      content: `
${card('Entregables al terminar la primera hora', `
<p>Cada estudiante debe terminar con:</p>
<ol>
  <li>Pregunta delimitada.</li>
  <li>Informe generado por investigación profunda.</li>
  <li>Matriz crítica de fuentes.</li>
  <li>Síntesis de 250 palabras.</li>
  <li>Lista de vacíos o preguntas pendientes.</li>
</ol>
`, '0:55–1:00')}
`
    },
    {
      id: 's3a-producto',
      title: 'Producto final',
      content: `
${card('Productos mínimos de la Sesión 3A', `
${checklist('s3a-productos', [
  'Pregunta de investigación delimitada con alcance explícito',
  'Informe generado por herramienta de investigación profunda',
  'Matriz crítica de fuentes con pertinencia y limitaciones',
  'Síntesis académica breve (máximo 250 palabras)',
  'Lista de vacíos o preguntas pendientes identificados',
])}
`)}
`
    },
    {
      id: 's3a-tarea',
      title: 'Tarea posterior',
      content: `
${card('Tarea posterior sugerida', `
<ol>
  <li>Pregunta de investigación o exploración documental.</li>
  <li>Informe generado por investigación profunda.</li>
  <li>Matriz crítica de al menos cinco fuentes.</li>
  <li>Síntesis académica de máximo 250 palabras.</li>
</ol>
`)}
`
    }
  ]
},

/* ══════════════ 5. SESIÓN 3B — Escritura asistida ══════════════ */
{
  id: 'sesion-3b',
  menuTitle: 'Sesión 3B · Escritura asistida por IA',
  numLabel: '3B',
  tabs: [
    {
      id: 's3b-req',
      title: 'Requisitos de la sesión',
      content: `
${card('Insumos necesarios', `
<ul>
  <li>Informe de investigación profunda generado en la Sesión 3A.</li>
  <li>Matriz crítica de fuentes completada.</li>
  <li>Síntesis académica de 250 palabras.</li>
  <li>Acceso al chatbot (ChatGPT o Gemini). Se recomienda usar <strong>Canvas</strong> (ChatGPT) o una herramienta de edición equivalente si está disponible.</li>
</ul>
`)}
`
    },
    {
      id: 's3b-obj',
      title: 'Objetivos y resultados',
      content: `
${card('Objetivo del componente', `
<p>Usar IA generativa para apoyar la escritura académica en salud, desde la planificación del texto hasta la generación de un borrador, su revisión crítica y su adaptación a diferentes formatos.</p>
<p>La escritura asistida por IA debe entenderse como un proceso de <strong>colaboración controlada</strong>: el estudiante conserva la responsabilidad sobre contenido, citas, coherencia argumentativa, originalidad, pertinencia y adecuación ética.</p>
`)}
${card('Competencias específicas', tabla(
  ['Competencia','Evidencia'],
  [
    ['Planificación textual','Esquema de artículo o informe'],
    ['Transformación de evidencia','Síntesis convertida en párrafos'],
    ['Escritura académica','Borrador estructurado'],
    ['Revisión crítica','Lista de problemas y mejoras'],
    ['Adaptación de formato','Resumen, introducción, discusión o informe'],
    ['Transparencia','Declaración de uso de IA'],
  ]
))}
${card('Estructura del componente (Sesión 3B)', tabla(
  ['Tiempo','Actividad','Producto'],
  [
    ['1:00–1:05','Introducción a escritura asistida y responsabilidad autoral','Principios de uso responsable'],
    ['1:05–1:15','Planeación del texto','Esquema'],
    ['1:15–1:30','Redacción asistida del primer borrador','Primer borrador'],
    ['1:30–1:45','Revisión crítica y mejora','Borrador editado'],
    ['1:45–1:55','Adaptación de formato','Resumen, introducción o discusión'],
    ['1:55–2:00','Declaración de uso de IA y cierre','Producto final y reflexión'],
  ]
))}
`
    },
    {
      id: 's3b-a1',
      title: 'Actividad 1. Principios de escritura asistida',
      badge: '1:00–1:05 · 5 min',
      content: `
${card('Usos adecuados', tabla(
  ['Uso','Ejemplo'],
  [
    ['Planificar','Crear estructura de introducción'],
    ['Sintetizar','Resumir hallazgos de varias fuentes'],
    ['Redactar borradores','Convertir matriz en párrafos'],
    ['Mejorar claridad','Reescribir con estilo académico'],
    ['Adaptar audiencia','Versión para estudiantes o comité'],
    ['Revisar coherencia','Evaluar hilo argumentativo'],
    ['Traducir o ajustar idioma','Mejorar inglés científico'],
  ]
), '1:00–1:05')}
${card('Usos riesgosos', tabla(
  ['Riesgo','Ejemplo'],
  [
    ['Inventar citas','Referencias no verificadas'],
    ['Sobreafirmar','Concluir causalidad sin evidencia'],
    ['Homogeneizar estilo','Perder voz académica propia'],
    ['Omitir limitaciones','Texto excesivamente convincente'],
    ['Usar datos sensibles','Exponer información institucional o clínica'],
    ['Reemplazar autoría','Delegar análisis intelectual central'],
  ]
))}
`
    },
    {
      id: 's3b-a2',
      title: 'Actividad 2. Planeación del texto',
      badge: '1:05–1:15 · 10 min',
      content: `
${card('Opciones de producto de escritura', tabla(
  ['Producto','Uso'],
  [
    ['Introducción','Para protocolo, artículo o informe'],
    ['Resumen estructurado','Para presentación o entrega breve'],
    ['Estado del arte','Para marco teórico'],
    ['Discusión','Para interpretar hallazgos'],
    ['Informe académico','Para entregar síntesis'],
    ['Justificación','Para proyecto de investigación'],
    ['Carta al editor','Para comunicación breve'],
    ['Guion de presentación','Para exposición oral'],
  ]
), '1:05–1:15')}
${prompt('Prompt para planear el texto', `Actúa como asesor de escritura científica en salud. A partir de la siguiente síntesis y matriz de fuentes, ayúdame a planear un texto académico.

Síntesis:
[pegar síntesis]

Matriz de fuentes:
[pegar matriz o resumen]

Producto deseado:
[introducción / resumen / informe / discusión / justificación]

Audiencia:
[estudiantes / docentes / comité de investigación / revista científica]

Extensión:
[número aproximado de palabras]

Genera:
1. Propósito del texto.
2. Tesis o idea central.
3. Esquema por secciones.
4. Secuencia argumentativa.
5. Evidencia que debe apoyar cada sección.
6. Precauciones de redacción.`)}
`
    },
    {
      id: 's3b-a3',
      title: 'Actividad 3. Redacción del primer borrador',
      badge: '1:15–1:30 · 15 min',
      content: `
${prompt('Prompt para primer borrador', `Con base en el esquema anterior, redacta un primer borrador en tono académico formal.

Requisitos:
1. Usa lenguaje claro y preciso.
2. No inventes citas ni datos.
3. Señala entre corchetes dónde debo insertar referencias verificadas.
4. Distingue entre evidencia consolidada, hallazgos preliminares y vacíos.
5. Evita afirmaciones causales no sustentadas.
6. Incluye una frase final que justifique la relevancia del tema para investigación en salud.`, 'maestro')}
${prompt('Variante para introducción (500 palabras)', `Redacta una introducción académica de 500 palabras con la siguiente estructura:
1. Contexto general del problema.
2. Relevancia en salud.
3. Estado actual de la evidencia.
4. Vacíos identificados.
5. Justificación del estudio.
6. Cierre con pregunta u objetivo general.

No inventes referencias. Usa marcadores como [Referencia 1] donde deba citarse una fuente verificada.`)}
${prompt('Variante para resumen estructurado', `Redacta un resumen estructurado de máximo 250 palabras con los apartados: introducción, objetivo, métodos de la revisión exploratoria, resultados principales, conclusiones e implicaciones.`)}
`
    },
    {
      id: 's3b-a4',
      title: 'Actividad 4. Revisión crítica y mejora',
      badge: '1:30–1:45 · 15 min',
      content: `
${prompt('Prompt de revisión crítica académica', `Actúa como revisor académico exigente. Revisa el siguiente borrador y evalúa:
1. Claridad.
2. Coherencia argumentativa.
3. Precisión conceptual.
4. Uso adecuado de evidencia.
5. Riesgo de sobreafirmación.
6. Omisiones importantes.
7. Redundancias.
8. Tono académico.
9. Aspectos que requieren referencia.
10. Mejoras prioritarias.

Devuelve primero una tabla de observaciones y luego una versión revisada del texto.`, 'maestro')}
${card('Tabla esperada de observaciones', tabla(
  ['Aspecto','Observación','Prioridad','Recomendación'],
  [
    ['Claridad','','Alta / media / baja',''],
    ['Evidencia','','Alta / media / baja',''],
    ['Coherencia','','Alta / media / baja',''],
    ['Limitaciones','','Alta / media / baja',''],
    ['Estilo','','Alta / media / baja',''],
  ]
))}
${prompt('Segunda iteración', `Reescribe el texto incorporando las recomendaciones anteriores. Mantén un tono formal y académico, reduce redundancias y conserva los marcadores de referencia donde corresponda.`)}
`
    },
    {
      id: 's3b-a5',
      title: 'Actividad 5. Adaptación de formato',
      badge: '1:45–1:55 · 10 min',
      content: `
${card('Opciones de adaptación', tabla(
  ['Formato','Prompt breve'],
  [
    ['Resumen ejecutivo','"Convierte este texto en un resumen ejecutivo de 150 palabras."'],
    ['Diapositiva','"Convierte este texto en una diapositiva con cinco ideas clave."'],
    ['Abstract','"Convierte este texto en un abstract estructurado de 250 palabras."'],
    ['Guion oral','"Convierte este texto en un guion de exposición de 2 minutos."'],
    ['Tabla','"Convierte este contenido en una tabla de argumentos y evidencia."'],
    ['Infografía','"Convierte este contenido en un prompt para una infografía académica."'],
    ['Carta al editor','"Transforma este contenido en una carta breve al editor."'],
  ]
), '1:45–1:55')}
${prompt('Prompt de adaptación', `Convierte el borrador anterior en [formato deseado] para [audiencia]. Mantén fidelidad al contenido, conserva los puntos que requieren citación y evita agregar información no verificada.`)}
`
    },
    {
      id: 's3b-a6',
      title: 'Actividad 6. Declaración de uso de IA',
      badge: '1:55–2:00 · 5 min',
      content: `
${card('Objetivo: transparencia académica', `
<p>Promover la documentación del uso de IA en los trabajos académicos.</p>
`, '1:55–2:00')}
${prompt('Prompt para generar declaración', `Ayúdame a redactar una declaración breve y transparente de uso de IA para este trabajo académico. Debe indicar que la IA se utilizó para apoyar búsqueda inicial, organización de ideas, generación de borradores y revisión de estilo, pero que la selección de fuentes, verificación, interpretación y versión final fueron responsabilidad del autor.`)}
<div class="info-section verde">
  <strong>Ejemplo de declaración:</strong><br>
  Se utilizó inteligencia artificial generativa como apoyo para la organización preliminar de ideas, síntesis inicial de fuentes, elaboración de borradores y revisión de estilo. Las fuentes, afirmaciones, interpretaciones y la versión final del texto fueron verificadas y ajustadas por el autor, quien conserva la responsabilidad académica sobre el contenido.
</div>
`
    },
    {
      id: 's3b-producto',
      title: 'Producto final',
      content: `
${card('Productos finales de la Sesión 3 (3A + 3B)', `
${checklist('s3b-productos', [
  'Pregunta delimitada con alcance explícito (3A)',
  'Informe documentado de investigación profunda (3A)',
  'Matriz crítica de fuentes (3A)',
  'Síntesis de hallazgos y vacíos — 250 palabras (3A)',
  'Esquema de texto académico (3B)',
  'Primer borrador académico (3B)',
  'Versión revisada del borrador (3B)',
  'Versión adaptada a otro formato (3B)',
  'Declaración de uso de IA (3B)',
])}
`)}
`
    },
    {
      id: 's3b-tarea',
      title: 'Tarea posterior',
      content: `
${card('Tarea posterior sugerida', `
<ol>
  <li>Borrador académico de 500 a 800 palabras.</li>
  <li>Versión revisada del borrador.</li>
  <li>Una versión adaptada: resumen, diapositiva, guion oral, tabla o infografía.</li>
  <li>Declaración de uso de IA.</li>
  <li>Reflexión breve de máximo 250 palabras: <strong>¿Qué aportó la IA en la fase de investigación profunda y qué aportó en la fase de escritura? ¿Qué aspectos exigieron verificación humana?</strong></li>
</ol>
`)}
`
    }
  ]
},

/* ══════════════ 6. SESIÓN 4 — Análisis de datos con Python ══════════════ */
{
  id: 'sesion-4',
  menuTitle: 'Sesión 4 · Análisis de bases de datos con chatbot y Python',
  numLabel: '4',
  tabs: [
    {
      id: 's4-req',
      title: 'Requisitos de la sesión',
      content: `
${card('Preparación previa', `
<ul>
  <li>Cuenta de <strong>Google</strong> activa (para Google Colab y Drive).</li>
  <li>Acceso a <strong>Google Colab</strong> verificado (<a href="https://colab.research.google.com" target="_blank" rel="noopener">colab.research.google.com</a>).</li>
  <li>Base de datos de ejemplo <strong>subida a Google Drive</strong> antes de la sesión (archivo Excel o CSV proporcionado por el facilitador).</li>
  <li>Acceso a un chatbot (ChatGPT o Gemini) para asistencia de código.</li>
  <li>No se requiere experiencia previa en Python; el chatbot guiará la programación.</li>
</ul>
`)}
${card('Contexto del caso de trabajo', `
<p>Cada estudiante recibirá una base de datos. En el ejemplo principal, la base contiene información de pacientes con variables:</p>
<ul>
  <li>Demográficas.</li>
  <li>Clínicas.</li>
  <li>Factores de riesgo.</li>
  <li>Signos del examen físico.</li>
  <li>Laboratorios.</li>
  <li>Desenlace: presencia o ausencia de COVID-19 (variable binaria: COVID = sí/no).</li>
</ul>
<p><strong>Base de ejemplo:</strong> 711 registros, 47 variables, desenlace COVID desbalanceado.</p>
`)}
`
    },
    {
      id: 's4-obj',
      title: 'Objetivos y resultados',
      content: `
${card('Propósito general', `
<p>Guiar a los estudiantes en el análisis transparente y reproducible de una base de datos en salud, siguiendo el flujo de trabajo de ciencia de datos y utilizando un chatbot como asistente para comprender, generar, revisar y documentar código en Python.</p>
<p>La sesión no se centrará únicamente en "obtener resultados", sino en aprender a construir un análisis paso a paso, entendible, verificable y reutilizable.</p>
`)}
${card('Resultados de aprendizaje', `
<ol class="objetivo-lista">
  <li>Ingresar a Google Colab y crear un cuaderno de trabajo.</li>
  <li>Vincular Google Colab con Google Drive.</li>
  <li>Cargar una base de datos en formato Excel o CSV.</li>
  <li>Utilizar Python para explorar estructura, tipos de variables y valores faltantes.</li>
  <li>Diferenciar variables predictoras y variable desenlace.</li>
  <li>Realizar análisis descriptivo básico general y estratificado por desenlace.</li>
  <li>Construir un flujo reproducible usando celdas de texto y código.</li>
  <li>Usar el chatbot para generar, depurar y explicar código.</li>
  <li>Entrenar modelos predictivos básicos en Python.</li>
  <li>Interpretar métricas de desempeño: sensibilidad, especificidad, F1, ROC AUC y matriz de confusión.</li>
  <li>Reconocer riesgos metodológicos: sobreajuste, desbalance de clases y fuga de información.</li>
</ol>
`)}
${card('Estructura global de la sesión', tabla(
  ['Tiempo','Bloque','Actividad','Producto'],
  [
    ['0:00–0:05','Presentación inicial','Marco conceptual y objetivo del laboratorio','Comprensión del flujo'],
    ['0:05–0:15','Acceso y preparación','Google Colab, Drive y organización del archivo','Cuaderno creado'],
    ['0:15–0:30','Carga de datos','Cargar Excel/CSV y verificar estructura','Base importada'],
    ['0:30–0:45','Exploración inicial','Dimensiones, columnas, tipos, desenlace','Diagnóstico inicial'],
    ['0:45–1:05','Limpieza y preparación','Nombres de variables, faltantes, codificación','Base lista para análisis'],
    ['1:05–1:25','Análisis descriptivo','Descripción general y por COVID','Tablas descriptivas'],
    ['1:25–1:40','Preprocesamiento','Separación X/y, train/test, pipelines','Datos preparados'],
    ['1:40–1:55','Modelos predictivos','Regresión logística, XGBoost, LightGBM','Modelos entrenados'],
    ['1:55–2:00','Cierre','Interpretación, reproducibilidad y tarea posterior','Plan de continuidad'],
  ]
))}
`
    },
    {
      id: 's4-b1',
      title: 'Bloque 1. Acceso a Google Colab',
      badge: '0:05–0:15 · 10 min',
      content: `
${card('Actividades', `
<ol>
  <li>Ingresar a Google Colab.</li>
  <li>Crear un nuevo cuaderno.</li>
  <li>Nombrar el archivo: <code>Sesion4_Analisis_COVID_NombreEstudiante.ipynb</code></li>
  <li>Crear una carpeta en Google Drive para el taller.</li>
  <li>Subir allí la base de datos.</li>
  <li>Vincular Google Colab con Drive.</li>
</ol>
`, '0:05–0:15')}
${codigo('Python', `from google.colab import drive
drive.mount('/content/drive')`)}
${prompt('Prompt para el chatbot', `Actúa como tutor de Python para investigación en salud. Estoy trabajando en Google Colab y necesito cargar una base de datos desde Google Drive. Explícame paso a paso qué hace este código y cómo verificar que mi archivo está disponible.`)}
`
    },
    {
      id: 's4-b2',
      title: 'Bloque 2. Carga de la base de datos',
      badge: '0:15–0:30 · 15 min',
      content: `
${card('Importar la base y verificar estructura', ``, '0:15–0:30')}
${codigo('Python', `import pandas as pd
import numpy as np

ruta = '/content/drive/MyDrive/Taller_IA_Salud/para IA.xlsx'
df = pd.read_excel(ruta)
df.head()`)}
${codigo('Python — Verificación inicial', `df.shape
df.columns
df.info()`)}
${codigo('Python — Alternativa: carga directa desde el computador', `from google.colab import files
uploaded = files.upload()

df = pd.read_excel('para IA.xlsx')
df.head()`)}
${prompt('Prompt para el chatbot', `Tengo una base de datos clínica cargada en un DataFrame llamado df. Ayúdame a escribir código en Python para revisar dimensiones, nombres de columnas, tipos de variables y primeras filas. Explica brevemente qué significa cada resultado.`)}
`
    },
    {
      id: 's4-b3',
      title: 'Bloque 3. Exploración inicial',
      badge: '0:30–0:45 · 15 min',
      content: `
${card('Objetivo: comprender la composición de la base y confirmar el desenlace', ``, '0:30–0:45')}
${codigo('Python', `df.describe(include='all').T

df['COVID'].value_counts()
df['COVID'].value_counts(normalize=True) * 100`)}
${codigo('Python — Valores perdidos', `faltantes = df.isna().sum().sort_values(ascending=False)
faltantes[faltantes > 0]

porcentaje_faltantes = df.isna().mean().sort_values(ascending=False) * 100
porcentaje_faltantes[porcentaje_faltantes > 0]`)}
${prompt('Prompt para el chatbot', `Analiza estos resultados de exploración inicial. La variable desenlace es COVID. Ayúdame a interpretar el balance de clases, los valores perdidos y los posibles problemas antes de construir modelos predictivos.`)}
`
    },
    {
      id: 's4-b4',
      title: 'Bloque 4. Limpieza y preparación',
      badge: '0:45–1:05 · 20 min',
      content: `
${card('Objetivo: preparar la base para análisis y modelamiento', ``, '0:45–1:05')}
${codigo('Python — Limpieza de nombres de columnas', `df.columns = (
    df.columns
    .str.strip()
    .str.replace(' ', '_')
    .str.replace('-', '_')
    .str.replace('/', '_')
)
df.columns`)}
${codigo('Python — Revisión del desenlace', `df['COVID'].value_counts(dropna=False)`)}
${codigo('Python — Separación de variables numéricas y categóricas', `variables_numericas = df.select_dtypes(include=['int64', 'float64']).columns.tolist()
variables_categoricas = df.select_dtypes(include=['object', 'category', 'bool']).columns.tolist()

variables_numericas, variables_categoricas`)}
${codigo('Python — Revisión de duplicados', `df.duplicated().sum()`)}
${prompt('Prompt para el chatbot', `Estoy preparando una base clínica para análisis predictivo. Dame una lista de chequeo para revisar antes de modelar: desenlace, duplicados, tipos de variables, valores perdidos, codificación de categorías y posible fuga de información.`)}
`
    },
    {
      id: 's4-b5',
      title: 'Bloque 5. Análisis descriptivo',
      badge: '1:05–1:25 · 20 min',
      content: `
${card('Objetivo: describir la población y comparar características según COVID', ``, '1:05–1:25')}
${codigo('Python — Descripción general', `df.describe().T`)}
${codigo('Python — Tabla de resumen por desenlace', `df.groupby('COVID').describe().T`)}
${codigo('Python — Frecuencias de variables categóricas', `for col in variables_categoricas:
    print(f'\\nVariable: {col}')
    print(df[col].value_counts(dropna=False))`)}
${codigo('Python — Visualización del desenlace', `import matplotlib.pyplot as plt

df['COVID'].value_counts().plot(kind='bar')
plt.title('Distribución del desenlace COVID')
plt.xlabel('COVID')
plt.ylabel('Frecuencia')
plt.show()`)}
${codigo('Python — Comparación por desenlace', `variable = 'Edad'
if variable in df.columns:
    df.boxplot(column=variable, by='COVID')
    plt.title(f'{variable} según COVID')
    plt.suptitle('')
    plt.xlabel('COVID')
    plt.ylabel(variable)
    plt.show()`)}
${prompt('Prompt para el chatbot', `Con base en estas tablas descriptivas, ayúdame a redactar una interpretación inicial en lenguaje académico. No afirmes causalidad. Distingue entre descripción, asociación exploratoria y predicción.`)}
`
    },
    {
      id: 's4-b6',
      title: 'Bloque 6. Preprocesamiento',
      badge: '1:25–1:40 · 15 min',
      content: `
${card('Objetivo: preparar los datos para entrenar modelos de forma reproducible', ``, '1:25–1:40')}
${codigo('Python — Separación predictores y desenlace', `y = df['COVID']
X = df.drop(columns=['COVID'])`)}
${codigo('Python — División entrenamiento/prueba', `from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)`)}
${codigo('Python — Variables numéricas y categóricas en train', `numeric_features = X_train.select_dtypes(include=['int64', 'float64']).columns.tolist()
categorical_features = X_train.select_dtypes(include=['object', 'category', 'bool']).columns.tolist()

numeric_features, categorical_features`)}
${codigo('Python — Pipeline de preprocesamiento', `from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.impute import SimpleImputer

numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())
])

categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='most_frequent')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))
])

preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numeric_features),
        ('cat', categorical_transformer, categorical_features)
    ]
)`)}
${prompt('Prompt para el chatbot', `Explícame este pipeline de preprocesamiento en Python. Indica por qué se imputan valores perdidos, por qué se escalan variables numéricas y por qué se usa one-hot encoding en variables categóricas.`)}
`
    },
    {
      id: 's4-b7',
      title: 'Bloque 7. Modelos predictivos',
      badge: '1:40–1:55 · 15 min',
      content: `
${card('Objetivo: entrenar tres modelos predictivos y comparar su desempeño', ``, '1:40–1:55')}
${codigo('Python — 7.1 Regresión logística multivariada', `from sklearn.linear_model import LogisticRegression

modelo_logistico = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', LogisticRegression(max_iter=1000, class_weight='balanced'))
])

modelo_logistico.fit(X_train, y_train)`)}
${codigo('Python — 7.2 XGBoost', `!pip install xgboost -q

from xgboost import XGBClassifier

modelo_xgb = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', XGBClassifier(
        eval_metric='logloss',
        random_state=42
    ))
])

modelo_xgb.fit(X_train, y_train)`)}
${codigo('Python — 7.3 LightGBM', `!pip install lightgbm -q

from lightgbm import LGBMClassifier

modelo_lgbm = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', LGBMClassifier(
        random_state=42,
        class_weight='balanced'
    ))
])

modelo_lgbm.fit(X_train, y_train)`)}
${codigo('Python — Evaluación común de modelos', `from sklearn.metrics import (
    accuracy_score,
    balanced_accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    roc_auc_score,
    confusion_matrix,
    classification_report
)

def evaluar_modelo(nombre, modelo, X_test, y_test):
    y_pred = modelo.predict(X_test)
    y_proba = modelo.predict_proba(X_test)[:, 1]

    resultados = {
        'modelo': nombre,
        'accuracy': accuracy_score(y_test, y_pred),
        'balanced_accuracy': balanced_accuracy_score(y_test, y_pred),
        'precision': precision_score(y_test, y_pred),
        'sensibilidad_recall': recall_score(y_test, y_pred),
        'f1': f1_score(y_test, y_pred),
        'roc_auc': roc_auc_score(y_test, y_proba)
    }

    print(f'\\nModelo: {nombre}')
    print(confusion_matrix(y_test, y_pred))
    print(classification_report(y_test, y_pred))

    return resultados

resultados = []
resultados.append(evaluar_modelo('Regresión logística', modelo_logistico, X_test, y_test))
resultados.append(evaluar_modelo('XGBoost', modelo_xgb, X_test, y_test))
resultados.append(evaluar_modelo('LightGBM', modelo_lgbm, X_test, y_test))

tabla_resultados = pd.DataFrame(resultados)
tabla_resultados`)}
${prompt('Prompt para interpretar resultados', `Interpreta esta tabla de resultados de modelos predictivos para COVID-19. Explica accuracy, balanced accuracy, sensibilidad, precisión, F1 y ROC AUC. Considera que el desenlace puede estar desbalanceado. No concluyas que el modelo es clínicamente útil sin validación externa.`, 'maestro')}
`
    },
    {
      id: 's4-b8',
      title: 'Bloque 8. Cierre e interpretación crítica',
      badge: '1:55–2:00 · 5 min',
      content: `
${card('Preguntas de cierre', `
<ol>
  <li>¿Cuál modelo tuvo mejor desempeño global?</li>
  <li>¿Cuál modelo tuvo mejor sensibilidad?</li>
  <li>¿Cuál tuvo mejor balance entre sensibilidad y especificidad?</li>
  <li>¿La exactitud es suficiente para evaluar el modelo?</li>
  <li>¿Qué riesgos tendría usar este modelo directamente en clínica?</li>
  <li>¿Qué pasos faltan antes de considerar una aplicación real?</li>
</ol>
`, '1:55–2:00')}
<div class="info-section dorado">
  <strong>Mensaje final:</strong> El análisis predictivo en salud debe entenderse como un proceso reproducible, documentado y críticamente evaluado. El chatbot puede acelerar la programación y la documentación, pero no reemplaza la validación metodológica, estadística ni clínica.
</div>
`
    },
    {
      id: 's4-prompts',
      title: 'Prompts transversales',
      content: `
${card('Prompts para usar durante toda la sesión', `
<p>Estos prompts pueden aplicarse en cualquier bloque de la Sesión 4:</p>
`)}
${prompt('Prompt 1. Explicar código', `Explícame línea por línea este código de Python. Estoy aprendiendo análisis de datos en salud y necesito entender qué hace cada parte, qué supuestos tiene y qué errores podrían aparecer.`)}
${prompt('Prompt 2. Corregir error', `Tengo este error en Google Colab. Te comparto el código y el mensaje de error. Ayúdame a identificar la causa probable y propón una versión corregida del código. Explica el cambio.`)}
${prompt('Prompt 3. Documentar una celda', `Ayúdame a escribir una celda de texto en formato Markdown para explicar el propósito de este paso del análisis en un cuaderno reproducible.`)}
${prompt('Prompt 4. Interpretar una tabla', `Interpreta esta tabla en lenguaje académico para un informe de investigación en salud. No hagas afirmaciones causales y menciona las limitaciones del análisis exploratorio.`)}
${prompt('Prompt 5. Revisar riesgos metodológicos', `Revisa críticamente este flujo de análisis predictivo. Identifica posibles riesgos de sesgo, fuga de información, sobreajuste, mal manejo de valores perdidos, desbalance del desenlace y problemas de interpretación clínica.`)}
`
    },
    {
      id: 's4-producto',
      title: 'Producto final',
      content: `
${card('Producto mínimo esperado: secciones del cuaderno Colab', `
${checklist('s4-productos', [
  'Introducción: descripción breve de la base y del desenlace',
  'Carga de datos: código funcional para importar la base',
  'Exploración inicial: dimensiones, columnas, tipos de datos',
  'Desenlace: distribución de COVID u otro desenlace',
  'Valores faltantes: tabla de cantidad y porcentaje',
  'Análisis descriptivo: estadísticos generales y por desenlace',
  'Preprocesamiento: separación X/y, train/test y pipeline',
  'Modelamiento: Regresión logística, XGBoost y LightGBM entrenados',
  'Evaluación: tabla comparativa de métricas',
  'Interpretación: comentario crítico sobre desempeño y limitaciones',
])}
`)}
`
    },
    {
      id: 's4-tarea',
      title: 'Tarea posterior',
      content: `
${card('Tarea posterior sugerida', `
<p>Cada estudiante deberá entregar el cuaderno de Google Colab con:</p>
<ol>
  <li>Código ejecutado sin errores.</li>
  <li>Comentarios en Markdown antes de cada bloque.</li>
  <li>Tabla descriptiva de la población.</li>
  <li>Tabla comparativa de modelos.</li>
  <li>Interpretación crítica de máximo 300 palabras.</li>
  <li>Tres prompts utilizados durante el análisis.</li>
  <li>Una reflexión breve: <strong>¿En qué pasos el chatbot fue más útil y en cuáles fue necesario verificar cuidadosamente su respuesta?</strong></li>
</ol>
`)}
${card('Recomendación pedagógica', `
<p>Para mantener la sesión dentro de las 2 horas, conviene entregar a los estudiantes un <strong>cuaderno base parcialmente estructurado</strong>, con títulos y algunas celdas iniciales. Durante la sesión, los estudiantes completan y ejecutan los bloques principales.</p>
<div class="info-section">
  <strong>Lógica del flujo:</strong> Comprender la base → cargar datos → explorar → limpiar → describir → preparar → modelar → evaluar → interpretar críticamente.
</div>
<p>El foco no debe ser obtener el mejor modelo posible, sino aprender un flujo de trabajo reproducible, transparente y asistido por IA.</p>
`)}
`
    }
  ]
},

/* ══════════════ 7. NOSOTROS ══════════════ */
{
  id: 'nosotros',
  menuTitle: 'Nosotros · Equipo y Laboratorio',
  tabs: [

    /* ── Tab 1: Laboratorio ProfundaMente ── */
    {
      id: 'nos-lab',
      title: 'Laboratorio ProfundaMente',
      content: `
<div class="nos-hero">
  <div class="nos-hero-logos">
    <img src="assets/logo-fucs-dark.png" alt="FUCS">
    <img src="assets/logo-profundamente-dark.png" alt="ProfundaMente">
  </div>
  <h1>Laboratorio ProfundaMente</h1>
  <p>Investigación, innovación y formación en Inteligencia Artificial aplicada a la Salud · FUCS</p>
</div>

<div class="nos-section">
  <div class="nos-section-body">
    <p class="nos-lead">ProfundaMente es un laboratorio de investigación e innovación orientado al desarrollo de soluciones basadas en evidencia, la formación de talento y la transformación de los procesos clínicos, investigativos y educativos en salud.</p>
    <p>El laboratorio integra un equipo interdisciplinario de profesionales con experiencia en medicina, ciencias biomédicas, ciencia de datos e inteligencia artificial, comprometidos con la generación de conocimiento y su aplicación responsable en el contexto del sistema de salud.</p>
  </div>
</div>

<div class="nos-enfoque-grid">
  <div class="nos-enfoque-card">
    <div class="nos-enfoque-icon">🔬</div>
    <h4>Investigación científica rigurosa</h4>
    <p>Proyectos con estándares metodológicos sólidos, reproducibles y trazables.</p>
  </div>
  <div class="nos-enfoque-card">
    <div class="nos-enfoque-icon">💻</div>
    <h4>Desarrollo tecnológico aplicado</h4>
    <p>Herramientas, modelos y plataformas orientadas a necesidades reales del sistema de salud.</p>
  </div>
  <div class="nos-enfoque-card">
    <div class="nos-enfoque-icon">✅</div>
    <h4>Validación clínica y metodológica</h4>
    <p>Evaluación crítica de la utilidad, seguridad y equidad de las soluciones desarrolladas.</p>
  </div>
  <div class="nos-enfoque-card">
    <div class="nos-enfoque-icon">🛡️</div>
    <h4>Implementación responsable</h4>
    <p>Marco ético, regulatorio y científico que guía cada etapa del desarrollo e integración de IA.</p>
  </div>
</div>

<div class="nos-proposito">
  <span class="nos-proposito-label">Propósito</span>
  <h2>Contribuir a la transformación del sistema de salud mediante el desarrollo e implementación de inteligencia artificial basada en evidencia.</h2>
  <p>Promoviendo la equidad, la eficiencia y la calidad en la atención, así como la formación de nuevas generaciones de profesionales en salud digital.</p>
</div>
`
    },

    /* ── Tab 2: Énfasis en educación en IA ── */
    {
      id: 'nos-educacion',
      title: 'Énfasis en educación en IA',
      content: `
<div class="nos-section">
  <h2 class="nos-section-title">Énfasis en educación en Inteligencia Artificial</h2>
  <p class="nos-lead">ProfundaMente desarrolla programas formativos que integran el uso crítico, transparente y reproducible de herramientas de inteligencia artificial generativa en investigación, docencia y comunicación académica en ciencias de la salud.</p>
</div>

<div class="nos-edu-grid">
  <div class="nos-edu-card accent-azul">
    <h4>¿Por qué formar en IA en salud?</h4>
    <p>La IA generativa está transformando la práctica clínica, la investigación y la educación médica. Formar profesionales capaces de usarla con criterio, verificar sus resultados y reconocer sus limitaciones es una necesidad urgente y una responsabilidad institucional.</p>
  </div>
  <div class="nos-edu-card accent-dorado">
    <h4>Enfoque pedagógico</h4>
    <p>Aprendizaje activo basado en productos, práctica guiada con herramientas reales, progresión de complejidad y reflexión crítica. Cada sesión produce un artefacto verificable aplicable al contexto académico del participante.</p>
  </div>
</div>

<div class="nos-section" style="margin-top:24px">
  <h3 class="nos-subsection-title">Líneas formativas del laboratorio</h3>
  ${tabla(
    ['Línea','Descripción','Herramientas y métodos'],
    [
      ['Interacción con chatbots y prompts','Diseño estratégico de instrucciones para tareas académicas e investigativas','ChatGPT, Gemini, técnicas de prompting estructurado'],
      ['Lectura y síntesis basada en fuentes','Análisis documental asistido por IA con trazabilidad de fuentes','NotebookLM, flujos de extracción documental'],
      ['Asistentes académicos personalizados','Diseño de GPTs y Gems para automatizar flujos repetitivos en salud','GPT Store, Gemini Gems, metaprompts'],
      ['Investigación profunda asistida','Exploración documentada de evidencia con evaluación crítica de fuentes','Deep Research, matrices de análisis crítico'],
      ['Escritura académica asistida','Planificación, redacción, revisión y adaptación de textos científicos','Canvas, flujos de revisión iterativa'],
      ['Ciencia de datos reproducible','Análisis de bases de datos en salud con Python en entornos colaborativos','Google Colab, scikit-learn, XGBoost, LightGBM'],
    ]
  )}
</div>

<div class="nos-section" style="margin-top:24px">
  <h3 class="nos-subsection-title">Principios transversales de formación</h3>
  <div class="nos-principios-grid">
    <div class="nos-principio"><span>🎯</span><div><strong>Verificación humana</strong><p>Toda salida de IA debe contrastarse con fuentes, datos o criterios metodológicos.</p></div></div>
    <div class="nos-principio"><span>📋</span><div><strong>Transparencia</strong><p>Documentar prompts, decisiones, fuentes, limitaciones y uso de IA en cada producto.</p></div></div>
    <div class="nos-principio"><span>🔄</span><div><strong>Transferencia</strong><p>Los participantes trabajan con sus propios temas, artículos o bases de datos.</p></div></div>
    <div class="nos-principio"><span>⚖️</span><div><strong>Responsabilidad ética</strong><p>Evitar datos sensibles sin autorización y reconocer que la IA no sustituye el juicio clínico ni metodológico.</p></div></div>
  </div>
</div>
`
    },

    /* ── Tab 3: El equipo ── */
    {
      id: 'nos-equipo',
      title: 'El equipo',
      content: `
<div class="nos-section">
  <h2 class="nos-section-title">Equipo docente del taller</h2>
  <p class="nos-lead">El taller es dirigido por dos investigadores y docentes con trayectoria complementaria en medicina clínica, ciencias biomédicas e inteligencia artificial aplicada a la salud.</p>
</div>

<!-- John Jaime Sprockel -->
<div class="nos-team-card">
  <div class="nos-team-photo-wrap">
    <img src="assets/team-john.jpg" alt="John Jaime Sprockel Díaz" class="nos-team-photo">
    <div class="nos-team-links">
      <a href="https://www.linkedin.com/in/john-jaime-sprockel-diaz-6961921b1/" target="_blank" rel="noopener" class="nos-link-btn nos-link-primary">LinkedIn</a>
      <a href="https://www.researchgate.net/profile/John-Sprockel" target="_blank" rel="noopener" class="nos-link-btn nos-link-secondary">ResearchGate</a>
    </div>
  </div>
  <div class="nos-team-bio">
    <div class="nos-team-header">
      <h3>John Jaime Sprockel Díaz</h3>
      <span class="nos-team-credentials">MD ESP, MSc, MBA</span>
    </div>
    <p class="nos-team-role">Médico internista · Director Laboratorio ProfundaMente</p>
    <p class="nos-team-summary">Médico internista, profesor e investigador con enfoque en inteligencia artificial aplicada a la salud, analítica clínica y desarrollo de modelos predictivos.</p>
    <div class="nos-team-detail">
      <p>Cuenta con formación de maestría en epidemiología clínica y MBA, con experiencia en el diseño, implementación y validación de soluciones basadas en inteligencia artificial en contextos clínicos y académicos. Su trabajo se centra en la integración de modelos de machine learning, deep learning y procesamiento de lenguaje natural en procesos asistenciales, investigación clínica y educación médica.</p>
      <p>Ha liderado iniciativas de innovación en salud digital, incluyendo el desarrollo de sistemas de apoyo a la decisión clínica, plataformas de análisis de datos y proyectos de patología digital, promoviendo la articulación entre investigación, tecnología y práctica clínica.</p>
    </div>
    <div class="nos-team-tags">
      <span>Machine Learning</span>
      <span>Medicina Interna</span>
      <span>Analítica Clínica</span>
      <span>NLP</span>
      <span>Educación médica</span>
    </div>
  </div>
</div>

<!-- Arley Gómez -->
<div class="nos-team-card">
  <div class="nos-team-photo-wrap">
    <img src="assets/team-arley.jpg" alt="Arley Gómez López" class="nos-team-photo">
    <div class="nos-team-links">
      <a href="https://www.linkedin.com/in/arley-g%C3%B3mez-086a7b24/" target="_blank" rel="noopener" class="nos-link-btn nos-link-primary">LinkedIn</a>
      <a href="https://www.researchgate.net/profile/Arley-Gomez-Lopez" target="_blank" rel="noopener" class="nos-link-btn nos-link-secondary">ResearchGate</a>
    </div>
  </div>
  <div class="nos-team-bio">
    <div class="nos-team-header">
      <h3>Arley Gómez López</h3>
      <span class="nos-team-credentials">MD, PhD</span>
    </div>
    <p class="nos-team-role">Médico cirujano · Docente-investigador FUCS</p>
    <p class="nos-team-summary">Docente investigador de la Fundación Universitaria de Ciencias de la Salud (FUCS), con formación interdisciplinaria en medicina, biología y ciencias biomédicas.</p>
    <div class="nos-team-detail">
      <p>Médico cirujano y biólogo, con maestría en biología molecular y biotecnología, doctorado en ciencias biomédicas y formación posdoctoral en nanotecnología aplicada a la medicina. Posee amplia experiencia en investigación biomédica, medicina traslacional y nanomedicina.</p>
      <p>Ha participado como evaluador de proyectos de investigación clínica y biomédica, en programas de formación doctoral, y cuenta con experiencia en el desarrollo de redes académicas y científicas a nivel nacional e internacional.</p>
    </div>
    <div class="nos-team-tags">
      <span>Biología molecular</span>
      <span>Nanomedicina</span>
      <span>Medicina traslacional</span>
      <span>Investigación biomédica</span>
    </div>
  </div>
</div>
`
    }
  ]
},

/* ══════════════ 8. REQUISITOS E INSTRUCCIONES ══════════════ */
{
  id: 'requisitos',
  menuTitle: 'Requisitos e instrucciones',
  tabs: [{
    id: 'req-global',
    title: 'Requisitos globales del taller',
    content: `
<div class="session-header">
  <h1>Requisitos e instrucciones globales</h1>
  <div class="session-meta">
    <span class="meta-badge">Todas las sesiones</span>
  </div>
</div>

<div class="req-section">
  <div class="req-section-title">Preparación institucional y cuentas necesarias</div>
  <div class="req-section-body">
    <ul>
      <li><strong>ChatGPT</strong> (openai.com) — cuenta gratuita o Plus. Plus recomendado para Deep Research, GPT Store, Canvas y análisis de datos.</li>
      <li><strong>Gemini</strong> (gemini.google.com) — cuenta de Google. Gemini Advanced (Google One AI Premium) para Deep Research, Gems y funciones extendidas.</li>
      <li><strong>Cuenta de Google</strong> activa para NotebookLM, Google Drive y Google Colab.</li>
      <li><strong>Google Drive</strong> con espacio disponible para documentos y bases de datos.</li>
      <li><strong>Google Colab</strong> — verificar acceso antes de la Sesión 4.</li>
    </ul>
  </div>
</div>

<div class="req-section">
  <div class="req-section-title">Verificación de funciones habilitadas</div>
  <div class="req-section-body">
${tabla(
  ['Función','Plataforma','Dónde verificar'],
  [
    ['Deep Research / Investigación profunda','ChatGPT Plus','Menú lateral o barra de herramientas del chat'],
    ['Deep Research','Gemini Advanced','Opciones del chat / selección de modo'],
    ['GPT Store / Creación de GPTs','ChatGPT Plus','Explorar GPTs / Crear GPT'],
    ['Gems personalizados','Gemini Advanced','Menú Gems en la barra lateral'],
    ['NotebookLM','Google (cuenta gratuita)','notebooklm.google.com'],
    ['Canvas / Lienzo','ChatGPT Plus','Botón de herramientas en el chat'],
    ['Generación de imágenes','ChatGPT Plus / Gemini','Funciones de imagen en el chat'],
    ['Análisis de datos','ChatGPT Plus','Adjuntar archivo o activar herramienta de análisis'],
  ]
)}
  </div>
</div>

<div class="req-section">
  <div class="req-section-title">Materiales mínimos por sesión</div>
  <div class="req-section-body">
${tabla(
  ['Material','Uso en el taller'],
  [
    ['Artículo científico en PDF por estudiante','Sesión 1 y NotebookLM (2A)'],
    ['Fuentes complementarias (artículo, guía, video)','NotebookLM e investigación profunda'],
    ['Tema de interés académico en salud','Investigación profunda, escritura y asistente personalizado'],
    ['Base de datos de ejemplo (Excel/CSV)','Sesión 4 — proporcionada por el facilitador'],
    ['Cuaderno Colab base (opcional)','Facilitar ejecución paso a paso en Sesión 4'],
    ['Plantillas de prompts','Guiar interacciones iniciales en todas las sesiones'],
    ['Rúbricas y listas de chequeo','Favorecer evaluación crítica'],
  ]
)}
  </div>
</div>

<div class="req-section">
  <div class="req-section-title">Sesión 1 — Preparación y criterios para el artículo</div>
  <div class="req-section-body">
    <p>El artículo debe permitir identificar con relativa claridad:</p>
${tabla(
  ['Elemento','Pregunta orientadora'],
  [
    ['Problema de investigación','¿Qué problema aborda?'],
    ['Objetivo','¿Qué pretendía evaluar o describir?'],
    ['Diseño','¿Qué tipo de estudio se realizó?'],
    ['Población','¿Quiénes fueron incluidos?'],
    ['Muestra','¿Cuántos participantes, casos, imágenes, historias clínicas o registros se analizaron?'],
    ['Variables','¿Qué variables principales se midieron?'],
    ['Procedimiento','¿Qué pasos siguieron los investigadores?'],
    ['Análisis','¿Qué métodos estadísticos, cualitativos o computacionales usaron?'],
    ['Consideraciones éticas','¿El artículo menciona aprobación ética, consentimiento o manejo de datos?'],
  ]
)}
  </div>
</div>

<div class="req-section">
  <div class="req-section-title">Criterios éticos y de seguridad</div>
  <div class="req-section-body">
    <ul>
      <li>No cargar información clínica identificable ni datos sensibles sin autorización institucional.</li>
      <li>No usar resultados de modelos predictivos como recomendaciones clínicas sin validación rigurosa.</li>
      <li>No aceptar referencias, citas, datos o interpretaciones sin verificación.</li>
      <li>No presentar productos generados por IA como producción autónoma sin declaración de uso cuando aplique.</li>
      <li>Mantener responsabilidad autoral y académica sobre todo producto final.</li>
    </ul>
  </div>
</div>

<div class="req-section">
  <div class="req-section-title">Lista de chequeo general de verificación de productos IA</div>
  <div class="req-section-body">
${tabla(
  ['Criterio','Pregunta de verificación'],
  [
    ['Fidelidad','¿El producto representa correctamente la fuente, datos o tarea original?'],
    ['Trazabilidad','¿Se puede verificar la afirmación principal?'],
    ['Completitud','¿Incluye todos los elementos solicitados?'],
    ['Claridad','¿La audiencia prevista puede comprenderlo?'],
    ['Precisión','¿Evita inferencias no sustentadas?'],
    ['Limitaciones','¿Reconoce vacíos, incertidumbre o restricciones?'],
    ['Ética','¿Evita datos sensibles, plagio o atribución indebida?'],
    ['Utilidad','¿Puede usarse como insumo para investigación, docencia o aprendizaje?'],
  ]
)}
  </div>
</div>

<div class="req-section">
  <div class="req-section-title">Glosario operativo del taller</div>
  <div class="req-section-body">
${tabla(
  ['Término','Definición para el taller'],
  [
    ['Prompt','Instrucción que orienta la respuesta de la IA.'],
    ['Metaprompt','Prompt diseñado para ayudar a crear otro prompt o instrucciones de sistema.'],
    ['Cuaderno','Espacio de NotebookLM que agrupa fuentes para un tema o proyecto.'],
    ['GPT personalizado','Versión configurada de ChatGPT para un propósito específico.'],
    ['Gem','Asistente personalizado en Gemini Apps.'],
    ['Investigación profunda','Proceso asistido de búsqueda, análisis y síntesis de múltiples fuentes.'],
    ['Canvas/lienzo','Espacio de edición o trabajo extendido para documentos, código o productos.'],
    ['Pipeline','Secuencia reproducible de pasos de preprocesamiento y modelamiento en análisis de datos.'],
  ]
)}
  </div>
</div>
`
  }]
}

  ] // fin sessions
}; // fin APP_DATA
