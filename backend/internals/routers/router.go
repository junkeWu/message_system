package routers

import "github.com/gin-gonic/gin"



// InitRouter 初始化路由
func InitRouter(engine *gin.Engine) *gin.Engine {
	// api 接口路由配置
	ApiV1(engine)
	return engine
}
