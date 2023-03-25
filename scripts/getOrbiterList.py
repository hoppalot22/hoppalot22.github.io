from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World!'
    
@app.route('/')    
def bye():
    return "Bye"
    
app.run(port=5000)