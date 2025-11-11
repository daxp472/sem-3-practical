INSERT INTO hotels (hotel_id, name, city, room_available) VALUES
(1, 'Grand Plaza', 'New York', 50),
(2, 'Sea View Resort', 'Miami', 30),
(3, 'Mountain Inn', 'Denver', 20);

UPDATE hotels
SET room_available = room_available - 1
WHERE hotel_id = 2 AND room_available > 0;

DELETE FROM hotels
WHERE hotel_id = 3;

SELECT * AVG(room_available) AS average_rooms FROM hotels
SELECT * SUM(room_available) AS total_rooms FROM hotels;