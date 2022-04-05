FROM node:16-bullseye-slim AS build

ARG BUILD_ENV=dev
ENV NODE_ENV=production

WORKDIR /usr/app
COPY ./ ./

RUN /bin/bash -c "\
 source .envrc.${BUILD_ENV} \
 && env \
 && npm install \
 && npm install -g serve \
 && npm run build"

CMD ["serve", "-s", "build"]
