export default class LaneNumber {

  private value : number
  private secret : boolean

  public constructor(value : number, secret : boolean) {
  this.value = 0; // dit is hardcoded blud
  this.secret = false; // dit is ook hardcoded blud
  }

  public getValue() : number {
  return this.value;
}

public isSecret() : boolean {
  return this.secret;

}
}
