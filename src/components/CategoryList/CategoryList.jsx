import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import "./CategoryList.css";

function CategoryList() {
  return (
    <List>
      <ListItem component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem component={Link} to="/category/gamer-zone">
        <ListItemText primary="Gamer Zone" />
      </ListItem>
      <ListItem component={Link} to="/category/arma-tu-pc">
        <ListItemText primary="Arma tu PC" />
      </ListItem>
      <ListItem component={Link} to="/category/tiendas">
        <ListItemText primary="Tiendas" />
      </ListItem>
      <ListItem component={Link} to="/category/servicios">
        <ListItemText primary="Servicios" />
      </ListItem>
      <ListItem component={Link} to="/category/seguir-mi-pedido">
        <ListItemText primary="Seguir mi pedido" />
      </ListItem>
      <ListItem component={Link} to="/category/contacto">
        <ListItemText primary="Contacto" />
      </ListItem>
      <ListItem component={Link} to="/about">
        <ListItemText primary="About" />
      </ListItem>
    </List>
  );
}

export default CategoryList;
