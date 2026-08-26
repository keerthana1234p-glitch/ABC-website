from fastapi import FastAPI
from database import SessionLocal
from models import Todo
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
class TodoCreate (BaseModel):
    title:str
    is_done: bool=False
app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/todos")
def get_data():
    db=SessionLocal()
    todos=db.query(Todo).all()
    db.close()
    return todos


@app.post("/todos")
def create_todo(todo:TodoCreate):
    db=SessionLocal()

    new_todo=Todo(
        title=todo.title,
        is_done=todo.is_done
    )
    db.add(new_todo)
    db.commit()
    db.refresh(new_todo)
    db.close()
    return new_todo

@app.put("/todos/{id}")
def update_todo(id:int,todo:TodoCreate):
    db=SessionLocal()

    existing_todo = db.query(Todo).filter(Todo.id==id).first()
    if existing_todo:
        existing_todo.title=todo.title
        existing_todo.is_done=todo.is_done

        db.commit()
        db.refresh(existing_todo)
        return existing_todo
    return{"message":"not found"}




@app.delete("/todos/{id}")
def delete_todo(id: int):
    db = SessionLocal()

    existing_todo = db.query(Todo).filter(Todo.id == id).first()

    if existing_todo:
        db.delete(existing_todo)
        db.commit()

        return {"message": "Todo deleted"}

    return {"message": "Todo not found"}














































































































