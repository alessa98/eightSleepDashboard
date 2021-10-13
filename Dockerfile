FROM node:12

WORKDIR /usr/src/app

COPY build build
COPY package.json ./
COPY public public
COPY server server
COPY src src

RUN npm install
RUN npm run build

EXPOSE 3100

CMD [ "node", "server/index.js" ]