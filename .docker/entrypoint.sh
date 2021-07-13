#!/bin/bash

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

npm i
npm run typeorm migration:ru
npm run start:dev