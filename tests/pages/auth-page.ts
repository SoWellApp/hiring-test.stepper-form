import { BasePage } from "./base-page"

export class LoginPage extends BasePage {
  public get relativeUrl() {
    return "login"
  }
  public get elements() {
    return {
      inputs: {
        email: `input[type="email"]`,
        password: `input[type="password"]`
      },
      btns: {
        submit: { name: "Login" }
      }
    }
  }

  public getName() {
    return "Login page"
  }

  public async visit() {
    const response = await super.visit(this.relativeUrl)
    return response
  }

  public getInput(inputName: keyof typeof this.elements.inputs) {
    return this.page.locator(this.elements.inputs[inputName])
  }

  public typeInput(
    inputName: keyof typeof this.elements.inputs,
    payload: string
  ) {
    return this.getInput(inputName).fill(payload)
  }

  public submit() {
    return this.page.getByRole("button", this.elements.btns.submit).click()
  }
}
