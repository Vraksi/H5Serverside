USE MASTER
DROP DATABASE IF EXISTS Dyr
CREATE DATABASE Dyr

USE Dyr
CREATE TABLE Hunde(
	Id INT IDENTITY(1, 1) PRIMARY KEY,
	Navn NVARCHAR(256),
	Ejer NVARCHAR(256),
	Art NVARCHAR(256),
	EjerTlf int,
)

INSERT INTO Hunde(Navn, Ejer, Art, EjerTlf ) VALUES ('Burger', 'Jakob', 'BorderCollie', 12123)
INSERT INTO Hunde(Navn, Ejer, Art, EjerTlf ) VALUES ('Bigtop', 'Lonny', 'Rottweiler', 2948)
INSERT INTO Hunde(Navn, Ejer, Art, EjerTlf ) VALUES ('Dumbo', 'Fthagen', 'Cthulu', 798921)
INSERT INTO Hunde(Navn, Ejer, Art, EjerTlf ) VALUES ('Rex', 'Alan', 'Rottweiler', 1238955)

SELECT * FROM Hunde
