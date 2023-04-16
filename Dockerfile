FROM node:18.15
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["node", "./server/server.ts"]