from flask import Flask
app=Flask("__name__")
@app.route("/")
def home():
    return "welcome to home page"
@app.route("/about")
def about():
    return "welcome to about page"
@app.route("/index")
def index():
   return "welcome to index page"
if __name__== "__main__":
    app.run(debug=True)

