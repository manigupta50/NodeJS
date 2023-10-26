import express from "express";
// TODO: require your artPiecesController here
import * as ArtPieceController from "./artPiece.controller.js";

const router = express.Router();

// TODO: Implement your artPieces routes here
router.post('/', ArtPieceController.addArtPiece);
router.get('/', ArtPieceController.getAllArtPiece);
router.get('/:id', ArtPieceController.getOneArtPiece)

router.put('/:id', ArtPieceController.updateArtPiece);
router.delete('/:id', ArtPieceController.deleteArtPiece);

export default router;
