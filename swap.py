from flask import Flask
app=Flask("__name__")
@app.route("/")
def swap():
    a=2
    b=3
    a,b=b,a
    return f"swapping a={a},b={b}"
if __name__=="__main__":
    app.run(debug=True)
