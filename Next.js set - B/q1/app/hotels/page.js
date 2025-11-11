import Link from "next/link";

const hotels = [
  { id: "1", name: "The Royal Palace", location: "Mumbai", price: 3500 },
  { id: "2", name: "Hilltop Resort", location: "Manali", price: 2500 },
];

export default function HotelsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hotels</h1>
      {hotels.map(h => (
        <div key={h.id} className="mb-3 border-b pb-2">
          <Link href={`/hotels/${h.id}`}>
            <h2 className="text-lg font-semibold">{h.name}</h2>
          </Link>
          <p>{h.location} • ₹{h.price}/night</p>
        </div>
      ))}
    </div>
  );
}