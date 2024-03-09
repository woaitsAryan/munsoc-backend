FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i -g pnpm

RUN pnpm install

COPY . .

RUN pnpm run build

CMD ["pnpm", "run", "start"]

EXPOSE 8010