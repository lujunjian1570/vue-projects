#!/usr/bin/env bash
image_version=$(date +%Y%m%d%H%M)
# 关闭test_vue容器
docker stop vue-projects || true
# 删除test_vue容器
docker rm vue-projects || true
# 删除test/admin镜像
# docker rmi --force $(docker images | grep vue-projects | awk '{print $3}')
# 构建test/admin:$image_version镜像
docker build . -t vue-projects:"$image_version"
docker run -p 80:80 -d --name vue-projects vue-projects:$image_version
# docker logs test_vue
