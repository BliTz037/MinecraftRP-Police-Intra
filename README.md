# MinecraftRP-Police-Intra

Intranet Police destiné au RP sur Minecraft, fait en Typescript & React.

## Setup

#### Build and launch docker containers

1. Installer Docker
2. Lancer le script `build-docker` de votre choix (Bash/Powershell)
3. Pour lancer les services lancer le script `start-docker` de votre choix (Bash/Powershell)

**Attention ! Pensez à bien changer les varibles env de la DB postgres et la variable `JSON_WEB_TOKEN` dans le fichier `docker-compose.yml`**

*Si vous souhaittez changer le port du back/front-end modifiez les variables `port` dans le fichier `docker-compose.yml` et relancer le script `build-docker`*

## Back-end (API R.E.S.T)
### Routes disponible
1. Auth (Système de login pour les policiers)
2. Crime (Liste des délits commis par tout les joueurs)
3. Criminal (Liste des joueurs ayant un casier judiciaire)
4. Report (Rapport de police, pouvant être lié ou non à un criminel)
5. Law (Loi mis en place)

## Front-end (React)
Work in progres...

## Credits
Made by a guy from Tek
- BliTz_37
