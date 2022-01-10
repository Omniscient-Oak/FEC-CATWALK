#not sure about this

#build
FROM node:15.13-alpine
WORKDIR /FEC
ENV PATH ./node_modules/.bin:$PATH
COPY . .
RUN npm install
RUN npm run build:prod
EXPOSE 3000
CMD ["npm", "run", "server:prod"]