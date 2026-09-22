from flask import Flask
from flask_sqlalchemy import SQLAlchemy
app=Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"]="sqlite:///students.db"
db=SQLAlchemy(app)
class Student(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(100))
    age=db.Column(db.Integer)
    course=db.Column(db.String(100))
with app.app_context():
    db.create_all()
@app.route("/")
def home():
    return '''
    <h1> student CRUD operation</h1>
    <p>/create-->used to create a table</p>
    <p>/update-->used to update a data</p>
    <p>/read--> used to read or retrieve the data</p>
    <p>/delete-->used to delete the data</p> ''' 
@app.route("/create")
def create():
     new_student=Student(name="sahini",age=19)
     db.session.add(new_student)
     db.session.commit()
     return "student created succesfully"
@app.route("/read")
def read():
     students=Student.query.all()
     if not students:
         return "no student data found"
     result=" "
     for student in students:
          result+=f"ID:{student.id},name:{student.name},age:{student.age},course:{student.course}</br>"
     return result
@app.route("/update")
def update():
    students=Student.query.first()
    if Student:
        Student.age=25
        db.session.commit()
        return"student age  updated succesfully"
    return "no student data found"
@app.route("/delete")
def delete():
     student1=Student.query.first()
     if student1:
        db.session.delete(student1)
        db.session.commit()
        return "student deleted successfully"
     return "no student data is found"
if __name__=="__main__":
    app.run(debug=True)