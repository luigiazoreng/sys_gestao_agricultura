import React from "react";
import { Container, Box, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";

const features = [
    { title: "Feature 1", image: "path/to/image1.jpg" },
    { title: "Feature 2", image: "path/to/image2.jpg" },
    { title: "Feature 3", image: "path/to/image3.jpg" },
    { title: "Feature 4", image: "path/to/image4.jpg" },
];

const FeaturesPage = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "calc(100vh - 80px)", // Adjust for the height of the NavBar
                marginTop: "80px", // Adjust for the height of the NavBar
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Features
            </Typography>
            <Grid container spacing={4}>
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={feature.image}
                                    alt={feature.title}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="h2">
                                        {feature.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default FeaturesPage;