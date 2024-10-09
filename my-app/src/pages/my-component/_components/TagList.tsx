import { Chip, Stack } from "@mui/material";

interface TagListProps {
    tags: string[];
}

export const TagList: React.FC<TagListProps> = ({ tags }) => {
    return (
        <Stack direction="row" spacing={1}>
            {tags.map((tag) => (
                <Chip key={tag} label={tag} />
            ))}
        </Stack>
    );
};
