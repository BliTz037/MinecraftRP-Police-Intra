Write-Host "[MinecraftRP-Police-Intra] start build docker-compose"
docker system prune
docker-compose --env-file .env up --build