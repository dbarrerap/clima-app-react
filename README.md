# Clima

**Clima** es una aplicacion web que provee la informacion climatologica de la ubicacion del usuario, actual y pronostico de los siguientes 3 dias.

La aplicacion requiere permisos de ubicacion.

## Pre-requisitos

Para la informacion de ubicacion y meteorologica, se requiere generar API KEYs para los servicios usados, [LocationIQ](https://locationiq.com/) y [OpenWeatherMap](https://openweathermap.org/). Ambos servicios tienen opciones gratuitas.

Estas llaves deben ser ingresadas en la variable `API_KEY` en los servicios correspondientes (Location.js, Weather.js) ubicados en la carpeta `services`.