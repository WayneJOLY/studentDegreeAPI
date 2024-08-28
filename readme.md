# Documentación de la API de Estudiantes y Grados
=================================================
### ➡️  Introducción
La API de Estudiantes y Grados permite gestionar la relación entre estudiantes y sus respectivos grados académicos. Proporciona endpoints para crear, leer, actualizar y eliminar información sobre estudiantes y grados.

### 🔑 Autenticación
Esta API no requiere autenticación para acceder a los endpoints. Sin embargo, se recomienda implementar un sistema de autenticación en producción para proteger los datos.

### 🔗 Endpoints


### Tablas que podrá ver en <link>https://dbdiagram.io/d

|Table degrees{
  * id serial [PK]
  * name varchar
  * semestres_num integer
}|


Table students{
  * id serial [PK]
  * firstname varchar
  * lastname  varchar
  * degree_id integer [ref:> degrees.id ]
}

|| [](./src/img/Database%20digram%20img.png)||
> imagen de la base de datos 
#### Obtener todos los estudiantes
- URL: /api/v1/students
- Método: **GET**
- Descripción: Recupera una lista de todos los estudiantes.

<font color="blue">## Ejemplo de respuesta:</font>


[
   + {
        "id": 1,
        "firsntname": "Juan",
		"lastname":" Pérez",
        "gradoId": 1
    },
    + {
        "id": 2,
		"firsntname": "¿Ana ",
		"lastname":" Gómez",
        "gradoId": 2
    }
]


### Crear un nuevo estudiante
URL: /api/v1/students
Método: **POST**
Descripción: Crea un nuevo estudiante.
Cuerpo de la solicitud:

{
    "nombre": "María López",
    "gradoId": 1
}

Ejemplo de respuesta:

{
    "id": 3,
    "nombre": "María López",
    "gradoId": 1
}

### Actualizar un estudiante
URL: /api/v1/students:id
Método: PUT
Descripción: Actualiza la información de un estudiante existente.

Cuerpo de la solicitud:
{
    "nombre": "María López Actualizada",
    "gradoId": 2
}


### Eliminar un estudiante
URL: /api/v1/students:id
Método: DELETE
Descripción: Elimina un estudiante de la base de datos.
Ejemplo de respuesta:
json
{
    "message": "Estudiante eliminado con éxito."
}


2. Grados
Obtener todos los grados
URL: /api/v1/degrees
Método: **GET**
Descripción: Recupera una lista de todos los grados académicos.
Ejemplo de respuesta:
json
[
    {
        "id": 1,
        "nombre": "Primero de Secundaria"
    },
    {
        "id": 2,
        "nombre": "Segundo de Secundaria"
    }
]

### Crear un nuevo grado
URL: /api/v1/degrees
Método: POST
Descripción: Crea un nuevo grado académico.
Cuerpo de la solicitud:
json
{
    "nombre": "Tercero de Secundaria"
}

Ejemplo de respuesta:
json
{
    "id": 3,
    "nombre": "Tercero de Secundaria"
}

### Actualizar un grado
URL: /api/v1/degrees/:id
Método: **PUT**
Descripción: Actualiza la información de un grado académico existente.
Cuerpo de la solicitud:
json
{
    "nombre": "Tercero de Secundaria Actualizado"
}

Ejemplo de respuesta:
json
{
    "id": 3,
    "nombre": "Tercero de Secundaria Actualizado"
}

### Eliminar un grado
URL: /api/v1/degrees:id
Método: **DELETE**
Descripción: Elimina un grado académico de la base de datos.





## Parámetros
id: Identificador único del estudiante o grado (número entero).
nombre: Nombre del estudiante o grado (cadena de texto).
gradoId: Identificador del grado al que pertenece el estudiante (número entero).

## Códigos de estado

- 200 OK: Solicitud exitosa.
- 201 Created: Recurso creado con éxito.
- 204 No Content: Recurso eliminado con éxito.
- 400 Bad Request: Solicitud mal formada.
- 404 Not Found: Recurso no encontrado.
- 500 Internal Server Error: Error en el servidor.



##Limitaciones y restricciones
La API no implementa límites de tasa, pero se recomienda no realizar más de 100 solicitudes por minuto para evitar problemas de rendimiento.
Los grados deben existir antes de asignar un estudiante a ellos.

##Versionado
La API está actualmente en la versión 1.0. Se recomienda especificar la versión en la URL si se implementan cambios significativos en el futuro (por ejemplo, /api/v1/estudiantes).
Recursos adicionales
Documentación de Express
Documentación de Sequelize
Postman para probar la API.