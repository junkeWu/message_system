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
