# base image
FROM hmbdevopsteam.azurecr.io/angularfrontendbase:1

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json

# should already be installed so this should go fast.
RUN npm install
RUN npm install -g @angular/cli@7.0.4

# add app
COPY . /usr/src/app

# start app
CMD ng serve --host 0.0.0.0 --disable-host-check --prod --live-reload false
