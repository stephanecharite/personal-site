import React from "react";
import Card from "./Card";
import "../style/Home.css";
class Home extends React.Component {
  i = 0;
  gridColumn = ["col1", "col2"];

  getClassName(index: number): string {
      console.log(index % 2);
    return index % 2 == 0 ? this.gridColumn[0] : this.gridColumn[1];
  }

  render() {
    return (
      <div className="grid">
        {/* <Card
          title="Kafka Experience"
          description="Experience using and maintaining kafka"
        /> */}
        <div className={this.getClassName(this.i)}>
          <Card
            title={`Title ${this.i}`}
            description={`Describe ${this.i++}`}
          />
        </div>
        <div className={this.getClassName(this.i)}>
          <Card
            title={`Title ${this.i}`}
            description={`Describe ${this.i++}`}
          />
        </div>
        <div className={this.getClassName(this.i)}>
          <Card
            title={`Title ${this.i}`}
            description={`Describe ${this.i++}`}
          />
        </div>
        <div className={this.getClassName(this.i)}>
          <Card
            title={`Title ${this.i}`}
            description={`Describe ${this.i++}`}
          />
        </div>
      </div>
    );
  }
}

export default Home;
