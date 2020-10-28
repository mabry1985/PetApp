import React, { FunctionComponent } from "react";

type CardProps = {
  name: string;
  age: AgeFormat;
  weight: WeightFormat;
  foodAmount: number;
  feedingTimesPerDay: number;
};

type AgeFormat = {
  year: number;
  month: number;
  day: number;
};

type WeightFormat = {
  lb: number;
  oz: number;
};

const Card:FunctionComponent<CardProps> = ({
  name,
  age,
  weight,
  foodAmount,
  feedingTimesPerDay,
}: CardProps) => {
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <h4 className="age">{`${age.year} ${age.month} ${age.year}`}</h4>
      <h4 className="weight">{`${weight.lb}lb ${weight.oz}oz`}</h4>
      <h1 className="foodAmount">{`${foodAmount}oz`}</h1>
      <h2 className="feedingAmount">{`${feedingTimesPerDay}x per day`}</h2>
    </div>
  );
};

export default Card;
