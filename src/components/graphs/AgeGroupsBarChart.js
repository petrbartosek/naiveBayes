import useDataForGraph from '../../hooks/classifying/useDataForGraphs'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LabelList
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

            <Bar dataKey="positive" fill="#84c566" >
                <LabelList dataKey="positive" position='top' />
            </Bar>

            <Bar dataKey="negative" fill="#dd0e80">
                <LabelList dataKey="negative" position='top' />
            </Bar>

            <Bar dataKey="neutral" fill="#c2c2c2">
                
            </Bar>
        </BarChart>
    );
}
