export interface ICountByTumorType
{
    tumorType: string;
    tumorTypeCount: number;
    variantCount: number;
}

export interface IMutation
{
    chromosome: string;
    countsByTumorType: ICountByTumorType[];
    biallelicCountsByTumorType: ICountByTumorType[];
    qcPassCountsByTumorType: ICountByTumorType[];
    endPosition: number;
    hugoGeneSymbol: string;
    mutationStatus: string;
    pathogenic: string;
    penetrance: string;
    referenceAllele: string;
    startPosition: number;
    variantAllele: string;
}

export interface IExtendedMutation extends IMutation
{
    somaticFrequency: number;
    germlineFrequency: number;
    pathogenicGermlineFrequency: number;
    biallelicGermlineFrequency: number;
    biallelicPathogenicGermlineFrequency: number;
    ratioBiallelicPathogenic: number;
}