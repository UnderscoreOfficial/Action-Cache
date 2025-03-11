# Action Cache
This is an app I made to keep track of commands & shortcuts and have a visual indicator of where shortcuts are on my keyboard. As more time then not id either map shortcuts to custom 
keys on my keyboard or on another layer entirely this with introducing new software that added even more shortcuts to remember ment id tend to only use a small select few 
and missout on using others that were usefull to my workflow. The combination of logging the keybinds with the visual representaion of where and in what order they are pressed makes
learning and rememebering new shortcuts much more manageable. 

This was built with [Next.js](https://github.com/vercel/next.js/), [CSS Modules](https://github.com/css-modules/css-modules), [Tailwind](https://github.com/tailwindlabs/tailwindcss), [Mantine UI](https://github.com/mantinedev/mantine), [Typescript](https://github.com/microsoft/TypeScript), [Zod](https://github.com/colinhacks/zod), [Prisma](https://github.com/prisma/prisma), [Zustand](https://github.com/pmndrs/zustand)

## Docker
- Build
    1. `git clone https://github.com/UnderscoreOfficial/Action-Cache.git`
    2. `docker build -t action-cache:1.3 .`
- Load
    1. Download the [latest release](https://github.com/UnderscoreOfficial/Action-Cache/releases)
    2. `docker load -i <release_name.tar>`

## Docker Compose
- docker compose example:
```
services:
  action-cache:
    image: action-cache:1.3
    container_name: action-cache
    environment:
      - DATABASE_URL=your_database_here
    ports:
      - 4444:3000 # left port number can be changed 
    restart: always
```
- compose file should be .yaml can be named anything.
-`docker compose -f <file_name.yaml> up -d`
