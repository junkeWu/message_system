package routers

import (
	"github.com/gin-gonic/gin"
	"message_system/backend/internals/routers/api/v1"
	"message_system/backend/pkg/util/middlewares"
)

// ApiV1 接口v1版本路由
func ApiV1(engine *gin.Engine) {

	g := engine.Group("/api/v1/admin").Use(middlewares.Cors())
	//g := engine.Group("/api/v1/admin")
	{
		// grom 模型操作示例
		g.POST("/message", v1.MessageAdd)
		g.GET("/messages", v1.MessagesQuery)
		// g.GET("/demo/gorm/user/:userId", demo.UserDetail)
		// g.DELETE("/demo/gorm/user/:userId", demo.UserDel)
		// g.PUT("/demo/gorm/user/:userId", demo.UserUpdate)
	}
}