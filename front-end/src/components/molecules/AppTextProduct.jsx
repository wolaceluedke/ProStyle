import React from "react";
import Card from "react-bootstrap/Card";

export default function AppTextProduct() {
  return (
    <div>
      <Card className="card-text-procuct">
        <Card.Body>
          <Card.Title>Camisa Santa Cruz Preta</Card.Title>
          <div>
            <div>
              Tamanhos: <input type="number"></input>
            </div>
            <div>Valor: R$150,00</div>
          </div>

          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
            maecenas sed enim ut sem viverra. Ultricies tristique nulla aliquet
            enim tortor at auctor. Mauris nunc congue nisi vitae suscipit tellus
            mauris a. Turpis massa tincidunt dui ut ornare lectus sit. Pretium
            fusce id velit ut tortor pretium viverra suspendisse.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
