FROM node:20
WORKDIR /usr/src/app

ARG PORT=3001
ENV PORT=${PORT}

COPY package*.json ./

COPY . .

RUN npm ci 

RUN npm run build

EXPOSE $PORT

CMD [ "npm", "start" ]
