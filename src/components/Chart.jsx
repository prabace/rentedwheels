import React, { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart() {

    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
          "Revenue": 2400,
          
        },
        {
          name: 'Feb',
          "Active User": 3000,
          "Revenue": 1398,
         
        },
        {
          name: 'Mar',
          "Active User": 2000,
          "Revenue": 9800,
          
        },
        {
          name: 'Apr',
          "Active User": 2780,
          "Revenue": 3908,
          
        },
        {
          name: 'May',
          "Active User": 1890,
          "Revenue": 4800,
         
        },
        {
          name: 'Jun',
          "Active User": 2390,
          "Revenue": 3800,
          
        },
        {
          name: 'Jul',
          "Active User": 3490,
          "Revenue": 4300,
         
        },
        {
            name: 'Aug',
            "Active User": 3490,
            "Revenue": 2390,
           
          },
          {
            name: 'Sep',
            "Active User": 2344,
            "Revenue": 2270,
           
          },
          {
            name: 'Oct',
            "Active User": 6789,
            "Revenue": 4300,
           
          },
          {
            name: 'Nov',
            "Active User": 8800,
            "Revenue": 5525,
           
          },
          {
            name: 'Dec',
            "Active User": 5321,
            "Revenue": 9908,
           
          },
      ];

  return (
    <div>
        <h1 className='text-2xl font-semibold mb-20'>Sales Analytics</h1>
        <ResponsiveContainer width="100%" aspect={4 / 1 }>
            <LineChart data={data}>

                <XAxis dataKey="name" stroke='black'/>
                <YAxis stroke='black' />
                <Line type="monotone" dataKey="Active User" stroke="#f9a826"/>
                <Line type="monotone" dataKey="Revenue" stroke="blue"/>
                <Tooltip />
                <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart