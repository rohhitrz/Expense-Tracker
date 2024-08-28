import React, { PureComponent } from "react";
import {
  Barchart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import styles from "./Barchart.module.css";

function Barchart({ data }) {
  return (
    <div className={styles.expenseChart}>
      <h2>Top Expenses</h2>

      <div className={styles.barWrapper}>
        <ResponsiveContainer width="100%" height="280">
          <Barchart data={data} layout="vertical">
            <XAxis type="number" axisLine={false} display="none" />
            <YAxis
              type="category"
              width={100}
              dataKey="name"
              axisLine={false}
            />
            <Bar dataKey="value" fill="#8884d8" barSize={25} />
          </Barchart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
//export 
export default Barchart;
