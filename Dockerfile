FROM nginx
COPY dist/ /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/nginx.conf