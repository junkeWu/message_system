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
		g.GET("/message/:id", v1.MessageDetail)
		g.DELETE("/message/:id", v1.MessageDel)
		g.PUT("/message/:id", v1.MessageUpdate)

		g.POST("/user", v1.UserAdd)
		g.GET("/users", v1.UserQuery)
		g.GET("/user/:id", v1.UserDetail)
		g.DELETE("/user/:id", v1.UserDel)
		g.PUT("/user/:id", v1.UserUpdate)
	}
}