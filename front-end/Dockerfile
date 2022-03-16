FROM node:17-alpine

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN yarn install

EXPOSE 3000

CMD yarn start
