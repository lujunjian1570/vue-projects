# resum Dockerfile

#指定node镜像对项目进行依赖安装和打包
FROM node:latest
# 将容器的工作目录设置为/app(当前目录，如果/app不存在，WORKDIR会创建/app文件夹)
WORKDIR /app
COPY package.json /app/
RUN yarn install

COPY . /app
RUN yarn build:prod test

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

#暴露容器80端口
EXPOSE 80
