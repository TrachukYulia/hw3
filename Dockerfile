FROM node:10 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:10-slim
WORKDIR /app 
COPY --from=build /app .
EXPOSE 80
CMD [ "node", "app.js" ]
