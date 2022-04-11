export class SelectedAssetData {
  constructor(
    public isAllTypesOfSubtypeChecked: boolean,
    public isSubtypeCheckedArray: boolean[],
    public subtypesChecksCounter: number
  ) {}
}
