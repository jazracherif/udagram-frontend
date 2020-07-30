# Use nodeJS base image
FROM node:13

# Create a working directory
WORKDIR /usr/src/app

# copy the nodeJS dependency packages
COPY package*.json ./
COPY ionic*.json ./
COPY angular*.json ./

# install the packages
RUN npm install .

# install ionic
RUN npm install -g ionic

# copy the souce code
COPY . .

# Build with ionic
RUN ionic build --prod

# bind the port that the image will use
EXPOSE 8100

# define startup behavior
CMD ["ionic", "serve", "--external"]