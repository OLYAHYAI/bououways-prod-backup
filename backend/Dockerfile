FROM node:18-alpine

RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

ENV NODE_ENV=production

WORKDIR /opt/

COPY package.json ./

RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install

# Installez le driver PostgreSQL
RUN npm install pg --save

ENV PATH=/opt/node_modules/.bin:$PATH

WORKDIR /opt/app

COPY . .

RUN mkdir -p public/uploads data .tmp

# Build Strapi pour la production
RUN npm run build

RUN chown -R node:node /opt/app /opt/node_modules

USER node

EXPOSE 1337

CMD ["npm", "run", "start"]
