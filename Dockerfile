FROM node:15
WORKDIR /desafio
COPY . .
EXPOSE 3000
CMD ["node","index.js"]