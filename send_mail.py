from dataclasses import dataclass
import smtplib

from environs import Env


@dataclass
class SmtpData:
    login: str
    password: str
    server: str
    port: int


def export_env():
    env = Env()
    env.read_env()

    smtp = SmtpData(
        login = env("SMTP_LOGIN"),
        password = env("SMTP_PASSWORD"),
        server = env("SMTP_SERVER"),
        port = env.int("SMTP_PORT")
    )

    return smtp


def send(data: dict):
    smtp = export_env()

    server = smtplib.SMTP_SSL(smtp.server, smtp.port)
    server.login(smtp.login, smtp.password)

    from_email = smtp.login
    to_email = "mars_marsov@mail.ru"
    subject = "Заявка"
    message = f"ФИО: {data['name']}\nТелефон: {data['phone']}"
    server.sendmail(from_email, to_email, f"Subject: {subject}\n\n{message}".encode('utf8'))

    server.quit()


if __name__ == '__main__':
    send({'name': 'Иванов Иван', 'phone': "+79999999900"})
