FROM nginx:1.21.1-alpine
COPY _site /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
RUN apk add --no-cache bash