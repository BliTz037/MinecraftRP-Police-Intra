$checkEnv = Test-Path .env
$checkEnvDB = Test-Path .envDB

if (!$checkEnv) {
    Write-Warning ".env is missing !`nCreation by default of .env`nDon't forget to change these variables !`n"
    "DB_NAME=police`nDB_USER=admin`nDB_PASSWORD=123456`nDB_HOST=postgres`nDB_DRIVER=postgres`nJSON_WEB_TOKEN=token" | Out-File ".env" -encoding utf8
}
if (!$checkEnvDB) {
    Write-Warning ".envDB is missing !`nCreation by default of .envDB`nDon't forget to change these variables !`n"
    "POSTGRES_USER=postgres`nPOSTGRES_PASSWORD=123456`nPOSTGRES_DB=police" | Out-File ".envDB" -encoding utf8
}

docker-compose --env-file .env up