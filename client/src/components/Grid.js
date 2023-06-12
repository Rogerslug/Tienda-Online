import React from "react";
import { Grid, Paper } from "@material-ui/core";
import './ProductPage.css';

function ProductPage() {
    const products = [
        //Aquí iran los productos
    ];

    return (
        <div className='productPage'>
            <h2>Nuestros productos</h2>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default ProductPage;