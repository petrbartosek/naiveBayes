import { PieChart, Pie, Sector, Cell, Legend } from "recharts";

const data = [
  { name: "Positive", value: 4253 },
  { name: "Negative", value: 1021 },
  { name: "Neutral", value: 0 }
];
const COLORS = ["#93c47d", "#a64d79", "#c2c2c2"];

export default function App() {
  return (
    <PieChart width={500} height={350}>
      <Pie
        data={data}
        cx={250}
        cy={280}
        startAngle={180}
        endAngle={0}
        innerRadius={150}
        outerRadius={230}
        fill="#8884d8"
        paddingAngle={1}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
}
