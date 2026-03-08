"""Keyword API endpoints."""
from fastapi import APIRouter, HTTPException, Request
from ..models.schemas import Keyword
from ..services.data_service import load_keywords

router = APIRouter(prefix="/api/keywords", tags=["Keywords"])


@router.get("", response_model=list[Keyword])
def get_keywords(request: Request):
    return load_keywords()


@router.get("/{keyword_id}", response_model=Keyword)
def get_keyword(request: Request, keyword_id: str):
    keywords = load_keywords()
    for kw in keywords:
        if kw["id"] == keyword_id.upper():
            return kw
    raise HTTPException(status_code=404, detail=f"Keyword '{keyword_id}' not found")
