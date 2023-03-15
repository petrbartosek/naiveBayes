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
        name: "Female",
        positive: 2344,
        negative: 567,
        neutral: 0,
    },
    {
        name: "Male",
        positive: 1909,
        negative: 454,
        neutral: 0
    },
];

export default function App() {

    return (
        <BarChart
            width={500}
            height={350}
            data={data}
            margin={{
                top: 20,
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
