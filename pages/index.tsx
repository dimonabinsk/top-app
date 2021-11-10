import React, { useState } from "react";
import { Button, Div, Htag, Paragraph, Rating } from "../components";

export default function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Курсы по Photoshop</Htag>
      <Button apperance="primary" arrow="right">
        Кнопка
      </Button>
      <Button apperance="ghost" arrow="down">
        Кнопка
      </Button>
      <Paragraph size="small">Параграф маленький</Paragraph>
      <Paragraph size="middle">Параграф средний</Paragraph>
      <Paragraph size="large">Параграф большой</Paragraph>
      <Div size="large" color="gray">
        10
      </Div>
      <Div size="large" color="red">
        hh.ru
      </Div>
      <Div color="green">-10 000 P</Div>
      <Div color="ghost">Photoshop</Div>
      <Div color="primary">Работа в Photoshop</Div>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
