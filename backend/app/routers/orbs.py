"""Orb API endpoints."""
from fastapi import APIRouter, HTTPException, Request
from ..models.schemas import Orb
from ..services.data_service import load_orbs

router = APIRouter(prefix="/api/orbs", tags=["Orbs"])


@router.get("", response_model=list[Orb])
def get_orbs(request: Request):
    return load_orbs()


@router.get("/{orb_id}", response_model=Orb)
def get_orb(request: Request, orb_id: str):
    orbs = load_orbs()
    for orb in orbs:
        if orb["id"] == orb_id.upper():
            return orb
    raise HTTPException(status_code=404, detail=f"Orb '{orb_id}' not found")
