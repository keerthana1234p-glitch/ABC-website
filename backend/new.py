from fastapi import FastAPI
from pydantic import BaseModel
class Student(BaseModel):
    name:str
    cls:int
    id:int
students=[]
keyvalues=[]
urls=[]
app=FastAPI()


@app.get("/student")
def get_stu():
    return students

@app.get("/urls")
def get_urls():
    return urls

@app.get("/keyvalues")
def get_values():
    return keyvalues

# sending data using body 
@app.post("/student")
def add_stu(student:Student):
    students.append(student)
    return{
        "name":student.name,
        "cls":student.cls,
        "id":student.id
    }

@app.put("/student/{id}")
def update_stu(id:int,new:str):
    for i in students:
        if i.id == id:
            i.name=new
            return{"message":"updated","student":new}
    return{"message":"id not found"}

@app.delete("/student/{id}")
def delete_stu(id:int):
        for i in students:
            if i.id == id:
                students.remove(i)
                return{"message":"deleted","student":id}  
        return{"message":"cannot delete"}       
  

# sending data using keyvalue pairs
@app.post("/keyvalues")
def add_keyvalue(data:dict):
    keyvalues.append(data)
    return data

# sending data using parameter 
@app.get("/student/{name}/{id}")
def get_parameter(name:str,id:int):
    urls.append({"name":name,"id":id})
    return{"message":"added data using parameter"}










from fastapi import FastAPI 
from pydantic import BaseModel
class Users(BaseModel):
    name:str
    age:int
app=FastAPI()
users=[]
url_Users=[]
keyvalues=[]
@app.get("/users")
def get_users():
    return users


# sending data using body 
@app.post("/users")
def add_user(user:Users):
    users.append(user)
    return {
        "name":user.name,
        "age":user.age
    }

# # # sending data using parameter 

@app.get("/users/{name}/{age}")
def get_user(name:str,age:int):
    url_Users.append({"name":name,"age":age})
    return url_Users


# # # KEYVALUE PAIRS 
@app.post("/keyvalues")
def take_values(data:dict):
    keyvalues.append(data)
    return data 













# # # # update 
@app.put("/update-user/{name}")   
def update_user(name: str, age: int):  
    for user in users:                  
            user.age = age                
            return user                    

    return {"message": "user not found"}   


# Delete 
@app.delete("/users")                  
def delete_user(name:str,age:int):       
    for user in users:                    
        if user.name == name:             
             users.remove(user)             
        return{"message":"deleted","users":user.name}
    return{"user not found"}









# 24/8/26 practice 
from fastapi import FastAPI
from pydantic import BaseModel
class Todo(BaseModel):
    name:str
    age:int
    id:int
students=[]
app=FastAPI()
keyvalues=[]
users=[]
# create an api 
@app.get("/student")
def get_stu():
    return students
# adding data 
@app.post("/student")
def add_stu(stu:Todo):
    students.append(stu)
    return students

# updating 
@app.put("/student/{id}")
def update_stu(id:int,new:str):
    for i in students:
        if i.id == id:
            i.name=new
            return{"message":"updated","student":new}
        return{"message":"not found"}
    
    # deleting 
app.delete("/students/{id}")
def delete_stu(id:int):
    for i in students:
        if i.id == id:
            students.remove(i)
            return{"message":"deleted"}

# sending data using keyvalue pairs 
@app.post("/keyvalues")
def add_stu(data:dict):
   keyvalues.append(data)
   return data
@app.get("/keyvalues")
def get_keyvalues():
    return keyvalues

# sending data using parameter
@app.get("/users/{name}/{age}")
def get_users(name:str,age:int):
    users.append({"name":name,"age":age})
    return users