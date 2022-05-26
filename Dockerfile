FROM node:alpine as build

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

RUN yarn run build

FROM nginx:stable-alpine
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html