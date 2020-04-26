CREATE TABLE "movies" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(120) NOT NULL,
  "poster"  VARCHAR(120) NOT NULL,
  "description" TEXT NOT NULL
);


-- movies can have multiple genres
CREATE TABLE "genres" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(80) NOT NULL
);

-- starter genres
INSERT INTO "genres" ("name")
VALUES 
('Adventure'),
('Animated'),
('Biographical'),
('Comedy'),
('Disaster'),
('Drama'),
('Epic'),
('Fantasy'),
('Musical'),
('Romantic'),
('Science Fiction'),
('Space-Opera'),
('Superhero'),
('Action'),
('Family'),
('Thriller'),
('Mystery'),
('History');


-- CREATE JUNCTION TABLE
-- You will need to create the junction table that stores the relationships between "movies" and "genres"
-- This table will need to be populated with some data as well (INSERTS)
-- Recall that this Junction Table will just be a table of ids!

CREATE TABLE "movie_genres" (
	"id" SERIAL PRIMARY KEY,
	"movie_id" integer REFERENCES "movies",
	"genre_id" integer REFERENCES "genres"
);

-- relations
INSERT INTO "movie_genres" ("movie_id", "genre_id")
VALUES (1, 14), (1,11), (2, 15), (2, 9), (3, 14), (3, 11), (3, 13), (4, 2), (4, 15), (5, 16), (5, 17), (6, 1), (6, 8), (7, 14), (7, 16), (8, 1), (8, 6), (9, 2), (9, 4), (10, 11), (10, 14), (11, 11), (11, 6), (12, 6), (12, 18), (13, 10), (13, 6), (14, 2), (14, 15) ;

