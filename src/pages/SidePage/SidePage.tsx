interface Props {
  data: {
    id: number;
    UUID: string;
    text: string;
    top: number;
    left: number;
  };
}

function SidePage({ data }: Props) {
  return (
    <div className="info-star">
      <p>ID элемента: {data.id}</p>
      <p>UUID стороны: {data.UUID}</p>
      <p>Текст на стороне кубика: {data.text}</p>
      <p>Верхний отступ от родителя: {Math.round(data.top)} px</p>
      <p>Левый отступ от родителя: {Math.round(data.left)} px</p>
    </div>
  );
}

export default SidePage;
