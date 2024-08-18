from pydantic import BaseModel
from datetime import datetime


class MonitoringNotesModel(BaseModel):
    datetime: datetime
    reporter: str
    target_machine: str
    notes: str
