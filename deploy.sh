pm2 kill
npm run build
pm2 start npm --name "next" -- run start
pm2 save