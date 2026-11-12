from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json
app=FastAPI()
app.add_middleware(CORSMiddleware,
                   allow_origins=["https://localhost:5173","http://127.0.0.1:5173"],
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"],)
@app.get("/")
def home():
    return{
        "message":"Practicee",
        "status":"Running"
    }
@app.get("/students/{student_id}")
def get_student(student_id : int):
    with open("data.json")as file:
        data=json.load(file)
    for student in data["students"]:
        if student["id"]==student_id:
            return student 
    raise HTTPException(status_code=404,detail="Student not found")
