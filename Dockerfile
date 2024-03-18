# Usa una imagen de Node.js como base
FROM node:16.18.0

#Crea las carpetas
RUN mkdir -p /usr/src/app

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Instala las dependencias
COPY package*.json ./

# Copia los archivos del proyecto al directorio de trabajo
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto en el que la aplicación se ejecutará dentro del contenedor
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]