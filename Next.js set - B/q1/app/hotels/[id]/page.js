
const hotels = [
  { id: "1", name: "Royal Palace", location: "Mumbai", price: 3500, description: "Luxury hotel with sea view." },
  { id: "2", name: "shitty  Resort", location: "Manali", price: 2500, description: "Cozy stay with mountain view." },
];

export default async function HotelDetailsPage({ params }) {
  const { hotelid } = await params;
  console.log('hotelid:', hotelid);
  const hotel = hotels.find(h => h.id === hotelid);

  if (!hotel) return <p className="p-6">Hotel not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{hotel.name}</h1>
      <p>{hotel.location}</p>
      <p className="mt-2">₹{hotel.price} / night</p>
      <p className="mt-3 text-gray-700">{hotel.description}</p>
    </div>
  );
}