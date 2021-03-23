package main

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"log"
)

const (
	host     = "localhost"
	port     = 5433
	user     = "pg-user-echo"
	password = "echo"
	dbname   = "pg-db-echo"
)
func connectDB() *sql.DB{
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}

	err = db.Ping()
	if err != nil {
		panic(err)
	}
	return db
}


func query(db *sql.DB){
	var id,name,price string


	rows,err:=db.Query(" select * from \"user\"")

	if err!= nil{
		fmt.Println(err)
	}
	defer rows.Close()

	for rows.Next(){
		err:= rows.Scan(&id,&name,&price)

		if err!= nil{
			fmt.Println(err)
		}
	}

	err = rows.Err()
	if err!= nil{
		fmt.Println(err)
	}

	fmt.Println(id,name,price)
}

func UpdateUser(db *sql.DB) {
	stmt,err := db.Prepare("UPDATE  \"user\" set username=$1 where id=$2")
	if err != nil {
		log.Fatal(err)
	}
	_,err = stmt.Exec("echo",1)
	if err != nil {
		log.Fatal(err)
	}else {
		fmt.Println("udpate user_tbl success")
	}

}


func main()  {
	db:=connectDB()
	UpdateUser(db)
	query(db)

}