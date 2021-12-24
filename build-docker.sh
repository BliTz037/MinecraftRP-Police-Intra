#!/bin/bash
sudo docker system prune
sudo docker-compose --env-file .env up --build