FROM node:22.6.0-slim

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Added context 
ENV context ""
ENV port 3005

# install app dependencies
COPY package.json ./

RUN npm install

# add app
COPY src ./src
COPY tsconfig.json ./
# start app
CMD ["ts-node", "./src/app.ts"]
