FROM node:16
WORKDIR /usr/app/auth
COPY ./src/package.json ./
RUN npm install
COPY ./order ./
EXPOSE 3000
CMD ["node", "index.js"]
