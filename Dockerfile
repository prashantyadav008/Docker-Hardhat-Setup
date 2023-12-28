FROM node:latest

COPY . /

WORKDIR /

RUN npm install 

RUN cp env_example .env

CMD ["npx", "hardhat", "test"]
