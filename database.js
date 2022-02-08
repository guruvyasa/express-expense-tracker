import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export async function getConnection(){
    
    // open the database
    const db = await open({
      filename: 'expense.db',
      driver: sqlite3.Database
    })
    return db
}

export async function createTables(){
    const query = `create table expense(id integer primary key,
                                        purpose text not null,
                                        tdate date not null)`
    try {
        const db = await getConnection()
        await db.exec(query)
        console.log("success!!")
        
    } catch (error) {
        console.error(error)   
    }

}

export async function addExpense({purpose, tdate}){

    const query = `insert into expense(purpose,
                                        tdate) values (?, ?)`
    try {
        const db = await getConnection()
        await db.run(query,purpose,tdate)
        console.log("success!!")
        
    } catch (error) {
        console.error(error)   
    }

}

export async function getExpenses(){

    const query = `select * from expense`
    try {
        const db = await getConnection()
        const expenses = await db.all(query)
        console.log(expenses)
        
    } catch (error) {
        console.error(error)   
    }

}

function init(){
    // createTables()
    addExpense({purpose: " college fees ", tdate: new Date()})
    getExpenses()
}
// init()

