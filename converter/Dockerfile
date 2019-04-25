FROM python:2.7-alpine

RUN pip install xlsx2csv watchdog

WORKDIR /server
COPY . /server

CMD ["python", "main.py"]