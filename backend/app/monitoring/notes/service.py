from motor.motor_asyncio import AsyncIOMotorDatabase
from .models import MonitoringNotesModel


async def insert_notes(db: AsyncIOMotorDatabase, notes: MonitoringNotesModel):
    note_dict = notes.dict()
    result = await db.monitoring_notes.insert_one(note_dict)
    return result.inserted_id
