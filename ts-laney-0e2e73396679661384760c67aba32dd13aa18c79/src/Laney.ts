
export default class Laney {
  public constructor(numberOfLanes: number = 3) {

  }

  /**
   * Places the next pending number into the specified lane and then enqueues a new next number.
   * Does nothing if the game is already busted.
   * @param laneIndex index of the lane to receive the number.
   * @returns void
   */
  public placeNumberInLane(laneIndex: number): void {

  }

  /**
   * Returns a message about the current game state.
   * If busted, indicates that the game is over. Otherwise, lists the next numbers.
   * @returns string
   */
  public getMessage(): string {
    return "You busted! Start a new game?";
  }

  /**
   * Returns the total score for the specified lane.
   * @param laneIndex index of the lane to get the total for.
   * @returns number
   */
  public getLaneTotal(laneIndex: number): number {
    return 0;
  }

  /**
   * Returns the total score across all lanes.
   * @returns number
   */
  public getTotal(): number {
    return 0;
  }

  /**
   * Returns whether the game is busted.
   * @returns boolean
   */
  public isBusted(): boolean {
    return false;
  }
}
