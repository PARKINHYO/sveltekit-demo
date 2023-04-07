FROM node:18.15-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
RUN chown -R node:node /app
USER node
CMD ["node", "-r", "dotenv/config", "build"]