FROM node:20.17-alpine

RUN npm install -g npm@latest

WORKDIR /app-front
COPY ./package.json .

RUN npm install
RUN npm install -g create-react-app
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
