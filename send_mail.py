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


def main():
    smtp = export_env()

    server = smtplib.SMTP(smtp.server, smtp.port)
    server.starttls()  # обновляем соединение с использованием TLS-шифрования
    server.login(smtp.login, smtp.password)

    from_email = smtp.login
    to_email = "mars_marsov@mail.ru"
    subject = "Тестовое сообщение"
    message = "Привет, это тестовое сообщение, отправленное с помощью Python и SMTP."

    server.sendmail(from_email, to_email, f"Subject: {subject}\n\n{message}")

    server.quit()


if __name__ == '__main__':
    main()
