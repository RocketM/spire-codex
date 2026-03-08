"""Modifier API endpoints."""
from fastapi import APIRouter, HTTPException, Request
from ..models.schemas import Modifier
from ..services.data_service import load_modifiers

router = APIRouter(prefix="/api/modifiers", tags=["Modifiers"])


@router.get("", response_model=list[Modifier])
def get_modifiers(request: Request):
    return load_modifiers()


@router.get("/{modifier_id}", response_model=Modifier)
def get_modifier(request: Request, modifier_id: str):
    modifiers = load_modifiers()
    for mod in modifiers:
        if mod["id"] == modifier_id.upper():
            return mod
    raise HTTPException(status_code=404, detail=f"Modifier '{modifier_id}' not found")
