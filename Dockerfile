FROM klakegg/hugo:0.97.1-alpine AS website-build

WORKDIR /app
COPY ./src/frontend .
RUN hugo 

#########################################

FROM node:alpine AS server-build
ENV NODE_ENV=production
WORKDIR /app
COPY package.json .
RUN npm install 
COPY src src
RUN rm -rf src/frontend
COPY --from=website-build /app/public ./src/frontend/public
CMD ["npm","start"]
