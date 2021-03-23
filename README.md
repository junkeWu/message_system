# message_system
网站留言网站

后端模块
# 开发时运行
make dev

## 使用说明
> 1. 使用了那些golang第三方库
> 2. 目录结构
> 3. 安装
> 4. 配置
> 5. 运行
> 6. 示例文件

### 1. 使用了那些第三方库
> [**框架: gin**](https://github.com/gin-gonic/gin) -> [文档](https://gin-gonic.com/zh-cn/docs/)

> [**数据库: gorm**](https://github.com/jinzhu/gorm) -> [文档](http://gorm.io/zh_CN/docs/)

> [**.env配置: godotenv**](https://github.com/joho/godotenv) -> [文档](https://github.com/joho/godotenv)

### 2. 目录结构
```
message_system          应用根目录
├─backend               后端包目录
│  internals            核心语言包目录
│  ├─routers             模型目录
│  │  ├─routers             数据库管理包目录
│  │  │  ├─api                  通用包目录
│  │  │  ├─api.router.go        接口路由配置文件
│  │  │  ├─model                通用包目录
│  │  ├─util                通用包目录
│  ├─pkg                公共库目录
│  │  ├─database              数据库管理包目录
│  │  ├─model                 结构体包目录
│  │  ├─util                  通用包目录
│  ├─frontend            后端模块资源目录
│  │  ├─public          静态目录
│  │  ├─src             资源包目录
│  │  │               
│  ├─.env               配置文件
│  ├─example.env        示例配置文件
│  ├─LICENSE.txt        授权协议文件
│  ├─Makefile         	makefile文件
│  ├─README.txt         README文件
│  └─main.go            入口文件
```

### 3. 安装
> 1. 查看GOPATH路径: go env 命令查看 GOPATH 路径
> 2. 下载: https://github.com/junkeWu/message_system.git
> 3. sql导入Postgresql数据库

```sql
DROP TABLE IF EXISTS `message`;
CREATE TABLE message(
   id serial PRIMARY key NOT NULL,
   name VARCHAR(255)  NOT NULL,
	 title VARCHAR(255) NOT NULL,
   content text       NOT NULL,
	 create_time timestamp
);

DROP TABLE IF EXISTS `user`;
CREATE TABLE user(
   id serial PRIMARY key NOT NULL,
   username VARCHAR(255)  NOT NULL,
   passowrd VARCHAR(255)  NOT NULL,
   name     VARCHAR(255)  NOT NULL,
   email    VARCHAR(255),
   avator   VARCHAR(255),
);
### 4. 配置文件
> 1. 进入目录: cd message_sysgtem
> 2. 创建配置: cp example.env .env 
> 3. 配置数据

### 5. 运行
```sh
# 运行
后端运行
先运行数据库docker 
docker-compose -f pg-docker-compose.yaml up -d
再根目录下 make dev || go run main.go

前端运行
message_system/frontend/my-react-app/src目录下  
先yarn 导入相关依赖 
再npm start 


