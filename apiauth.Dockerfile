FROM node:16
WORKDIR /usr/app/auth
COPY ./src/package.json ./
RUN npm install
COPY ./auth ./
EXPOSE 3000
CMD ["node", "index.js"]
