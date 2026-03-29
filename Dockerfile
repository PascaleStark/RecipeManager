FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY dist/ /usr/share/nginx/html/dist/
COPY src/img/ /usr/share/nginx/html/img/
COPY Recipes-pics/ /usr/share/nginx/html/Recipes-pics/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
