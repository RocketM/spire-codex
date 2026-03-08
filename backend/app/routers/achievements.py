"""Achievement API endpoints."""
from fastapi import APIRouter, HTTPException, Request
from ..models.schemas import Achievement
from ..services.data_service import load_achievements

router = APIRouter(prefix="/api/achievements", tags=["Achievements"])


@router.get("", response_model=list[Achievement])
def get_achievements(request: Request):
    return load_achievements()


@router.get("/{achievement_id}", response_model=Achievement)
def get_achievement(request: Request, achievement_id: str):
    achievements = load_achievements()
    for ach in achievements:
        if ach["id"] == achievement_id.upper():
            return ach
    raise HTTPException(status_code=404, detail=f"Achievement '{achievement_id}' not found")
