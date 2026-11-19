import LaneNumber from "./Lanenumber.js"

export default class Lane {
  private numbers: LaneNumber[];

  public constructor() {
    this.numbers = [];
  }


  /**
   * bo
   */
  public addNumber(number: LaneNumber): void {
    this.numbers.push(number);
  }

  public getTotal(): number {
    let total: number = 0;
    // eslint-disable-next-line @typescript-eslint/typedef
    for (let i = 0; i < this.numbers.length; i++) {
      total = total + this.numbers[i].getValue();
    }
    return total;
  }


  /**
   * hoi
   *
   * @returns Whether the lane is busted.
   */
  public isBusted(): boolean {
    const total: number = this.getTotal();
    if (total > 70) {
      return true;
    }
    return false;
  }
}
