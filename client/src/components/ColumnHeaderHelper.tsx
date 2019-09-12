import * as React from "react";
import {ColumnHeader} from "react-mutation-mapper";

export enum ColumnId {
    HUGO_SYMBOL = "hugoSymbol",
    SOMATIC = "somatic",
    SOMATIC_DRIVER = "somaticDriver",
    GERMLINE = "germline",
    PERCENT_BIALLELIC = "percentBialleic",
    MUTATION_PERCENT = "mutationPercent",
    MUTATION_FREQUENCIES = "mutationFrequencies"
}

export const HEADER_COMPONENT: {[id: string] : JSX.Element} = {
    [ColumnId.SOMATIC_DRIVER]: (
        <ColumnHeader
            headerContent={<span>% Somatic Mutant <i className="fa fa-info-circle" /></span>}
            overlay={<span>Includes only likely driver mutations</span>}
        />
    ),
    [ColumnId.SOMATIC]: <ColumnHeader headerContent="% Somatic" />,
    [ColumnId.GERMLINE]: <ColumnHeader headerContent="% Pathogenic Germline" />,
    [ColumnId.PERCENT_BIALLELIC]: (
        <ColumnHeader
            headerContent={<span>% Biallelic <i className="fa fa-info-circle" /></span>}
            overlay={<span>Percent of pathogenic germline carriers biallelic in the corresponding tumor</span>}
        />
    ),
    [ColumnId.MUTATION_PERCENT]: <ColumnHeader headerContent="%"/>,
    [ColumnId.MUTATION_FREQUENCIES]: <ColumnHeader headerContent="Mutation Frequencies"/>
};
