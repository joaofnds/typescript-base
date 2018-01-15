FROM node:9 as build

# Install dependencies
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Build project
COPY . .
RUN npm run build

# Create 'production' image with bundled code
FROM node:9
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/out/index.js /usr/src/app/package*.json ./
RUN npm install --production
ENTRYPOINT [ "node", "index" ]
