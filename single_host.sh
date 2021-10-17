# build web app
cd ./app
npm install
npm run build

cd ../
# build nestjs
npm install
npm run build
cp -r ./app/build ./dist/app

sudo docker-compose up -d --build