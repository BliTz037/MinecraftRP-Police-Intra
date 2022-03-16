#!/bin/bash

ENV_BACK=.env
ENV_DB=.envDB

if [ ! -f "$ENV_BACK" ]
then
    echo -e "$ENV_BACK is missing !\nCreation by default of $ENV_BACK\nDon't forget to change these variables !\n"
    echo -e "DB_NAME=police\nDB_USER=admin\nDB_PASSWORD=123456\nDB_HOST=postgres\nDB_DRIVER=postgres\nJSON_WEB_TOKEN=token" > $ENV_BACK
fi

if [ ! -f "$ENV_DB" ]
then
    echo -e "$ENV_DB is missing !\nCreation by default of $ENV_DB\nDon't forget to change these variables !\n"
    echo -e "POSTGRES_USER=postgres\nPOSTGRES_PASSWORD=123456\nPOSTGRES_DB=police" > $ENV_DB
fi

docker-compose --env-file .env up