import React from "react";
import {
    Box,
    Button,
    IconButton,
    Link,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink } from "react-router-dom";
import { LabelValueTable } from "../../../components/LabelValueTable";
import { DataGrid } from "@mui/x-data-grid";
import { TagList } from "../../my-component/_components/TagList";
import { taskflow } from "../_config/taskflow.config";

interface PreviewPanelProps {
    /**
     * Data for the selected row from the main table
     */
    previewItem: any;
    /**
     * Function to handle hiding
     */
    onClose: () => void;
}

/**
 * Panel to show extra information about a row in a separate panel
 * next to the `<DataTablePanel>`.
 */
export const PreviewPanel: React.FC<PreviewPanelProps> = ({
    previewItem,
    onClose,
}) => {
    const columns = taskflow.pages.index.tableColumns;
    const dataIdField = taskflow.data.list.idField;

    /**
     * Content to render on the page for this component
     */
    return (
        <Paper
            elevation={0}
            sx={{
                height: "100%",
                padding: 2,
            }}
        >
            <Stack spacing={3}>
                <Stack spacing={1}>
                    <Stack direction="row">
                        <Typography variant="h6" component="h3" flex={1}>
                            <Link
                                component={RouterLink}
                                to={`${previewItem[dataIdField]}`}
                                underline="hover"
                            >
                                {previewItem[columns[0].field]}
                            </Link>
                        </Typography>
                        <IconButton size="small" onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    {/* <Typography variant="body2">
                        Row description, subtitle, or helper text.
                    </Typography> */}
                    <TagList
                        tags={[
                            previewItem.kingdom,
                            previewItem.phylum,
                            previewItem.class,
                            previewItem.order,
                        ]}
                    />
                    <TagList
                        tags={[
                            previewItem.family,
                            previewItem.genus,
                            previewItem.species,
                        ]}
                    />
                </Stack>
                {/* <Box>
                    <Typography fontWeight="medium" mb={1}>
                        Property Group 1
                    </Typography>
                    <LabelValueTable
                        rows={[
                            { label: "Property 1", value: "value" },
                            { label: "Property 2", value: "value" },
                            { label: "Property 3", value: "value" },
                        ]}
                    />
                </Box> */}
                <Box>
                    <Typography fontWeight="medium" mb={1}>
                        Location
                    </Typography>
                    <LabelValueTable
                        rows={[
                            {
                                label: "Continent",
                                value: previewItem.continent,
                            },
                            { label: "Country", value: previewItem.country },
                            {
                                label: "Municipality",
                                value: previewItem.municipality,
                            },
                        ]}
                    />
                </Box>
                {/* <Box>
                    <Typography fontWeight="medium" mb={1}>
                        Property Group 2
                    </Typography>
                    <LabelValueTable
                        rows={[
                            { label: "Property 4", value: "value" },
                            { label: "Property 5", value: "value" },
                        ]}
                    />
                </Box> */}
                <Box>
                    <Typography fontWeight="medium" mb={1}>
                        Record
                    </Typography>
                    <LabelValueTable
                        rows={[
                            {
                                label: "Basis of Record",
                                value: previewItem.basisOfRecord,
                            },
                            { label: "Protocol", value: previewItem.protocol },
                            {
                                label: "Status",
                                value: previewItem.occurrenceStatus,
                            },
                        ]}
                    />
                </Box>
                <Box>
                    <Typography fontWeight="medium" mb={1}>
                        Related Data
                    </Typography>
                    <DataGrid
                        rows={relatedRows}
                        columns={relatedColumns}
                        disableRowSelectionOnClick
                        initialState={{
                            pagination: { paginationModel: { pageSize: 5 } },
                        }}
                    />
                </Box>
                <Stack direction="row">
                    <Link
                        component={RouterLink}
                        to={`${previewItem[dataIdField]}`}
                    >
                        <Button variant="contained">View details</Button>
                    </Link>
                    <Button variant="outlined">Export data</Button>
                </Stack>
            </Stack>
        </Paper>
    );
};

/**
 * Placeholder columns for related data table
 */
const relatedColumns = [
    // {
    //     field: "id",
    //     headerName: "ID",
    //     width: 50,
    // },
    // {
    //     field: "attr1",
    //     headerName: "Attribute 1",
    //     width: 100,
    // },
    // {
    //     field: "attr2",
    //     headerName: "Attribute 2",
    //     width: 100,
    // },
    // {
    //     field: "attr3",
    //     headerName: "Attribute 3",
    //     width: 100,
    // },
];

/**
 * Placeholder rows for related data table
 */
const emptyRows = Array(0).fill(0);
const relatedRows = emptyRows.map((d, i) => {
    return { id: i, attr1: "value", attr2: "value", attr3: "value" };
});
