import { Box, Card, CardContent, CardMedia, Typography, Chip, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ParentTag, PaperTag, FancyDivider } from "./MovieDetails.styles";


const InfoSection = ({ title, children }) => (
  <Box textAlign="center">
    <Typography variant="h5" fontWeight="700" color="info" mb={1}>
      {title}
    </Typography>
    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={1}>
      {children}
    </Box>
  </Box>
);


const InfoChipList = ({ items }) => (
  <>
    {items.map(({ label, value }, i) => (
      <Typography key={i} color="white">
        {label}: <Chip label={value ?? "N/A"} color="secondary" />
      </Typography>
    ))}
  </>
);


const ResponsivePoster = ({ src, alt, isMobile, isTablet }) => (
  <Card
    sx={{
      width: isMobile ? "100%" : isTablet ? "60%" : 380,
      bgcolor: "transparent",
      boxShadow: "none",
    }}
  >
    <CardMedia
      component="img"
      image={src}
      alt={alt}
      sx={{
        height: isMobile ? 280 : 320,
        objectFit: "fill",
        borderRadius: "0.5rem",
      }}
    />
  </Card>
);

const MovieDetailView = () => {
  const movie = useSelector((state) => state.movies.selectedMovie);

  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    console.log("Selected Movie from Redux Store:", movie);
  }, [movie]);

  if (!movie) return null;

  return (
    <ParentTag>
      <PaperTag>
 
        <Box
          display="flex"
          flexDirection={isMobile || isTablet ? "column" : "row"}
          justifyContent="space-around"
          alignItems="center"
          gap={3}
          p={2}
        >
       
          <InfoSection title="Genres">
            {movie.genres?.map((genre, i) => (
              <Chip key={i} label={genre} color="secondary" />
            ))}
          </InfoSection>

         
          <ResponsivePoster
            src={movie.primaryImage?.url}
            alt={movie.originalTitle}
            isMobile={isMobile}
            isTablet={isTablet}
          />

        
          <InfoSection title="Rating">
            <InfoChipList
              items={[
                { label: "Aggregate", value: movie.rating?.aggregateRating },
                { label: "Votes", value: movie.rating?.voteCount },
              ]}
            />
          </InfoSection>
        </Box>

      
        <CardContent>
          <Box textAlign="center" mb={2}>
            <Typography variant={isMobile ? "h4" : "h3"} color="white" fontWeight="700">
              {movie.originalTitle}
            </Typography>
          </Box>

          <FancyDivider />

      
          <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
            gap={3}
            mb={2}
          >
            <InfoChipList
              items={[
                { label: "Id", value: movie.id },
                { label: "Type", value: movie.type },
                { label: "Start Year", value: movie.startYear },
                { label: "Runtime Seconds", value: movie.runtimeSeconds },
              ]}
            />
          </Box>

          <FancyDivider />

        
          <Box mt={2}>
            <Typography variant="h5" color="info" fontWeight="700" mb={1}>
              Plot:
            </Typography>
            <Typography variant="body1" color="white" fontWeight="500">
              {movie.plot}
            </Typography>
          </Box>
        </CardContent>
      </PaperTag>
    </ParentTag>
  );
};

export default MovieDetailView;
