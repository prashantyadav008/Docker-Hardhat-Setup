# Docker Image of Basic Hardhat-Setup

To set up your Hardhat environment, clone the Hardhat setup repository. You can either create your own Hardhat setup from scratch or clone it from my ["Hardhat-Setup"](https://github.com/prashantyadav008/Hardhat-Setup) repository. Navigate to the project directory:

    cd Hardhat-Setup

Install the required packages and follow the Hardhat tutorial for setup. This includes configuring the Hardhat file, creating environment variables, and running test cases.

    npm i --save

    npx hardhat test

After successfully running the test cases, create a Dockerfile and a .dockerignore file.

    touch Dockerfile .dockerignore

Add the necessary Dockerfile scripting and add Ignore file name into .dockerignore file (i already addres).

Next, build your project. You can give any name to your project ("<project_name>"). I'll use "hardhat-setup" as an example. The following command creates a Docker image on your system with the specified tag and path (-t stands for tag) and (. is for you file path):

    docker build -t hardhat-setup .

Or, If you want To share your Docker image, you can push it to your Docker Hub. Create an account on [Docker Hub](https://hub.docker.com/) if you don't have one, and replace <your_docker_hub_username> with your username:

    docker build -t <your_docker_hub_username>/hardhat-setup .

    docker push <your_docker_hub_username>/hardhat-setup:latest

After this process, open the terminal and run the Registry Container Code command. The "-it" flag stands for interaction(interact docker image using you system docker container): With Passing Enviorment Parameters, I only use my Private Key for run Testcase

    docker run -it -e PRIVATE_KEY=<your_private_key> hardhat-setup

or If you want to deploy your Smart contract you can also pass Enviorment Parameters like that

    docker run -it -e POLYGONSCAN_API_KEY=<your_polygonscan_api_key> -e ALCHEMY_POLYGON_API_KEY=<your_alchemy_private_key> -e PRIVATE_KEY=<your_private_key> hardhat-setup

--

### For Node Server

Whenever you need to use the Node setup of ther Docker image, run the following command. The "-p" flag specifies the port mapping. Adjust the port numbers according to your requirements(I use 3000 port for my local system and 8000 is for my docker image):

    docker run -it -p 3000:8000 hardhat-setup

You can also include <your_docker_hub_username> before the project/docker image name:

    docker run -it -p 3000:8000 <your_docker_hub_username>/hardhat-setup

**Note: Check your folder placement, which should be in your home or desktop folder, not in an inaccessible folder like VAR/WWW/HTML or others. If it's not working, use this project setup in your public folder like the download or document folder.**

---

## Here Some Basic Docker Commands that helps you to reach Container Informations, Image Information Pull Images etc

### Docker Container/Image Create and Remove Commands

I used Node as a <Package_Name/Docker_image>. Visit [Search Docker Hub](https://hub.docker.com/search) and use <Package_Name/Docker_image> as per your reference.

Pull Docker Image into Our System Container

    docker pull node

Pull Docker Image and Run

    docker run -it node

Run Docker Image with Enviroment Parameter(.env)

    docker run -it -e ENV_PARAMETER=<your_env_parameter_value> <docker_image_name>

Check Docker Container Detail like (CONTAINER_ID,IMAGE, COMMAND, CREATED, STATUS, PORTS, and NAMES)

    docker ps -a

Check Docker Images Detail like (REPOSITORY, TAG, IMAGE, ID, CREATED, SIZE)

    docker image ls

or

    docker images

Start Container

    docker start <CONTAINER_ID>

or, with multiple container ids

    docker start <container_id> <container_id> <container_id>

Stop Container

    docker stop <CONTAINER_ID>

or, with multiple container ids

    docker stop <container_id> <container_id> <container_id>

Use a container by container ID or container name. You can only use a starting containers; first, start your container and then run this command:

    docker attach <CONTAINER_ID>

Stop Docker containers and delete containers and images. First, stop the container ID of the Docker image, and then delete the images:

    docker ps -a

    docker stop <CONTAINER_ID>

    docker container rm <CONTAINER_ID>

    docker images

    docker rmi <IMAGE_ID>

---

#### Some Basic Docker Commands for Delete

Remove the container using this command,

    docker rm <container_id>

or, for multiple container delete

    docker rm <container_id> <container_id> <container_id>

Finally, remove the image using the command,

    docker rmi <image_id>

or, for multiple image delete

    docker rmi <image_id> <image_id> <image_id>

or,

    docker image rm <image_id>

or, also used force image delete command

    docker rmi <image_id> --force

--

### Facing Error

If you encounter the error "ERROR: Get https://registry-1.docker.io/v2/: net/http: TLS handshake timeout in Docker," run these commands:

sudo mkdir -p /etc/systemd/system/docker.service.d

sudo vi /etc/systemd/system/docker.service.d/http-proxy.conf

sudo systemctl daemon-reload

sudo systemctl restart docker
