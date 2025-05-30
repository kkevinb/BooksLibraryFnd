FROM node:18-alpine3.18 as build
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY ./ .
RUN npm install
RUN npm run build

# stage 2
FROM nginx:alpine
COPY --from=build /opt/app/dist/books-library-fnd/browser /usr/share/nginx/html
CMD exec nginx -g 'daemon off;'