import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Card from "react-bootstrap/Card";

export default function HalfRating() {
  return (
    <Card className="conteudo-dos-comentarios">
      <div>
        <span>Deixe sua avaliação e comentário sobre o produto</span>
        <div className="alinhandoestrelas">
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={5.0} precision={1.0} />
          </Stack>
        </div>
        <div>Adicionar Comentário:</div>
        <input type="text" className="deixeseucomentário" />
        <button>Enviar Comentário</button>
      </div>
    </Card>
  );
}
