import { ExploreDataConfig } from "./taskflow.types";

export const taskflow: ExploreDataConfig = {
    data: {
        /**
         * Data definition for the initial items list
         */
        list: {
            source: "https://api.gbif.org/v1/occurrence/search",
            staticParams: null,
            idField: "key",
            queryMode: "server",
        },
        // list: {
        //     /**
        //      * URL or path to the data source
        //      */
        //     source: "data/default/explore-data/exoplanets.csv",
        //     /**
        //      * Key-value object of params that should always be included in the query URL
        //      */
        //     staticParams: null,
        //     /**
        //      * Name of the field in the data that represents a unique identifier for each record.
        //      */
        //     idField: "Id",
        //     /**
        //      * Method by which data should be filtered, either client or server.
        //      */
        //     queryMode: "client",
        // },
        /**
         * Data definition for the item detail page
         */
        // detail: {
        //   source: "data/default/explore-data/exoplanets.csv",
        //   staticParams: null,
        //   idField: "Id",
        //   queryMode: "client",
        // }
        detail: {
            source: "https://api.gbif.org/v1/occurrence/search",
            staticParams: null,
            idField: "key",
            queryMode: "server",
        },
    },
    pages: {
        index: {
            /**
             * Title to appear at the top of the main page.
             */
            title: "Biodiversity Explorer",
            /**
             * Text to appear underneath the title at the top of the main page.
             */
            description: "Explore species observations from around the world.",
            /**
             * List of column definition objects for the columns in the table on the main page.
             */
            tableColumns: [
                {
                    field: "scientificName",
                    headerName: "Species Name",
                    type: "string",
                    width: 200,
                },
                {
                    field: "year",
                    headerName: "Year",
                    type: "number",
                    width: 200,
                },
                {
                    field: "basisOfRecord",
                    headerName: "Base of Record",
                    type: "string",
                    width: 200,
                },
                {
                    field: "elevation",
                    headerName: "Elevation",
                    type: "number",
                    width: 100,
                },
            ],
            /**
             * List of filters to display on the main page and use to filter the main table data.
             * Each filter has a definition object to determine how it renders and functions.
             */
            tableFilters: [
                {
                    field: "elevation",
                    label: "Elevation Filter",
                    // operator: "contains-one-of",
                    paramType: "array-string",
                    filterComponent: "RangeSlider",
                    filterProps: {
                        options: [
                            //
                        ],
                    },
                },
                {
                    field: "basisOfRecord",
                    label: "Basis of Record",
                    paramType: "repeated",
                    filterComponent: "CheckboxList",
                    filterProps: {
                        options: [
                            {
                                label: "Preserved Specimen",
                                value: "PRESERVED_SPECIMEN",
                            },
                            {
                                label: "Fossil Specimen",
                                value: "FOSSIL_SPECIMEN",
                            },
                            {
                                label: "Living Specimen",
                                value: "LIVING_SPECIMEN",
                            },
                            {
                                label: "Observation",
                                value: "OBSERVATION",
                            },
                            {
                                label: "Human Observation",
                                value: "HUMAN_OBSERVATION",
                            },
                            {
                                label: "Machine Observation",
                                value: "MACHINE_OBSERVATION",
                            },
                        ],
                    },
                },
            ],
        },
    },
};
