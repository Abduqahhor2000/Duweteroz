import React, { PureComponent } from 'react';
import { LineChart, Line, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    sum: 9000},
  {
    sum: 10000},
  {
    sum: 9500},
  {
    sum: 10500},
  {
    sum: 11000},
  {
    sum: 12500},
  {
    sum: 13000},
  {
    sum: 11000},
  {
    sum: 12500},
  {
    sum: 14000},
  {
    sum: 15500},
  {
    sum: 16000},
  {
    sum: 17000}
];

export default class Chart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
          width={300}
          height={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sum" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
