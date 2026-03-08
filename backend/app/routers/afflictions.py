"""Affliction API endpoints."""
from fastapi import APIRouter, HTTPException, Request
from ..models.schemas import Affliction
from ..services.data_service import load_afflictions

router = APIRouter(prefix="/api/afflictions", tags=["Afflictions"])


@router.get("", response_model=list[Affliction])
def get_afflictions(request: Request):
    return load_afflictions()


@router.get("/{affliction_id}", response_model=Affliction)
def get_affliction(request: Request, affliction_id: str):
    afflictions = load_afflictions()
    for aff in afflictions:
        if aff["id"] == affliction_id.upper():
            return aff
    raise HTTPException(status_code=404, detail=f"Affliction '{affliction_id}' not found")
