export class Apartment {
  constructor(
    public city: string,
    public street: string,
    public asset: string,
    public assetNumber: number,
    public floor: number,
    public numberOfRooms: number,
    public size: number,
    public price: number,
    public assetDescription: string,
    public imagePath: string
  ) {}
}
