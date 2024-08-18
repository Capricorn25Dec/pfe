from fastapi import FastAPI
from app.monitoring.notes.router import router as monitoring_notes_router

app = FastAPI()

app.include_router(monitoring_notes_router, prefix="/monitoring")
