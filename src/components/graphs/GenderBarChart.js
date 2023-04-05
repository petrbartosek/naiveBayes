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
            <YAxis domain={[0, 2500]} tickCount={6}/>
            <Tooltip cursor= {{ fill: '#eee'}} />
            <Legend />
            <Bar dataKey="positive" fill="#dd0e80" radius={[2,2,0,0]} >
                <LabelList dataKey="positive" position='top' />
            </Bar>

            <Bar dataKey="negative" fill="#84c566" radius={[2,2,0,0]} >
                <LabelList dataKey="negative" position='top' />
            </Bar>

            <Bar dataKey="neutral" fill="#c2c2c2" />
        </BarChart>
    );
}
