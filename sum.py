from flask import Flask
sum=Flask("__name__")
@sum.route("/")
def add():
    a=2
    b=5
    c=a+b
    return f"addition is{c}"
if __name__ == "__main__":
    sum.run(debug=True)


  