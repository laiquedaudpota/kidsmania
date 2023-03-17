# FROM node:8.12
# FROM node:16.13.0
# FROM node:16.13.0-slim
FROM node:16.13.0-alpine

WORKDIR /app

COPY package.json /app

ENV NODE_ENV=production

COPY . /app

VOLUME ["/app/logs"]

CMD ["node", "/app/app.js"]

EXPOSE 8080