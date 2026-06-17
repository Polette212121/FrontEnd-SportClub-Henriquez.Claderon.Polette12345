**SPORTCLUB - PROYECTO PROGRAMACION FRONT END** 



\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*







###### &#x20;**Descripción del proyecto** 







El proyecto SportClub corresponde a la evaluación sumativa de la asignatura de programación front end.

El objetivo de este proyecto es desarrollar un sitio web estático, utilizando HTML yCSS3 , que represente la identidad

de un club deportivo moderno, motivacional y tecnológico, que tenga coherencia con la identidad deportiva del cliente.

El sistema esta compuesto por varios módulos, landing page, formularios, dashboards y se utilizo diferenciación visual,

el proyecto se organiza en diferentes carpetas como index,css, js,pages y en cada una de estas carpetas se encuentran

variadas subcarpetas que acompañan al código para poder ser representado en una pagina web.





\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*







**Explicación para mi index.html**



**Primera parte del código:\*\***



1\. Declaramos en primera instancia DOCTYPE.HTML para informar al navegador que tipo de documento HTML estoy usando 

y como debe de interpretar el código, luego configuramos el idioma al español con Lang  y la sigla es, ingresamos

los elementos para definir la estructura de nuestra pagina web en el archivo HTML, agregamos cada etiqueta, estas 

nos permiten definir los elementos que usaremos en nuestro archivo HTML, estas etiquetas especifican que tipo de elemento

se va a crear en la pagina web, la mayoría de elementos en HTML requieren dos tipos de etiqueta una de apertura y otra de cierre

por lo tanto aperturamos la estructura con <html> y agregamos el cuerpo de nuestra estructura con body (<body>) para que todo 

aquel elemento que añadamos sea visible para el usuario, debemos considerar que estas etiquetas son esenciales

para que el navegador web sepa donde comienza un elemento y donde termina un elemento ya sea anidado o en una secuencia,

Utilice charset ="UTF-8" para que se muestren correctamente los caracteres especiales y el código viewport para que el sitio

se pueda ver tanto en¿ móviles como a computadores, Finalmente enlace dos hojas de estilo styles.css para los estilos generales

y landing.css para los estilos mas específicos de la pagina principal.







###### **Header**



En esta parte del código se crea el encabezado de la pagina, primero se agrega el contenedor (.container) para mantener todo 

ordenado dentro se agrega el logo del club como imagen (Logo-sport.png), este logo se añade a las carpetas de código en visual 

estudio par poder llamarlo, luego se añade un menú de navegación (nav),con una lista de enlaces(<ul>) y <li>), estos enlaces

llevan a las secciones principales de la pagina como: inicio, planes,beneficios y contactos, también se coloca un enlace especial para el login,

la cual tiene la clase btn-login para que este se vea como un botón,todo esto dentro de un contenedor (div.header-content) para que

el logo y el menú queden alineados correctamente, lo nombramos .header-contentpara poder usarlo en el archivo CSS y darle diseño.



###### **La hero Section**





