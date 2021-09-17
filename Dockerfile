FROM klakegg/hugo AS website-build

WORKDIR /app

COPY ./src/frontend .
RUN hugo 

FROM node:latest AS server-build
ENV NODE_ENV=production

WORKDIR /app

COPY package.json .
RUN npm install 

COPY . .
RUN rm -rf src/frontend
COPY --from=website-build /app/public ./src/frontend/public

CMD ["npm","start"]