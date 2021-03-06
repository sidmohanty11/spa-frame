import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-name': this.onSetNameClick,
      'click:.set-age': this.onSetAgeClick,
      'click:.set-email': this.onSetEmailClick,
      'click:.save': this.onSaveClick,
    }
  }

  onSetNameClick = (): void => {
    const input: HTMLInputElement | null = this.parent.querySelector('#name');

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  }

  onSetAgeClick = (): void => {
    const input: HTMLInputElement | null = this.parent.querySelector('#age');

    if (input) {
      const age = parseFloat(input.value);
      this.model.set({ age });
    }
  }

  onSetEmailClick = (): void => {
    const input: HTMLInputElement | null = this.parent.querySelector('#email');

    if (input) {
      const email = input.value;
      this.model.set({ email });
    }
  }

  onSaveClick = (): void => {
    this.model.save();
  }

  template(): string {
    return `
    <div class="card" style="margin: auto">
      <h1>User Form</h1>
      <div>
        <input type="text" id="name" placeholder="name" />
        <button class="set-name">Update Name</button>
      </div>
      <div>
        <input type="email" id="email" placeholder="email" />
        <button class="set-email">Update Email</button>
      </div>
      <div>
        <input type="number" id="age" placeholder="age" />
        <button class="set-age">Update Age</button>
      </div>
      <button class="save">Save!</button>
    </div>
    `;
  }
}