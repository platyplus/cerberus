import glob
import time
import os
import csv
from xlsx2csv import Xlsx2csv
import logging as log

from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
DATA_PATH = os.getenv('DATA_PATH', '/data')
TMP_PATH = os.getenv('TMP_PATH', '/tmp/cerberus')

log.basicConfig(
    level=log.INFO, format='%(asctime)s %(levelname)s :: %(message)s', datefmt='%m-%d %H:%M:%S')


def convert_file(fileName):
    log.info("Processing %s..." % os.path.abspath(fileName))
    if not os.path.exists(TMP_PATH):
        os.makedirs(TMP_PATH)
    csvFileName = os.path.splitext(os.path.basename(fileName))[0] + '.csv'
    csvFileFullPath = TMP_PATH + '/' + csvFileName
    Xlsx2csv(fileName, delimiter=";", quoting=csv.QUOTE_ALL,
             dateformat="%Y-%m-%d %H:%M:%S").convert(csvFileFullPath)
    log.info("Exported to %s." % os.path.abspath(csvFileFullPath))


def convert_all_files():
    for f in glob.glob(DATA_PATH + '/**/[!~]*.xlsx'):
        convert_file(f)


class Watcher:
    DIRECTORY_TO_WATCH = DATA_PATH

    def __init__(self):
        self.observer = Observer()

    def run(self):
        event_handler = Handler()

        self.observer.schedule(
            event_handler, self.DIRECTORY_TO_WATCH, recursive=True)
        self.observer.start()
        log.info("Watcher started")
        try:
            while True:
                time.sleep(5)
        except:
            self.observer.stop()
            log.error("Error")

        self.observer.join()


def is_excel_file_name(filename):
    return filename.endswith('.xlsx') and not filename.startswith('~')


class Handler(FileSystemEventHandler):

    @staticmethod
    def on_any_event(event):
        if event.is_directory:
            return None

        elif event.event_type == 'created':
            if is_excel_file_name(event.src_path):
                log.info("Excel file created - %s." % event.src_path)
                convert_file(event.src_path)

        elif event.event_type == 'modified':
            if is_excel_file_name(event.src_path):
                log.info("Excel file modified - %s." % event.src_path)
                convert_file(event.src_path)


log.info("XLS/CSV converter is starting")
if __name__ == '__main__':
    convert_all_files()
    log.info("Starting watcher...")
    w = Watcher()
    w.run()
