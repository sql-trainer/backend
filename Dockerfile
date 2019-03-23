FROM node:alpine

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install --loglevel=error

COPY .env /usr/src/app/
COPY database.json /usr/src/app/
COPY tsconfig.json /usr/src/app/

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.0/wait /wait
RUN chmod +x /wait

CMD /wait && npm run load-dev --loglevel=error