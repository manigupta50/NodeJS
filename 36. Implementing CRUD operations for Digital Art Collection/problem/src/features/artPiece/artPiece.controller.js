// TODO: require your ArtPiece model here
import ArtPiece from "./artPiece.model.js";

// TODO: Implement your artPieces controller functions here
export const addArtPiece = (req, res) => {
    const artPiece = ArtPiece.add(req.body);
    res.status(201).send(artPiece);
};

export const getAllArtPiece = (req, res) => {
    const response = ArtPiece.getAll(req.query);
    res.status(200).send(response);
};

export const getOneArtPiece = (req, res) => {
    const id = req.params.id;
    const artPiece = ArtPiece.get(id);
    if(!artPiece) {
        res.status(404).send('Art Piece Not Found');
    } else {
        return res.send(artPiece);
    }
};

export const updateArtPiece = (req, res) => {
    const artPiece = ArtPiece.update(req.params.id, req.body);
    if (!artPiece) {
        return res.status(404).send("Art piece not found");
    }
    res.status(200).send(artPiece);
};

export const deleteArtPiece = (req, res) => {
    const id = req.params.id;
    ArtPiece.delete(id);
    res.status(204).send();
};
