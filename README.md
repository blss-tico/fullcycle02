## Desafio 02

Docker compose with nginx, node and mysql.  

### Install the project:

#### 1. clone github repository
$ git clone https://github.com/blss-tico/fullcycle02

#### 2. enter project folder
$ cd fullcycle02/

#### 3. start docker compose
$ docker compose up (attached) or $ docker compose up -d (detached)
 
#### 4. open browser for project
$ http://localhost:3000/  

### Uninstall the project:

#### 1. stop all containers
$ docker compose down

#### 2. delete all docker images
$ docker rmi blsstico/mysql_fc
$ docker rmi blsstico/nginx_fc
$ docker rmi blsstico/node_fc:4.0

##### by **blss-tico**
##### https://github.com/blss-tico
