package main

import (
   "github.com/gin-contrib/zap"
   "github.com/gin-gonic/gin"
   "go.uber.org/zap"
   "net/http"
   "time"
)

func main() {
   r := gin.New()

   logger, _ := zap.NewProduction()

   //添加一个ginzap中间件，它：
   //记录所有请求，如组合的访问和错误日志。
   //记录到stdout。
   //RFC3339，UTC时间格式。
   r.Use(ginzap.Ginzap(logger, time.RFC3339, true))

   //将所有死机记录到错误日志中
   //stack表示是否输出堆栈信息。
   r.Use(ginzap.RecoveryWithZap(logger, true))
   //静态资源处理
   r.Static("/static", "./static")
   //静态页面处理
   r.LoadHTMLGlob("templates/*")
   //根路径访问登录页面
   r.GET("/", func(c *gin.Context) {
      c.HTML(http.StatusOK,"index.html",gin.H{})
   })
   // Listen and Server in 0.0.0.0:8080
   r.Run(":8080")
}
tp.StatusOK,"index.html",gin.H{})
   })
   // Listen and Server in 0.0.0.0:8080
   r.Run(":8080")
}