En esta sección se añade un bloque principal (<section class="hero" id="inicio"> la que describe la presentación motivacional 

de la pagina, dentro s agrega un contenedor <div class="hero-content"> con un titulo motivador, un párrafo que describe la

propuesta del club y un botón que lleva al formulario de registro.



###### 

###### **Beneficio**



Se añade la sección de beneficios <section class="beneficios" id="beneficios"> se egrega como titulo <h2 class="section-title">Nuestros

Beneficios</h2> y dentro de este se agrega un contenedor <div class="beneficios-grid"> para organizar varias tarjetas <div class="beneficio-card"> 

a cada tarjeta se le añade un icono, un titulo y una descripción, se colocan beneficios, entrenamiento personalizado, seguimiento en tiempo real,

comunidad motivada, coaching profesional, horarios flexibles y resultados garantizados, cumpliendo con el requisito mínimo de 3 beneficios, 

pero se amplia a 6 para hacerlo mas completo y atractivo.

###### 

###### 

###### **Planes**





En esta parte del código se añade la sección de Planes <section class="planes" id="planes"> Se añade un titulo "Nuestros Planes" etiquetados 

con <h2 class="section-title">Nuestros Planes</h2> para así presentar las opciones disponibles, después se utiliza una un contenedor principal

llamado planes-grid dentro de el añadimos contenedores mas pequeños etiquetados <div class="plan-card">, El contenedor grande (planes-grid) 

organiza las casillas de los planes, mientras que los contenedores mas pequeños (plan- card) agrupa la información de un plan especifico 

(nombre, precio, beneficio y botón) de esta forma puedo aplicar estilos diferentes, uno para una casilla en general, que contenga cada plan individual,

asi el diseño queda ordenado y adaptable, agregando las características de cada plan en etiquetas mas pequeñas.



###### **Sección Sobre-club**



Añadimos la sección <section class="sobre-club"> agregamos nuestro contenedor para mantener ordenado y un titulo principal que nos hable sobre 

Sport Club, Luego se añade un bloque  <div class="about-content"> el cual contiene 3 subsecciones  <div class="about-section"> , cada subsección 

contiene el origen del club y su objetivo de revolución , describe su propósito, innovación y transformación, cada subsección esta organizada con

un titulo y un párrafo explicativo.





###### **Sección footer**



En esta parte del código se crea el footer de la pagina <footer class="footer"> dentro de este se añade un contenedor <div class="container">

y se divide en varias secciones <div class="footer-section"> para organizar la información. 



El footer incluye tres secciones principales:



redes sociales: Se crea <div class="social-links"> un enlace referenciado href a Facebook, Instagram,twitter y LinkedIn, <div class="social-links">,

se crea otra sección para que se visualicen los contactos de la empresa, <div class="footer-section">, <h4>Contacto</h4>, otra sección donde se

visualicen la dirección o la ubicación de la empresa <div class="footer-section"> y se crea el titulo <h4>Ubicación</h4>. cerramos el footer,

Pero en esta ocacion damos por finalizado nuestro código y como dijimos en la apertura de nuestra estructura de código, finalizamos con </body> 

para que todo lo incluido en nuestra estructura de <html> pueda ser visualizado por el usuario, y cerramos nuestra estructura con nuestra etiqueta 

de cierre </html>.





\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*







**CARPETA CSS, DASHBOARD.CSS**



En este archivo se definió estilos para todo el panel, el header cambia de color según su rol, la navegación lateral tiene enlaces con efectos

&#x20;hover y el contenido principal se organiza por secciones con tarjetas y tabla. Las estadísticas y clases se muestran en casillas con efectos 

visuales, y cada rol (usuario, coach, admin) tienen colores propios. También se agregan tarjetas de perfil, reportes y badges para estados y roles. 

Finalmente, se crea un diseño responsive para que se vea bien en pantallas pequeñas.





###### 

###### **Estilos generales del Dashboard**







.dashboard se define un fondo gris claro, con una altura mínima de toda la pantalla de 100vh esto asegura que ocupe toda la pantalla aunque 

el contenido sea poco y tipografía moderna esto asegura que el panel tenga una base visual común para todo el panel, al elegir 

font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; todo el texto se ve consistente y profesional.



###### **Header del dashboard**



Background: Se aplico un degradado oscuro para dar estilo elegante al encabezado.

Color: Se aplica texto blanco para el contraste.

Padding: Se aplica un espacio interno de 1.5 rem para que el contenido títulos, logo, botones no sea vean pegados.

Box shadow: este agrega una sombra suave debajo del header, asi lo separa visualmente del resto del contenido, como si estuviera flotando 

un poco. Se usa un difuminado grande y baja capacidad para que la sobra se vea mas tenue y elegante.

Position: Sticky:se utilizo para que el header quede fijo arriba del navegador al desplazar la vista vertical u horizontal. 

Además se utilizo \*\*z-index\*\*: 100 para darle prioridad visual y asegurar que se muestre encima del resto del contenido. Así el encabezado

siempre estará visible.





###### 

###### Variantes del rol







.user-header   (usuario) = borde azul



.coach-header  (coach)   = borde verde



.admin-header  (admin)   = borde rojo



Esto diferencia visualmente cada tipo de dashboard.



###### **Logo y botones**



En el header cambie el logo de texto por una imagen (<img>) esto permite mostrar el logotipo del club en vez de solo letras,

&#x20;haciendo el diseño mas coherente con la identidad visual, el contenedor del header sigue usando flexbox para alinear el logo y 

los botones, pero ahora el logo es una imagen en vez de texto.





###### **Contenedor principal**





En el contenedor principal usé flexbox para dividir la pantalla en navegación lateral y contenido. La navegación lateral

&#x20;tiene enlaces con colores distintos según el rol y efectos hover. El contenido principal se organiza en secciones con títulos y subtítulos.

&#x20;También agregué tarjetas de estadísticas en casillas y tablas con estilos y diseños, Todo esto hace que el dashboard sea ordenado,

&#x20;visualmente atractivo y fácil de usar.



###### 

###### **Componentes visuales del dashboard** 







En el Dashboard.css se definieron tarjetas de bienvenida con colores distintos según el rol tarjeta de clases con iconos y 

descripciones y variantes especificas para el coach y admin con detalles como alumnos y capacidad. También agregue una tarjeta de 

perfil con información organizada en casillas, badges para mostrar estados y roles, y tarjetas de reportes con listas y estadísticas.

&#x20;Todo esto hace que el dashboard sea visual, organizado y adaptativo a cada usuario.





###### **Configuración y estilos generales**







En esta parte del CSS, la sección de configuración se definió en cuadricula adaptable un badge dorado para destacar la información 

y estilos responsive. Para pantallas medianas se reduce espacios y tamaños, y en pantallas pequeñas el dashboard se reorganiza en 

una sola columna con navegación horizontal. Asi el diseño se adapta a distintos dispositivos.







\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

###### **\*\*Carpeta Forms.css\*\*** 

###### **\*\*Estructura del formulario\*\*** 







En esta parte la estructura visual del formulario se definió como un fondo degradado oscuro con el formulario centrado ,

&#x20;una tarjeta blanca con sombra y animación para que se vea elegante y un encabezado con titulo dorado y descripción en gris 

claro,esto  destaca el formulario del fondo, lo que le da un estilo mas moderno.

###### 

###### **\*\*Campos y retroalimentacion\*\*** 







En esta parte del CSS se definen los campos del formulario con .form-group, que coloca las etiquetas y los inputs de manera ordenada 

y con bordes suaves. Cuando el usuario hace clic en un campo, se activa el efecto focus, que cambia el borde a dorado y agrega una 

sombra ligera para resaltar el campo activo.



También se definió los mensajes de retroalimentación: .error-message en rojo para mostrar errores, y .success-message y .warning-message 

en verde o amarillo, que aparecen cuando se les agrega la clase .show. Esto facilita la interacción porque el usuario recibe señales 

visuales claras sobre lo que está bien, lo que está mal o lo que necesita atención.











###### **\*\*Acciones, enlaces y responsive\*\***







En esta sección se definieron los botones principales dentro de .form-actions, que ocupan todo el ancho y tienen color

&#x20;dorado con un efecto hover mas oscuro. También se agregaron los enlaces de ayuda en .form-links (login registro, recuperar contraseña),

&#x20;que se separan con un divisor y cambian a dorado al pasar el mouse. En el pie del formulario (.form-footer) se eligieron enlaces 

con borde superior, y en quick-access se añadió accesos rápidos al dashboard con botones pequeños. Finalmente, se configuro estilos 

responsive en pantallas menores a 600px, se reduce el padding, se ajusta las fuentes , los enlaces se muestran en columnas y los

&#x20;botones se apilan. Esto asegura que formulario sea funcional y fácil de usar en móviles y tablets.











###### **Carpeta Landing.css**

###### 

###### **Sección inicial: Hero y beneficios**







El hero queda con fondo en donde se agrega una imagen con temática deportiva, mediante la propiedad background-image. esta se 

incorpora mediante enlace externo, representando mejor la temática fitness del proyecto, el titulo queda dorado con sombra y texto motivador

&#x20;centrado. Los beneficios se muestran en unas casillas blancas con iconos, títulos y descripciones, que se levantan con efecto hover. 

Esto da un inicio atractivo y claro a la pagina.







Además, se utilizaron las propiedades background-size: cover, background-position: center y background-repeat: no-repeat para que la

&#x20;imagen ocupe correctamente todo el espacio disponible sin deformarse ni repetirse.





###### 

###### **Contenido central Planes y sobre el club**







En la sección de planes también se realizó un cambio visual importante. Originalmente esta sección utilizaba un fondo de color simple, 

pero fue reemplazado por una imagen relacionada con entrenamiento y levantamiento de pesas utilizando background-image.

Los planes se organizan en tarjetas con nombre, precio y lista de beneficios. El plan destacado tiene borde dorado y un badge que lo resalta. 

La sección sobre el club usa tarjetas blancas con borde lateral dorado para explicar la historia, misión, visión.



Gracias a la incorporación de imágenes de fondo en las secciones Hero y Planes, la Landing Page presenta una apariencia más moderna, dinámica y

&#x20;coherente con la temática deportiva de SportClub, mejorando significativamente la experiencia visual del usuario.



###### 

###### **Cierre y Responsive**



El footer tiene un fondo oscuro, titulos dorados, enlaces y redes sociales con iconos circulares. Al final incluye un texto centrado con

borde superior. En reponsive, las casillas se convierten en una sola columna y se ajustan los tamaños de títulos y parrados, asegurando que 

la pagina se vea en móviles y tablets.



###### 

###### **Carpeta style.css**



Este archivo contiene los estilos globales del proyecto, En el se definieron variables CSS para colores, tipografías y transiciones,

permitiendo mantener una identidad visual uniforme en todas las paginas.





###### **Entre sus principales funciones se encuentran:**







\* Definición de colores corporativos mediante variables CSS.

\* Configuración de tipografía en general.

\* Estilos bases para títulos, párrafos y enlaces.

\* Diseño de botones reutilizables.

\* Configuración de encabezado y navegación principal.

\* Creación de contenidos responsivos.

\* Adaptación del diseño para dispositivos móviles mediante medidas queries.



La utilización de variables CSS facilita futuras modificaciones visuales, ya que los cambios pueden realizarse desde un único

lugar sin afectar el  resto del código.







\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*





###### **\*\*Carpeta JS\*\*** 

###### 

###### **\*\*dashboard-admin.js\*\***

###### 

###### 

###### &#x20;**\*\*Gestión de acceso y validación de sesión\*\***



Este archivo controla el funcionamiento principal del Dashboard del administrador. Su principal función es verificar que exista una 

sesión activa y que el usuario tenga permisos de administrador para ingresar al sistema, window.addEventListener('load', function() {

const usuario = verificarSesion(); posteriormente para que la verificación de credenciales de administrador se realiza mediante las 

condicionales if y else lo que nos permite comprobar si el usuario posee rol de administrador, Si el usuario tiene otro rol,

&#x20;se muestra un mensaje de acceso denegado y se redirige a la pagina principal.





###### **\*\*Gestión y visualización de información\*\*** 



Una vez validado el acceso el sistema obtiene la información necesaria para el dashboard. Se calculan estadísticas generales como la cantidad de usuarios, coach y clases disponibles. Además se generan dinámicamente las tablas y tarjetas que muestran la información administrativa.



cargarDashboardAdmin(usuario);



llenarUsuariosAdmin(usuariosAdmin);



llenarClasesAdmin();



Esta información permite al administrador visualizar el estado general del sistema desde un único panel.





###### &#x20;**\*\*Reportes y administración de sistema\*\*** 



El archivo también genera reportes relacionados con las clases deportivas, mostrando niveles de ocupación, cantidad de inscritos

y estadísticas generales. Además, incorpora funciones de administración para usuarios y clases, permitiendo

futuras ampliaciones del sistema. En conjunto, estas funcionalidades permiten supervisar usuarios, controlar las actividades 

deportivas y administrar la información principal de SportClub desde el dashboard del administrador.



\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*



###### **\*\*dashboard-coach.js\*\***





###### **\*\*Gestión de acceso y validación de sesión\*\***



Este archivo controla el funcionamiento principal del Dashboard del coach. Su principal función es verificar que exista una sesión activa

y que el usuario tenga permisos de coach para ingresar al sistema, window.addEventListener('load', function() {const usuario = verificarSesion();

posteriormente para que la verificación de credenciales de administrador se realiza mediante las condicionales if y else lo que nos permite 

comprobar si el usuario posee rol de administrador, Si el usuario tiene otro rol, se muestra un mensaje de acceso denegado y se redirige 

a la pagina principal.



###### **\*\*Gestión de alumnos y clases\*\***



Se definieron arreglos con información de alumnos, clases y horarios semanales. Estos datos son utilizados para mostrar estadísticas 

generales. la lista de alumnos registrados y las clases asignadas al coach. Además, se generan dinámicamente tablas y tarjetas para 

organizar la información de forma clara dentro del dashboard.









###### **\*\*Horario y administración de clases\*\***





El sistema muestra los horarios semanales y la cantidad de alumnos inscritos en cada actividad. También incorpora funcione para 

visualizar detalles de las clases y facilitar la administración de la información.

En resumen este archivo permite al coach visualizar sus alumnos, administrar sus clases, consultar horarios y supervisar las actividades 

deportivas asignadas dentro de SportClub.











###### **\*\*Dashboard-usuario.js\*\***





###### **\*\*Gestión de acceso y validación de sesión\*\***





Este archivo controla el funcionamiento del Dashboard del usuario. Al cargar la pagina el sistema verifica que exista una sesión activa y que el usuario tenga el rol correspondiente. Si la validación es correcta, se carga la información personal del usuario, incluyendo nombre, correo electrónico, deporte favorito y fecha de registro. Además, se muestra un mensaje de bienvenida personalizado utilizando el nombre del usuario.







###### **\*\*Gestión  de reservas y clases disponibles\*\*** 



Las reservas se muestran en una tabla dinámica donde el usuario puede visualizar sus actividades programadas y cancelarlas si lo desea. También se generan tarjetas con las clases disponibles, mostrando iconos, descripciones y botones para realizar nuevas inscripciones.







###### **\*\*Interacciones con el sistema\*\***







Finalmente, se incorporaron unciones que permiten cancelar reservas existentes o inscribirse a nuevas clases deportivas.



En resumen este archivo permite al usuario visualizar su perfil, administrar sus reservas y acceder a las distintas 

actividades deportivas ofrecidas por SportClub.







###### **\*\*Forms.js (formulario)\*\***

###### 

###### **\*\*Validación de formularios\*\***





Este archivo se encarga de gestionar los formularios de inicio de sesión, registros y recuperación de contraseña.

Su principal función es validar que los datos ingresados por el usuario sean correctos antes de continuar con cualquier

accion dentro del sistema.



Verifica que los campos obligatorios estén completos y que la información cumpla con los requisitos establecidos.







###### **\*\*Registros de inicio de sesión\*\*** 





Para el formulario de registro se validan datos como nombre, correo electrónico, contraseña y confirmación de contraseña. 

Además, se comprueba que las contraseñas coincidan antes de permitir el registro.

En el caso de inicio de sesión , se valida el correo y la contraseña antes de redirigir al usuario al dashboard correspondiente.



###### **Recuperación de contraseña y validación de correo\*\***



El sistema incorpora un formulario de recuperación de contraseña donde se verifica que el correo electrónico 

tenga un formato valido antes de enviar el mensaje de recuperación. Además, se muestran mensajes de error o confirmación

&#x20;según el resultado de las validaciones realizadas.





\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*







###### **Carpeta Pages**

###### 

###### **Página Dashboard Administrador (dashboard-admin.html)**

###### 

###### **Estructura principal de navegacion**







Este archivo corresponde a la interfaz del dashboard del administrador. Su estructura se divide en un encabezado, 

un menú de navegación lateral y un área principal de contenido. Desde el menú es posible acceder a las diferentes secciones

&#x20;administrativas del sistema, como usuarios, reportes, configuraciones y clases. 





###### **Gestión y visualización de información** 



Dentro del contenido principal se muestran tarjetas estadísticas con información general del sistema, como cantidad de

&#x20;usuarios, coaches y clases registradas. También se incorpora una tabla para la gestión de usuarios y una sección de reportes 

con indicadores relevantes para administración 



<div class="stat-number" id="totalUsuarios">0</div>



###### \*\*Configuracion y administracion de clases\*\*



Finalmente, se incluye una sección de configuración rápida con acciones administrativas y estación destinada a la gestión

de clases deportivas. Estas áreas permiten centralizar la administración del sistema y facilitan futuras ampliaciones del proyecto 



En resumen, esta pagina proporciona una interfaz organizada para que el administrador pueda supervisar usuarios, visualizar reportes, 

gestionar clases y controlar el funcionamiento general de SportClub.





###### **\*\*Página Dashboard Coach (dashboard-coach.html)\*\***





###### **\*\*Estructura principal y panel de control\*\***







Este archivo corresponde a la interfaz del Dashboard del Coach. Su estructura está compuesta por un encabezado, un menú de

&#x20;navegación lateral y un área principal donde se muestra la información relacionada con el entrenador. Además, incorpora un panel 

de control con estadísticas generales como la cantidad de alumnos, clases activas y horas semanales de entrenamiento.



<div class="stat-number" id="totalAlumnos">0</div>



La navegación permite acceder rápidamente a las distintas secciones disponibles dentro del dashboard.



###### **\*\*Gestión de alumnos, clases y horario\*\***



El dashboard incluye una tabla para visualizar los alumnos asignados al coach, mostrando información como nombre, correo, clase y estado.

&#x20;También incorpora una sección con las clases impartidas por el entrenador y una tabla de horarios semanales con el detalle de los

&#x20;entrenamientos programados.



En resumen, esta página permite al coach administrar sus alumnos, visualizar las clases que imparte y consultar los horarios de entrenamiento 

desde una interfaz organizada y fácil de utilizar.



###### **\*\*Página Dashboard usuario (dashboard-usuario.html)\*\***



###### **Estructura principal y navegación**



Este archivo corresponde a la interfaz del Dashboard del Usuario. Su estructura está compuesta por un encabezado, un menú de navegación

lateral y un área principal de contenido. Desde el menú, el usuario puede acceder a las secciones de inicio, reservas, clases disponibles

y perfil personal.



Además, se incluye una sección de bienvenida personalizada donde se muestra el nombre del usuario y un mensaje motivacional.



###### **Reservas, clases y perfil personal**



El dashboard permite visualizar las reservas realizadas por el usuario mediante una tabla que muestra la información de cada entrenamiento.

También incorpora una sección de clases disponibles, donde se presentan las distintas actividades deportivas que pueden ser reservadas.

Asimismo, se incluye un perfil rápido que muestra información personal como nombre, correo electrónico, deporte favorito y fecha de registro.



En resumen, esta página permite al usuario gestionar sus reservas, conocer las actividades disponibles y consultar su información personal 

desde una interfaz organizada y fácil de utilizar.



###### **Página Login (login.html)**





###### **Estructura principal del formulario**



Este archivo corresponde a la página de inicio de sesión del sistema SportClub. Su función principal es permitir que los usuarios

ingresen a la plataforma mediante su correo electrónico y contraseña. Además, se vinculan los archivos CSS necesarios para aplicar los

estilos generales y específicos de los formularios.

La estructura central está formada por un formulario que solicita las credenciales del usuario.

###### 

###### **Inicio de sesión y accesos rápidos**



El formulario contiene los campos para ingresar el correo electrónico y la contraseña, junto con un botón para acceder al sistema. 

También incluye enlaces para recuperar la contraseña o crear una nueva cuenta.

Adicionalmente, se agregan accesos rápidos para ingresar directamente a los paneles de Coach y Administrador durante las pruebas del sistema.



La página incorpora un enlace para regresar al inicio del sitio y conecta el archivo forms.js, encargado de validar los datos ingresados

&#x20;por el usuario antes de permitir el acceso.



En resumen, esta página permite autenticar usuarios dentro de SportClub, ofreciendo acceso al sistema, recuperación de contraseña,

&#x20;creación de cuentas y validación de datos mediante JavaScript.



###### **Página Recuperar Contraseña (recuperar-contrasena.html)**

###### **Estructura y objetivo del formulario**



Este archivo corresponde a la página de recuperación de contraseña de SportClub. Su principal función es permitir que los usuarios 

soliciten la recuperación de su cuenta mediante el ingreso de un correo electrónico válido. Además, se vinculan los archivos CSS 

encargados de los estilos generales y específicos de los formularios.

La interfaz presenta un formulario simple y fácil de utilizar para el proceso de recuperación.



###### **Ingreso del correo y recuperación de contraseña**



El formulario solicita al usuario ingresar su correo electrónico, el cual será utilizado para enviar un enlace de recuperación 

de contraseña. También se incluyen espacios destinados a mostrar mensajes de error o confirmación.

Al enviar el formulario, se ejecutan las validaciones correspondientes mediante JavaScript.



###### **Navegación y validación**



La página incorpora enlaces para regresar al inicio de sesión o volver a la página principal del sitio. Además, utiliza el archivo

forms.js, encargado de validar el correo ingresado y mostrar los mensajes correspondientes al usuario.



En resumen, esta página permite a los usuarios recuperar el acceso a su cuenta mediante el envío de un enlace de recuperación

al correo electrónico registrado, incorporando validaciones y una navegación sencilla dentro de la plataforma SportClub.



###### **Página Recuperar Contraseña (recuperar-contrasena.html)**



Este archivo corresponde a la pagina de recuperación de contraseña. Su principal función es permitir que los usuarios soliciten

&#x20;la recuperación de su cuenta mediante el ingreso de un correo electrónico valida. Además, se vinculan los archivos CSS encargados

&#x20;de los estilos generales y específicos de los formularios.



La interfaz presenta un formulario simple y fácil de utilizar para el proceso de recuperación.



###### **Ingreso del correo y recuperación de contraseña**



El formulario solicita al usuario ingresar su correo, el cual será utilizado para enviar un enlace de recuperación de contraseña.

&#x20;También se incluyen espacios destinados a mostrar mensajes de error o confirmación. 

Al enviar el formulario, se ejecuta las validaciones correspondientes mediante JavaScript.

###### 

###### **Navegación y validación** 



La pagina incorpora enlaces para regresar al inicio de sesión o volver a la pagina principal del sitio. Además, utiliza el archivo 

forms.js, encargado de validar el correo ingresado y mostrar los mensajes correspondientes al usuario. 



En resumen esta pagina permite a los usuarios recuperar el acceso a su cuenta mediante el envió de un enlace al correo electrónico

&#x20;que este registrado. Incorporando validaciones y una navegación sencilla en la plataforma.





##### **1. Estructura General del Proyecto**

##### **SPORTCLUB**

│

├── index.html

│

├── css

│   ├── styles.css

│   ├── landing.css

│   ├── dashboard.css

│   └── forms.css

│

├── js

│   ├── dashboard-admin.js

│   ├── dashboard-coach.js

│   ├── dashboard-usuario.js

│   └── forms.js

│

└── pages

&#x20;   ├── login.html

&#x20;   ├── registro.html

&#x20;   ├── recuperar-contrasena.html

&#x20;   ├── dashboard-admin.html

&#x20;   ├── dashboard-coach.html

&#x20;   └── dashboard-usuario.html



###### **2. Módulo Landing Page (index.html)**



###### **Secciones principales**



index.html

│

├── Header

│   ├── Logo

│   └── Menú de navegación

│

├── Hero

│   ├── Título principal

│   ├── Descripción

│   └── Botón de registro

│

├── Beneficios

│   └── Tarjetas informativas

│

├── Planes

│   └── Plan Básico, Premium y Elite

│

├── Sobre el Club

│   └── Historia, misión y visión

│

└── Footer

&#x20;   ├── Redes sociales

&#x20;   ├── Contacto

&#x20;   └── Ubicación









###### **3.- Tecnologias utilizadas** 



\- HTML5

\- CSS3

\- JavaScript

\- Flexbox

\- CSS Grid

\- Media Queries





###### Conclusión :





El proyecto permitió desarrollar una aplicación web Front-End utilizando HTML, CSS3, JavaScript, integrando una landing

page, formularios y dashboards para distintos tipos de usuarios. Durante su desarrollo se aplicaron conceptos de diseño web,

validación  de formularios, diseño responsivo y organización modular del código.

En conjunto, el sistema cumple con los objetivos propuestos, ofreciendo una plataforma funcional, organizada y adaptada 

a distintos dispositivos.











