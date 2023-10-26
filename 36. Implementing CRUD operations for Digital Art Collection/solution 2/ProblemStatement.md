Title: Implementing CRUD operations for Digital Art Collection

Introduction: You have been assigned to build the backend for a new Digital Art Platform. This platform allows users to perform various operations for digital art pieces, such as creating a new entry, reading the existing entries, updating an entry, and deleting an entry from the collection.

Objectives:

Set up an Express server with necessary middlewares.

Create an ArtPiece class that can construct objects with properties id, title, artist, year, and imageUrl.

Implement an endpoint at '/api/artPieces' to add a new art piece to the collection.

Implement an endpoint at '/api/artPieces' to retrieve all art pieces in the collection. This endpoint should support query parameters 'year' and 'artist' to filter the results.

Implement an endpoint at '/api/artPieces/:id' to retrieve a specific art piece by its id.

Implement an endpoint at '/api/artPieces/:id' to update the details of a specific art piece.

Implement an endpoint at '/api/artPieces/:id' to delete a specific art piece from the collection.

Expected Output: A server that can handle all the CRUD operations for managing the digital art pieces via respective endpoints.

Note: The 'id' of the art pieces should be unique and auto-incremented for every new art piece. It should not be provided in the request for creating a new art piece.
