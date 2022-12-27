# stage1 to build
FROM node:16-alpine as build
WORKDIR /build
COPY . .
RUN npm ci --verbose
RUN npm run build

# stage2 to deploy
FROM nginx:1.23.0-alpine
LABEL com.TheSpiritMan.image.authors="TheSpiritMan"
COPY --from=build /build/.next /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT [ "nginx","-g","daemon off;"]