from node:18.7-slim

COPY frontend/package.json package.json

RUN npm install -g npm
RUN rm -rf node_modules package-lock.json && npm install --force
RUN npx create-react-app app --templete typescript	
WORKDIR /app

env NODE_OPTIONS=--openssl-legacy-provider
env PORT=3000
