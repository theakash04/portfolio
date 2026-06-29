#!/usr/bin/env bash

set -Eeuo pipefail

BRANCH=$(git rev-parse --abbrev-ref HEAD)

git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

docker compose up -d --build --remove-orphans

docker image prune -f
echo "Build Successfully"
