"""Ascension API endpoints."""
from fastapi import APIRouter, Request
from ..models.schemas import Ascension
from ..services.data_service import load_ascensions

router = APIRouter(prefix="/api/ascensions", tags=["Ascensions"])


@router.get("", response_model=list[Ascension])
def get_ascensions(request: Request):
    return load_ascensions()
