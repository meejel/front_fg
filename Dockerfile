FROM node:alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install -g @quasar/cli && npm install
COPY . .
RUN quasar build

FROM node:alpine
WORKDIR /app
RUN npm install -g @quasar/cli
COPY --from=build /app/dist/spa .
CMD ["quasar", "serve"]