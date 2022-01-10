#not sure about this

#build
FROM node:15.13-alpine
WORKDIR /FEC
ENV PATH ./node_modules/.bin:$PATH
COPY . .
RUN npm install
EXPOSE 3000
CMD ["concurrently", "npm:build", "npm:run-server"]