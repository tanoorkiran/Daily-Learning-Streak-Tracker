interface Props {
  title: string;
  value: string | number;
  icon: string;
}

export default function StatCard({ title, value, icon }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <span className="text-gray-500">{title}</span>
        <span className="text-2xl">{icon}</span>
      </div>

      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
}