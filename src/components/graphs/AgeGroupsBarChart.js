import useDataForGraph from '../../hooks/classifying/useDataForGraphs'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "< 30",
        positive: 1319,
        negative: 297,
        neutral: 0
    },
    {
        name: "30 - 60",
        positive: 1496,
        negative: 404,
        neutral: 0
    },
    {
        name: "60+",
        positive: 1438,
        negative: 320,
        neutral: 0
    }
];

export default function App() {

    return (
        <BarChart
            width={500}
            height={400}
            data={data}
            margin={{
                top: 25,
                right: 0,
                left: 0,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="positive" fill="#93c47d" />
            <Bar dataKey="negative" fill="#a64d79" />
            <Bar dataKey="neutral" fill="#c2c2c2" />
        </BarChart>
    );
}
