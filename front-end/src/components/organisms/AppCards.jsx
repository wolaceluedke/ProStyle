import CamisaSupremeBranca from "../../imgs/Camisa Supreme Branca.png.png";
import CamisetaSantaCruz from "../../imgs/camisa santacruz.png.png";
import CamisaThreasher from "../../imgs/camisa threasher.png";
import CamisaVisllAazul from "../../imgs/camisa-vislla-azul.png.png";
import mangalongaillusionpreta from "../../imgs/mangalongaillusionpreta.png.png";
import mangalongacinza from "../../imgs/mangalongacinza.png.png";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddInCart from "../../imgs/cart-plus.svg";
import { Link } from "react-router-dom";

export default function MediaCard() {
  return (
    <div className="container-fluid">
      <div className="cards justify-content-center ">
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={CamisetaSantaCruz}
            alt="Camisa Santa Cruz Preta"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Camisa Santa Cruz Preta
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Apenas R$150,00 ou 3xR$50,00
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                <Link to="/product/1"> Detalhes </Link>
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={CamisaThreasher}
            alt="Manga Longa thrasher"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Manga Longa thrasher
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Apenas R$150,00 ou 3xR$50,00
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                <Link to="/product/2"> Detalhes </Link>
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={CamisaSupremeBranca}
            alt="Camisa Supreme Branca"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Camisa Supreme Branca
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Apenas R$150,00 ou 3xR$50,00
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Detalhes
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={CamisaVisllAazul}
            alt="Camisa Vissla Azul"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Camisa Vissla Azul
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Apenas R$150,00 ou 3xR$50,00
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Detalhes
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={mangalongaillusionpreta}
            alt="Manga Longa Illusion Preta"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Manga Longa Illusion Preta
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Apenas R$150,00 ou 3xR$50,00
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Detalhes
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={mangalongacinza}
            alt="Manga Longa Nike Cinza"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Manga Longa Nike Cinza
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Apenas R$150,00 ou 3xR$50,00
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Detalhes
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={CamisetaSantaCruz}
            alt="Camisa Santa Cruz Preta"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Camisa Santa Cruz Preta
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Apenas R$150,00 ou 3xR$50,00
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Detalhes
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={CamisaThreasher}
            alt="Manga Longa thrasher"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Manga Longa thrasher
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Apenas R$150,00 ou 3xR$50,00
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Detalhes
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="250"
            image={CamisaSupremeBranca}
            alt="Camisa Supreme Branca"
            className="Tamanho-da-camisa-no-card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Camisa Supreme Branca
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Apenas R$150,00 ou 3xR$50,00
            </Typography>
          </CardContent>
          <CardActions className="justify-content-end">
            <div>
              <Button size="small" className="justify-content-center">
                Detalhes
              </Button>
            </div>
            <div className="float-right add-cart">
              <Button size="small">
                <img src={AddInCart} alt="adicionar ao carrinho" />
              </Button>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
