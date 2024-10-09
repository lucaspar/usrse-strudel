import { TagList } from "./_components/TagList";
import { Container, Typography } from "@mui/material";

const IntroductionPage: React.FC = () => {
    return (
        <Container maxWidth="sm">
            <Typography
                variant="h3"
                component="h1"
                sx={{
                    borderBottom: "1px solid",
                    borderBottomColor: "primary.main",
                    marginBottom: 2,
                    paddingBottom: 2,
                }}
            >
                Tags we have:
            </Typography>
            <TagList tags={["Animalia", "Chordata", "Mammalia"]} />
        </Container>
    );
};

export default IntroductionPage;
