"""Intent API endpoints."""
from fastapi import APIRouter, HTTPException, Request
from ..models.schemas import Intent
from ..services.data_service import load_intents

router = APIRouter(prefix="/api/intents", tags=["Intents"])


@router.get("", response_model=list[Intent])
def get_intents(request: Request):
    return load_intents()


@router.get("/{intent_id}", response_model=Intent)
def get_intent(request: Request, intent_id: str):
    intents = load_intents()
    for intent in intents:
        if intent["id"] == intent_id.upper():
            return intent
    raise HTTPException(status_code=404, detail=f"Intent '{intent_id}' not found")
