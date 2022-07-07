FROM node:13

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# open port 3000 which we define in index.js
EXPOSE 3000

# comand for start server
CMD ["node", "run start"]