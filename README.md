docker build -t laiq/kidsmania:3.0 .

docker load -i kidsmania_v3.tar.gz
docker save laiq/kidsmania | gzip -c > kidsmania_v3.tar.gz

docker container run --name kidsmania_v3 -e TZ=Asia/Karachi -d -p 8080:8080 laiq/kidsmania:3.0