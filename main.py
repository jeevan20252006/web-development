from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
   CORSMiddleware,
   allow_origins=["*"],
   allow_credentials=True,
   allow_methods=["*"],
   allow_headers=["*"],
)
student={1:{"id":10,"name":"balaji"},
         2:{"id":20,"name":"jeevan"},
         3:{"id":30,"name":"ram"}}

class model(BaseModel):
   name:str
   reg_no: int
   email: str
         
@app.get('/')
def readingdata():
 return{"message":"reading the data"}




@app.post("/studentRecord")
def postingRecord(people:model): 
   return{"name":people.id,"name":people.name,"job":people.job}

student_db={}
student_db_counter=0

@app.post("/studentsubmittedrecord")
def positionRecord(people:model):
   global student_db_counter
   student_db[student_db_counter]=people.dict()
   student_db[student_db_counter]["id"]=student_db_counter
   student_db_counter+=1
   return{"number of students submitted":student_db_counter}

@app.get("/studentsrecord")
def countedRecord():
   return{"total count":student_db}
   








 