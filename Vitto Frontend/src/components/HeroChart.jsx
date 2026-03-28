import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { value: 20 },
  { value: 40 },
  { value: 35 },
  { value: 60 },
  { value: 80 },
  { value: 70 },
];

export default function HeroChart() {
  return (
    <div className="h-32 w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#ef4444"
            strokeWidth={3}
            dot={false}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}