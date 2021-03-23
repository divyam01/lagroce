FROM node
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN node_modules/.bin/ng build --prod
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
