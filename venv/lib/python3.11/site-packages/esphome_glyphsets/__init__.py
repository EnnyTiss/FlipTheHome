__version__ = "0.2.0"

import pathlib

FILE_PATH = pathlib.Path(__file__).resolve()
GLYPHSETS_BASE_PATH = FILE_PATH.parent / "glyphsets" / "Lib" / "glyphsets"
GLYPHSETS_DEFINITIONS_PATH = GLYPHSETS_BASE_PATH / "definitions"
GLYPHSETS_NAM_PATH = GLYPHSETS_BASE_PATH / "results" / "nam"


def defined_glyphsets() -> list[str]:
    """Return a list of defined glyphsets."""
    return sorted(
        f.stem
        for f in GLYPHSETS_DEFINITIONS_PATH.iterdir()
        if f.is_file() and f.suffix == ".yaml"
    )


def unicodes_per_glyphset(glyphset_name: str) -> list[int]:
    """Return a list of unicodes for a given glyphset."""
    nam_path = GLYPHSETS_NAM_PATH / f"{glyphset_name}.nam"
    if not nam_path.exists():
        return []
    character_set = {
        int(line.partition(" ")[0][2:], 16)
        for line in nam_path.read_text().splitlines()
        if line.startswith("0x")
    }
    return sorted(character_set)
