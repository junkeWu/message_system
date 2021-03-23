package v1

import (
	"github.com/gin-gonic/gin"
	"message_system/backend/pkg/database/gormsql"
	"message_system/backend/pkg/model"
	"message_system/backend/pkg/util"
	"net/http"
	"strconv"
)


// Query 分页查询数据
//
// curl -X GET "http://localhost:8080/api/v1/admin/user?page=1&pageSize=2"
// {"code":"200","message":"success","data":{"totalCount":3,"totalPageCount":1,"page":1,"pageSize":2,"lists":[{"id":1,"user":"test","pass":"123456"},{"id":2,"user":"test","pass":"123456"}]}}
func UserQuery(c *gin.Context) {
	var users []*model.User
	count :=0
	page, _ := strconv.Atoi(c.Query("page"))
	pageSize, _ := strconv.Atoi(c.Query("pageSize"))
	offset := (page-1)*pageSize
	gormsql.DB.Model(&model.User{}).Where("id > 0 ").Count(&count)
	gormsql.DB.Offset(offset).Limit(pageSize).Find(&users)
	c.JSON(http.StatusOK, util.NewApiJsonResult("200", "success").Paging(users, count, page, pageSize))
}

// Add gorm新增操作
//
// curl -X POST "http://localhost:8080/api/v1/admin/message" -d "name=testName&title=testTitle&content=hello&create_time=2021-03-22 11:02:38";
//{"code":"200","message":"success","data":{"id":10,"name":"testName","title":"testTitle","content":"hello","create_time":"0001-01-01T00:00:00Z"}}
func UserAdd(c *gin.Context) {
	var user model.User
	c.ShouldBind(&user)
	// 保存数据到数据库
	gormsql.DB.Create(&user)
	c.JSON(http.StatusOK, util.NewApiJsonResult("200", "success").Simple(user))
}

// UserDel删除记录
//
// curl -X DELETE "http://localhost:8080/api/v1/admin/message/1"
// {"code":"200","message":"success","data":1}%
func UserDel(c *gin.Context) {
	var user model.User
	id := c.Param("id")
	gormsql.DB.Where("id = ?", id).First(&user)
	if user.ID < 1{
		c.JSON(http.StatusOK, util.NewApiJsonResult("404", "not found").Simple(nil))
		return
	}
	user.ID, _ = strconv.Atoi(id)
	isDel := gormsql.DB.Delete(user).RowsAffected
	if isDel < 1 {
		c.JSON(http.StatusOK, util.NewApiJsonResult("200", "fail").Simple(isDel))
	}
	c.JSON(http.StatusOK, util.NewApiJsonResult("200", "success").Simple(isDel))
}

// UserUpdate 更新记录
//
// curl -X PUT "http://localhost:8080/api/v1/admin/message/1" -d "name=testName&title=testTitle&content=hello&create_time=2021-03-22 11:02:38"
// {"code":"200","message":"success","data":{"id":10,"name":"testName","title":"testTitle","content":"hello","create_time":"0001-01-01T00:00:00Z"}}
func UserUpdate(c *gin.Context) {
	var user, updateUser model.User
	id := c.Param("id")
	gormsql.DB.Where("id = ?", id).First(&user)
	if user.ID < 1{
		c.JSON(http.StatusOK, util.NewApiJsonResult("404", "not found").Simple(user))
		return
	}
	c.ShouldBind(&updateUser)
	gormsql.DB.Model(&user).Update(updateUser)
	c.JSON(http.StatusOK, util.NewApiJsonResult("200", "success").Simple(user))
}

//  gormc查询单挑记录
//
// curl -X GET "http://localhost:8080/api/v1/admin/message/1"
// {"code":"200","message":"success","data":{"id":10,"name":"testName","title":"testTitle","content":"hello","create_time":"0001-01-01T00:00:00Z"}}
func UserDetail(c *gin.Context) {
	var user model.User
	id := c.Param("username")
	gormsql.DB.Where("username = ?", id).First(&user)
	c.JSON(http.StatusOK, util.NewApiJsonResult("200", "success").Simple(user))
}