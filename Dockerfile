FROM node:20-alpine

WORKDIR /app/portfolio

RUN npm install npm@latest -g

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
