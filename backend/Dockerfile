# syntax=docker/dockerfile:1

FROM node:alpine

RUN apk add --no-cache g++ make python3 tzdata
ENV TZ Asia/Seoul

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000
CMD ["npm", "start"]

