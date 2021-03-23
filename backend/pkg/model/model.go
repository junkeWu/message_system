package model

import "time"

type Message struct {
	ID        int       `gorm:"column:id;primary_key" json:"id"`
	Name      string    `form:"name" json:"name" gorm:"comment:'姓名'"`
	Title     string    `form:"title" json:"title" gorm:"comment:'标题'"`
	Content   string    `form:"content" json:"content" gorm:"comment:'内容'"`
	CrateTime time.Time `gorm:"column:create_time" json:"create_time"`
}

func (m Message) TableName() string {
	return "message"
}

type User struct {
	ID        	int       `gorm:"column:id;primary_key" json:"id"`
	Avator   	string    `form:"avator"   json:"name"   gorm:"comment:'头像'"`
	email       string    `form:"email"    json:"name"   gorm:"comment:'email'"`
	Name      	string    `form:"name"     json:"name"   gorm:"comment:'姓名'"`
	Username    string    `form:"username" json:"username" gorm:"comment:'账户名'"`
	Password    string    `form:"password" json:"password" gorm:"comment:'密码'"`
}

func (u User) TableName() string {
	return "user"
}