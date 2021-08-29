import { Eventing } from "./Eventing";

interface UserProps {
  id?: string | number;
  name?: string;
  email?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  constructor(private data: UserProps) {};

  get(propName: string): (number | string) {
    return this.data[propName];
  }

  set(update: UserProps):void {
    Object.assign(this.data, update);
  }
}