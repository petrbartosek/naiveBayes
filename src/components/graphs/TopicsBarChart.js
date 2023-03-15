import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from "recharts";

const data = [
    {
        "topic": "space",
        "positive": 516,
        "negative": -93,
        "total": 609
    },
    {
        "topic": "cleanliness",
        "positive": 207,
        "negative": -37,
        "total": 244
    },
    {
        "topic": "quality of goods",
        "positive": 728,
        "negative": -142,
        "total": 870
    },
    {
        "topic": "range of fv",
        "positive": 70,
        "negative": -9,
        "total": 79
    },
    {
        "topic": "range of goods",
        "positive": 1325,
        "negative": -72,
        "total": 1397
    },
    {
        "topic": "look and feel",
        "positive": 951,
        "negative": -15,
        "total": 966
    },
    {
        "topic": "queues",
        "positive": 244,
        "negative": -337,
        "total": 581
    },
    {
        "topic": "staff",
        "positive": 483,
        "negative": -65,
        "total": 548
    },
    {
        "topic": "arrangement of the store",
        "positive": 390,
        "negative": -61,
        "total": 451
    },
    {
        "topic": "clarity",
        "positive": 522,
        "negative": -44,
        "total": 566
    },
    {
        "topic": "availability of goods",
        "positive": 461,
        "negative": -138,
        "total": 599
    },
    {
        "topic": "availability of promo goods",
        "positive": 104,
        "negative": -65,
        "total": 169
    },
    {
        "topic": "self-checkout",
        "positive": 90,
        "negative": -116,
        "total": 206
    },
    {
        "topic": "parking",
        "positive": 109,
        "negative": -5,
        "total": 114
    },
    {
        "topic": "proximity",
        "positive": 323,
        "negative": -3,
        "total": 326
    },
    {
        "topic": "pricing",
        "positive": 385,
        "negative": -79,
        "total": 464
    },
    {
        "topic": "quality of meat",
        "positive": 89,
        "negative": -24,
        "total": 113
    },
    {
        "topic": "availability of bakery",
        "positive": 41,
        "negative": -39,
        "total": 80
    },
    {
        "topic": "price tags",
        "positive": 21,
        "negative": -97,
        "total": 118
    },
    {
        "topic": "promotions",
        "positive": 259,
        "negative": -16,
        "total": 275
    },
    {
        "topic": "other",
        "positive": 249,
        "negative": -34,
        "total": 283
    },
    {
        "topic": "range of bakery",
        "positive": 38,
        "negative": -4,
        "total": 42
    },
    {
        "topic": "quality of bakery",
        "positive": 151,
        "negative": -30,
        "total": 181
    },
    {
        "topic": "quality of fv",
        "positive": 154,
        "negative": -75,
        "total": 229
    },
    {
        "topic": "opening hours",
        "positive": 56,
        "negative": -8,
        "total": 64
    },
    {
        "topic": "range of meat",
        "positive": 24,
        "negative": -3,
        "total": 27
    },
    {
        "topic": "vouchers loyalty",
        "positive": 31,
        "negative": -8,
        "total": 39
    },
    {
        "topic": "security",
        "positive": 13,
        "negative": -11,
        "total": 24
    },
    {
        "topic": "availability of fv",
        "positive": 14,
        "negative": -3,
        "total": 17
    },
    {
        "topic": "leaflets",
        "positive": 4,
        "negative": -2,
        "total": 6
    },
    {
        "topic": "availability of meat",
        "positive": 3,
        "negative": -3,
        "total": 6
    }
].sort((a,b) => (b.positive - a.positive))

export default function App() {
  return (
    <BarChart
      width={700}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="topic" />
      <YAxis />
      <Tooltip />
      <Legend />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="positive" fill="#93c47d" />
      <Bar dataKey="negative" fill="#a64d79" />
    </BarChart>
  );
}
