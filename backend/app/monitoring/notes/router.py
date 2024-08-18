from fastapi import APIRouter, HTTPException, Depends
from motor.motor_asyncio import AsyncIOMotorDatabase
from .service import insert_notes
from .models import MonitoringNotesModel
from app.database import get_database

router = APIRouter()


@router.post("/notes")
async def create_note(note: MonitoringNotesModel, db: AsyncIOMotorDatabase = Depends(get_database)):
    note_id = await insert_notes(db, note)
    if note_id:
        return {"id": str(note_id)}
    raise HTTPException(status_code=400, detail="Note could not be created")
