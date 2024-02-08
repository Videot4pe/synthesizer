FROM node:18.2.0-alpine as base

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /app

COPY package*.json /app/
RUN yarn

COPY ./ /app
RUN yarn build

EXPOSE 3000
CMD ["yarn", "preview"]

#FROM nginx:alpine as production
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=base /app/dist /usr/share/nginx/html
#EXPOSE 3000
#CMD ["nginx", "-g", "daemon off;"]
