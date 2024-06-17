from flask import Flask, render_template, request

from send_mail import send


application = Flask(__name__)


@application.route("/")
def index():
    return render_template('index.html')


@application.route("/", methods=['POST'])
def sendmail():
    data = request.get_json()
    send(data)
    return {'status': 'OK'}

if __name__ == "__main__":
    application.run(host='0.0.0.0')
