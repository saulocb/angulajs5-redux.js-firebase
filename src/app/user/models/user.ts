import { Rule } from "./rule";


export class User {
  name: string;
  email: string;
  rule: Rule;
  id: any;
  key: any;
  constructor(){
    this.rule =  new Rule();
    this.rule.ruleName = "user"
  }
}

