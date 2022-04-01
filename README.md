# Omniscient Oak FEC
##### Contributors: Eric Lie, Michael Wu, Yulan Rong

This is a Front End Capstone created as part of the Hack Reactor SFO-139 cohort.

Students were challenged to implement the store page an e-commerce website according to a provided requirements document.

## Deployment
This repo is best run using Docker, as it requires using a Redis Cache.

### Development Mode
Development is the default mode.

While running in development mode, Webpack will run in --watch mode and the server will run using nodemon. Redis will also be accessable on the host via port 6379, and the server will be exposed on port 3000.

The repo folder will be mounted as a volume on the Docker website container, so any changes made to the server or app will be reflected in the

#### To launch in development mode:

Navigate to the FEC-CATWALK directory, then build the image using:
```
docker-compose build
```
Then, launch the containers:
```
docker-compose up
```

### Production Mode
While running in Production Mode, Webpack wil run in production mode. Redis will be inaccessable from outside of the host, and the server will be exposed on port 80.


#### To launch in development mode:

Navigate to the FEC-CATWALK directory, then build the image using:
```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
```
Then, launch the containers:
```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```
Alternatively, run Docker in detached mode with -d.
