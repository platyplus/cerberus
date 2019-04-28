FROM node:11-alpine
# RUN apk add --update python py-pip && pip install csvkit
RUN apk add --virtual --update gnumeric ttf-freefont

WORKDIR /server
# TODO: multistage docker with only the ./dist files in the docker target
COPY . /server
RUN npm install
RUN npm run generate
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]