package v1

import (
	"github.com/gin-gonic/gin"
	"message_system/backend/pkg/database/gormsql"
	"message_system/backend/pkg/model"
	"message_system/backend/pkg/util"
	"net/http"
	"strconv"
)


// MessageQuery 分页查询数据
//
// curl -X GET "http://localhost:8080/api/v1/admin/messages?page=1&pageSize=2"
// {"code":"200","message":"success","data":{"totalCount":3,"totalPageCount":1,"page":1,"pageSize":2,"lists":[{"id":1,"user":"test","pass":"123456"},{"id":2,"user":"test","pass":"123456"}]}}
func MessagesQuery(c *gin.Context) {
	var messages []*model.Message
	count :=0
	page, _ := strconv.Atoi(c.Query("page"))
	pageSize, _ := strconv.Atoi(c.Query("pageSize"))
	offset := (page-1)*pageSize
	gormsql.DB.Model(&model.Message{}).Where("id > 0 ").Count(&count)
	//gormsql.DB.Where("id > 0").Order("id DESC").Offset(offset).Limit(pageSize).Find(&messages)
	gormsql.DB.Offset(offset).Limit(pageSize).Find(&messages)
	c.JSON(http.StatusOK, util.NewApiJsonResult("200", "success").Paging(messages, count, page, pageSize))
}

// Add gorm新增操作
//
// curl -X POST "http://localhost:8080/api/v1/admin/message" -d "name=testName&title=testTitle&content=hello&create_time=2021-03-22 11:02:38";
//{"code":"200","message":"success","data":{"id":10,"name":"testName","title":"testTitle","content":"hello","create_time":"0001-01-01T00:00:00Z"}}
func MessageAdd(c *gin.Context) {
	var message model.Message
	c.ShouldBind(&message)
	// 保存数据到数据库
	gormsql.DB.Create(&message)
	c.JSON(http.StatusOK, util.NewApiJsonResult("200", "success").Simple(message))
}

// UserDel删除记录
//
// curl -X DELETE "http://localhost:8080/api/v1/admin/message/1"
// {"code":"200","message":"success","data":1}%
func MessageDel(c *gin.Context) {
	var message model.Message
	id := c.Param("id")
	gormsql.DB.Where("id = ?", id).First(&message)
	if message.ID < 1{
		c.JSON(http.StatusOK, util.NewApiJsonResult("404", "not found").Simple(nil))
		return
	}
	message.ID, _ = strconv.Atoi(id)
	isDel := gormsql.DB.Delete(message).RowsAffected
	if isDel < 1 {
		c.JSON(http.StatusOK, util.NewApiJsonResult("200", "fail").Simple(isDel))
	}
	c.JSON(http.StatusOK, util.NewApiJsonResult("200", "success").Simple(isDel))
}

// UserUpdate 更新记录
//
// curl -X PUT "http://localhost:8080/api/v1/admin/message/1" -d "name=testName&title=testTitle&content=hello&create_time=2021-03-22 11:02:38"
// {"code":"200","message":"success","data":{"id":10,"name":"testName","title":"testTitle","content":"hello","create_time":"0001-01-01T00:00:00Z"}}
func MessageUpdate(c *gin.Context) {
	var message, updateMessage model.Message
	id := c.Param("id")
	gormsql.DB.Where("id = ?", id).First(&message)
	if message.ID < 1{
		c.JSON(http.StatusOK, util.NewApiJsonResult("404", "not found").Simple(message))
		return
	}
	c.ShouldBind(&updateMessage)
	gormsql.DB.Model(&message).Update(updateMessage)
	c.JSON(http.StatusOK, util.NewApiJsonResult("200", "success").Simple(message))
}

//  gormc查询单挑记录
//
// curl -X GET "http://localhost:8080/api/v1/admin/message/1"
// {"code":"200","message":"success","data":{"id":10,"name":"testName","title":"testTitle","content":"hello","create_time":"0001-01-01T00:00:00Z"}}
func MessageDetail(c *gin.Context) {
	var message model.Message
	id := c.Param("id")
	gormsql.DB.Where("id = ?", id).First(&message)
	c.JSON(http.StatusOK, util.NewApiJsonResult("200", "success").Simple(message))
}