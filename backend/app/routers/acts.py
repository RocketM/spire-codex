"""Act API endpoints."""
from fastapi import APIRouter, HTTPException, Request
from ..models.schemas import Act
from ..services.data_service import load_acts

router = APIRouter(prefix="/api/acts", tags=["Acts"])


@router.get("", response_model=list[Act])
def get_acts(request: Request):
    return load_acts()


@router.get("/{act_id}", response_model=Act)
def get_act(request: Request, act_id: str):
    acts = load_acts()
    for act in acts:
        if act["id"] == act_id.upper():
            return act
    raise HTTPException(status_code=404, detail=f"Act '{act_id}' not found")
