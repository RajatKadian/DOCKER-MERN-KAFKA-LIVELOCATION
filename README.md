# DOCKERIZE MERN APPLICATION WITH KAFKA

## How to use
1. Clone the repo
    `git clone https://github.com/RajatKadian/DOCKER-MERN-KAFKA-LIVELOCATION.git`

### START CONTAINER

1. Build the container
   docker-compose build

   ![image](https://github.com/RajatKadian/DOCKER-MERN-KAFKA-LIVELOCATION/assets/55406990/32ae67aa-6305-4eb9-b1f5-a20510b4eefa)


3. Start the container
   docker-compose up

   ![image](https://github.com/RajatKadian/DOCKER-MERN-KAFKA-LIVELOCATION/assets/55406990/aa6f4b4b-06b9-457b-9efb-8fc7e8a2e41c)

   ![image](https://github.com/RajatKadian/DOCKER-MERN-KAFKA-LIVELOCATION/assets/55406990/14c11a8c-cb68-4d5f-aaf6-59e4b2d8e2ad)


   




### Start Kafka

1.  Run Zookeeper on port 2181
    docker run -p 2181:2181 zookeeper

2. Run Kafka Container  (Change 10.0.0.232 to your private IP)

docker run -d -p 9092:9092 `
-e KAFKA_ZOOKEEPER_CONNECT=10.0.0.232:2181 `
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://10.0.0.232:9092 `
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 `
confluentinc/cp-kafka


3. node consumer.js user-1

4. node producer.js

   (you get a prompt enter name and location for the car rider i.e. north or south )
