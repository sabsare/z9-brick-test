FROM node:14
WORKDIR /app
# У этого приложения нет зависимостей, но я мог бы написать его например при помощи враппера 'express'
COPY package*.json ./ 
RUN npm install        
COPY . .
EXPOSE 8000
ENV AUTHOR="sabsare"
CMD ["node", "server.js"]
